# Supported Devices Table

## \<SupportedDeviceTable /> [(preview)](https://react.seam.co/?path=/docs/components-supporteddevicetable--docs)

The supported device table enables you to filter, sort, and view all the devices compatible with Seam. You can use this table to indicate the devices that your platform supports.

```tsx
{/* Show all devices from all manufacturers */}
<SupportedDeviceTable />

{/* Show devices from a single manufacturer by name */}
<SupportedDeviceTable manufacturers={["August"]} />

{/* Show devices from specific manufacturers by name */}
<SupportedDeviceTable manufacturers={["August", "NoiseAware"]} />

{/* Show devices from specific manufacturers by ID */}
<SupportedDeviceTable manufacturers={[
  "August=cfe546ca-7a99-48e0-a665-4304dca85b4e",
  "NoiseAware=34a8fd85-9ea4-4175-b6db-491e7457bcab",
]} />
```

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
/>" %}



### Props

<table><thead><tr><th width="184">Name</th><th width="100.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>disableFilter</code></td><td>boolean<br><em>Optional</em></td><td>Hide the controls to filter the table. Default: <code>false</code></td></tr><tr><td><code>manufacturers</code></td><td>array<br><em>Optional</em></td><td>Only show devices from specified manufacturers.</td></tr><tr><td><code>excludedManufacturers</code></td><td>array<br><em>Optional</em></td><td>Hide devices from specified manufacturers.</td></tr><tr><td><code>className</code></td><td>string<br><em>Optional</em></td><td>Class name to add to the containing element of the rendered component.</td></tr></tbody></table>

