---
description: >-
  A practical guide for device manufacturers on building a robust smart lock
  API.
---

# Building a Seam-Compatible Smart Lock API

This guide outlines the technical expectations for building a smart-lock API that integrates cleanly with Seam. It covers authentication, API behavior, events, device reporting, and lock-specific features. Use this as a reference when designing or updating your API.

A Seam-compatible API delivers consistent, real-time device behavior through a predictable and modern integration surface. The following pages break down how to design each part of your API so Seam can integrate your smart locks reliably at scale.

#### What’s in this guide

* [Implementing Authentication](implementing-authentication.md): how to use OAuth2 with stable account identifiers
* [Implementing Your Device Model & Discovery](implementing-your-device-model-and-discovery.md): how to report connectivity, power, and state, and expose list/read endpoints
* [Implementing Lock Actions](implementing-lock-actions.md): how to accept lock/unlock commands and report final results
* [Implementing Access Codes](implementing-access-codes.md): how to support code creation, schedules, deletion, and usage events
* [Webhooks & Events](webhooks-and-events.md): how to publish real-time updates to Seam
