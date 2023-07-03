# Supported Devices Table

## \<SupportedDeviceTable /> [(preview)](https://react.seam.co/?path=/docs/example-supporteddevicetable--docs)

The supported device table allows you to filter, sort, and view all the devices compatible with Seam. You can use this table to indicate what devices are supported by your platform.

```ts
<SupportedDeviceTable brands={["august"]}/>
```

<figure><img src="../../.gitbook/assets/Screen Shot 2023-06-30 at 9.46.33 AM.png" alt=""><figcaption></figcaption></figure>

### Props

<table><thead><tr><th width="184">Name</th><th width="100.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>disableFilter</code></td><td>boolean</td><td>Hide the controls to filter the table. Default: <code>false</code></td></tr><tr><td><code>brands</code></td><td>array</td><td>When set, it will only show devices from specified brands.<br>See <a href="https://docs.seam.co/latest/api-clients/connect-webviews#device-provider-keys">Device Provider Keys</a> for a list of brands you can include in this list.</td></tr><tr><td><code>className</code></td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>

