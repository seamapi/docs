# Update the Thermostat Weekly Program

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates the thermostat weekly program for a thermostat device. To configure a weekly program, specify the ID of the daily program that you want to use for each day of the week. When you update a weekly program, the set of programs that you specify overwrites any previous weekly program for the thermostat.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to update the weekly program.

---

**`friday_program_id`** *String*

ID of the thermostat daily program to run on Fridays.

---

**`monday_program_id`** *String*

ID of the thermostat daily program to run on Mondays.

---

**`saturday_program_id`** *String*

ID of the thermostat daily program to run on Saturdays.

---

**`sunday_program_id`** *String*

ID of the thermostat daily program to run on Sundays.

---

**`thursday_program_id`** *String*

ID of the thermostat daily program to run on Thursdays.

---

**`tuesday_program_id`** *String*

ID of the thermostat daily program to run on Tuesdays.

---

**`wednesday_program_id`** *String*

ID of the thermostat daily program to run on Wednesdays.

---


## Response

[action\_attempt](./)

