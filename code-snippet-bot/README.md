# Code Snippet Bot

This is a library/script that generates code snippets inside documentation
whenever you insert a comment like this:

```md
<!-- CODE INJECT START
List all devices in the workspace
-->
<!-- CODE INJECT END -->
```

## Code Snippet Bot relation to Fake

Code snippets are run against the fake, which means they need to use the seeded
values of the fake, you can [see the seed values here](https://github.com/seamapi/fake-seam-connect/blob/2fdadb575779e509e79d0954fecbae01cca21ad8/src/lib/database/seed.ts#L3) e.g. if
the bot is trying to use a device_id, it should use `august_device_1` as the
uuid.
