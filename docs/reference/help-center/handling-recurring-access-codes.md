---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: false
  outline:
    visible: false
  pagination:
    visible: false
---

# Handling Recurring Access Codes

Seam supports scheduling access codes to a time bound period with a `starts_at` and `ends_at` time, but many times you'll want to create recurring daily or weekly codes to easily interface with cleaners, maintanence staff, or limit-availability access periods (such as a gym that's only accessible 9 to 5). You can implement Recurring Access Codes using the event driven pattern described in this document.

There are three main steps to implementing recurring access codes:

1. Create an access code at it's first scheduled "active period"
2. Set up a webhook for `access_code.deleted`
3. Whenever an access\_code is deleted, set the access code's starts\_at and ends\_at to the next active period

## 1. Create an Access Code at it's First Scheduled "Active Period

> We're still writing this guide! It'll be ready soon!



## 2. Set up a webhook for `access_code.deleted`&#x20;

> We're still writing this guide! It'll be ready soon!

## 3. Whenever an access\_code is deleted, set the access code's starts\_at and ends\_at to the next active period

> We're still writing this guide! It'll be ready soon!

##

## &#x20;





