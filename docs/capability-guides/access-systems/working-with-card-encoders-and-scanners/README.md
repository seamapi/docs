---
description: Learn how to encode plastic cards and then scan these cards.
---

# Working with Card Encoders and Scanners

<figure><img src="../../../.gitbook/assets/card-scanner.png" alt=""><figcaption></figcaption></figure>

Some access control systems require credentials to be [encoded onto plastic key cards](creating-and-encoding-card-based-credentials.md) using a card encoder. This process involves the following two key steps:

1.  Credential or access method creation

    Configure the access parameters for the credential or access method.

    Note that to create a card access method, you create an Access Grant that includes a request for a card access method. The resulting Access Grant includes the card access method.
2.  Card encoding

    Write the credential or access method data onto the card using a compatible card encoder.

Separately, the Seam API also supports [card scanning](scanning-encoded-cards.md), which enables you to scan and read the encoded data on a card. You can use this action to confirm consistency with ACS records or diagnose discrepancies if needed.

To verify if your ACS requires a card encoder, see the [system integration guide](../../../products/access-systems/) for your ACS.

***

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Creating and Encoding Card-based Credentials</strong></td><td></td><td></td><td><a href="creating-and-encoding-card-based-credentials.md">creating-and-encoding-card-based-credentials.md</a></td><td><a href="../../../.gitbook/assets/encode-card.png">encode-card.png</a></td></tr><tr><td><strong>Creating and Encoding Card Access Methods</strong></td><td></td><td></td><td><a href="creating-and-encoding-card-access-methods.md">creating-and-encoding-card-access-methods.md</a></td><td><a href="../../../.gitbook/assets/encode-card.png">encode-card.png</a></td></tr><tr><td><strong>Scanning Encoded Cards</strong></td><td></td><td></td><td><a href="scanning-encoded-cards.md">scanning-encoded-cards.md</a></td><td><a href="../../../.gitbook/assets/scan-card.png">scan-card.png</a></td></tr></tbody></table>
