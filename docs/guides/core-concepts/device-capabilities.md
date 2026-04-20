# Device Capabilities

Seam decomposes the ensemble of features offered by a device into capabilities. In other words, a device capability encapsulates **a feature or function of a device.** \[1]

A device can have one or more capabilities describing what you can do with it.&#x20;

For example, a battery-powered door lock with a pin-pad such as Yale Assure would have the `lock`, `access_codes`, and `battery` capabilities.

Seam exposes each capability as a set of APIs. Furthermore, those APIs are standardized across brands for ease of integration.



![](<../.gitbook/assets/image (10).png>)

### Capabilities -> Actions, Properties, and Events

Each device capability decomposes into 3 sets of affordances:&#x20;

* **Actions** — things you can do to it.&#x20;
* **Properties** — the current state of the device.
* **Events** — reports from the device describing state transitions.&#x20;

For example, the `lock` capability decomposes in the following manner:

* **Actions:** `UNLOCK` and `LOCK`
* **Properties:**  a `locked` status to determine the lock's current status
* **Events:** a list of lock/unlock events logging all of the lock's transitions.

### Standardizing Capabilities Across Device Brands

The Seam API standardizes capabilities across brands. For example, an unlock action on a door lock always requires the same API call. This is irrespective of whether the lock brand is a Yale, August, Schlage...etc.

However, a perfectly uniform interface is not always possible.&#x20;

For example, some door locks with the `access_codes` capability require different pin-code length. Some locks require 5 digits. Others require 4 to 8.

In those instances, we attempt to handle these differences for you. For example, we will generate and set a pin code of the appropriate length. However, you may wish to set your own code. We let you do so, but it must meet the constraints set by the device.





\[1] This device interaction model leans heavily on the wonderful work done by the [W3C WoT](https://www.w3.org/TR/wot-architecture/#sec-interaction-model).

