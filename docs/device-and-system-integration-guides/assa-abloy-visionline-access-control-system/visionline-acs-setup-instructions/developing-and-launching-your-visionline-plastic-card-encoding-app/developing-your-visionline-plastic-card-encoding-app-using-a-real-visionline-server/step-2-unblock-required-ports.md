---
description: Learn which ports are required for using Visionline.
---

# Step 2: Unblock Required Ports

Unblock the required ports on the Visionline server and client.

1. Unblock the following ports on the server:
   * All files in the Visionline `Program Files` and `ProgramData` folders\
     The default locations are `C:\Program Files\ASSA ABLOY\Visionline` and `C:\ProgramData\ASSA ABLOY\Visionline`.
   * Firewall ports:
     * Port 135 (TCP)
     * 3001 (TCP)
     * 7799, 7788 (TCP/UDP)
     * Lock Service Port (27015 default) (TCP)
     * PMS port (4000 default) (TCP)
2. Unblock the following ports on the client:
   * All files in the Visionline `Program Files` and `ProgramData` folders\
     The default locations are `C:\Program Files\ASSA ABLOY\Visionline` and `C:\ProgramData\ASSA ABLOY\Visionline`.
   * Firewall ports
     * Port 135 (TCP)
     * 3001 (TCP)
     * DCOM ports

For more details, see the following ASSA ABLOY Visionline document:

{% file src="../../../../../.gitbook/assets/VisiOnline Server Client and DCOM Port Requirements.pdf" %}
