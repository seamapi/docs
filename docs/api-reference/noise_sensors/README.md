# Noise Sensors

## The device Object for Noise Sensors

- [Properties](./#properties)
- [Endpoints](./#endpoints)

Represents a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).

Noise sensors are devices that measure that sound level in a given area. You can use noise sensors to monitor noise levels remotely and receive notifications when the noise volume is too loud. The Seam API enables you to configure the [noise thresholds](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) of a noise sensor and receive events when a disturbance is detected. You can also [simulate triggering a noise threshold](https://docs.seam.co/latest/api/noise_sensors/simulate/trigger_noise_threshold.md).

The Seam API represents a noise sensor as a `device` resource that includes both basic device properties and noise sensor-specific properties.

---

## Endpoints


[**`/noise_sensors/list`**](./list.md)

Returns a list of all [noise sensors](https://docs.seam.co/latest/capability-guides/noise-sensors).


