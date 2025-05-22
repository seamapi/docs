---
description: >-
  Learn the system and port requirements that your production Visionline site
  must meet.
---

# Step 1: Confirm That Your Visionline Site Meets the Requirements

Confirm that your production Visionline site meets the following system and port requirements:

## System Requirements

Make sure that your computer meets the following requirements:

* Key server:
  * Visionline V1.27 (or newer)
  * Windows 10 1901 (or newer)
  * Hosted in a location where internet traffic is allowed

***

## Port Requirements

Make sure that the following ports are unblocked on the Visionline server and client:

### Server Ports

* All files in the Visionline `Program Files` and `ProgramData` folders\
  The default locations are `C:\Program Files\ASSA ABLOY\Visionline` and `C:\ProgramData\ASSA ABLOY\Visionline`.
* Firewall ports:
  * Port 135 (TCP)
  * 3001 (TCP)
  * 7799, 7788 (TCP/UDP)
  * Lock Service Port (27015 default) (TCP)
  * PMS port (4000 default) (TCP)

### Client Ports

* All files in the Visionline `Program Files` and `ProgramData` folders\
  The default locations are `C:\Program Files\ASSA ABLOY\Visionline` and `C:\ProgramData\ASSA ABLOY\Visionline`.
* Firewall ports
  * Port 135 (TCP)
  * 3001 (TCP)
  * DCOM ports

***

## For More Information

See the following ASSA ABLOY Visionline document:

{% file src="../../../../../.gitbook/assets/VisiOnline Server Client and DCOM Port Requirements.pdf" %}
