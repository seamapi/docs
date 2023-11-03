import {
  createIntegration,
  createComponent,
  FetchEventCallback,
  RuntimeContext,
} from "@gitbook/runtime"

type IntegrationContext = {} & RuntimeContext
type IntegrationBlockProps = { content?: string }
type IntegrationBlockState = { content: string }
type IntegrationAction = {}

const handleFetchEvent: FetchEventCallback<IntegrationContext> = async (
  request,
  context
) => {
  return new Response(
    `
    <html>
      <style>
        html, body {
          margin: 0;
          padding: 0;
        }
      </style>
      <body>
        <script
          type="module"
          src="https://react.seam.co/v/2.0.0/dist/elements.js"
        ></script>
        <script type="module">
          function sendAction(action) {
              window.top.postMessage(
                  {
                      action,
                  },
                  '*'
              );
          }

          window.addEventListener("message", (event) => {
              if (event.data) {
                  const content = event.data.state.content;
                  document.getElementById('content').innerHTML = content;
              }
          });

          sendAction({
              action: '@webframe.ready'
          });
        </script>

        <div id="content"></div>
      </body>
    </html>
  `,
    {
      headers: {
        "Content-Type": "text/html",
        // Don't cache until we're stable
        // "Cache-Control": "public, max-age=60",
      },
    }
  )
}

const seamComponentBlock = createComponent<
  IntegrationBlockProps,
  IntegrationBlockState,
  IntegrationAction,
  IntegrationContext
>({
  componentId: "seam-component",
  initialState: (props) => {
    return {
      content:
        props.content ??
        `
<seam-device-table
  client-session-token="seam_cst1_0000"
  endpoint="https://react.seam.co/api"
/>`.trim(),
    }
  },
  action: async (element, action, context) => {
    return {}
  },
  render: async (element, context) => {
    const { editable } = element.context
    const { environment } = context
    const { content } = element.state

    const output = (
      <webframe
        source={{
          url: environment.integration.urls.publicEndpoint,
        }}
        aspectRatio={16 / 9}
        data={{
          content: element.dynamicState("content"),
        }}
      />
    )

    return (
      <block>
        {editable ? (
          <codeblock
            state="content"
            content={content}
            syntax="html"
            onContentChange={{
              action: "@editor.node.updateProps",
              props: {
                content: element.dynamicState("content"),
              },
            }}
            footer={[output]}
          />
        ) : (
          output
        )}
      </block>
    )
  },
})

export default createIntegration({
  fetch: handleFetchEvent,
  components: [seamComponentBlock],
  events: {},
})
