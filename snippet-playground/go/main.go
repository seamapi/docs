package main

import (
	"context"
	"fmt"
	// "math/rand"
	"os"

  api "github.com/seamapi/go"
	seam "github.com/seamapi/go/client"
  // "github.com/seamapi/go/useridentities"
  // "github.com/seamapi/go/acs"



)

func main() {
	if err := run(); err != nil {
		_, _ = fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func run() error {
	client := seam.NewClient(
		// seam.WithBaseURL(fmt.Sprintf("https://%d.fakeseamconnect.seam.vc", rand.Intn(1000000))),
		// seam.WithApiKey("seam_apikey1_token"),
		seam.WithApiKey("seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"),
	)
	// devices, err := client.Devices.List(context.Background(), nil)
	// if err != nil {
	// 	return err
	// }
	// fmt.Println(devices)
	// return nil

// userIdentityKey := "jenny_lee"
// email := "jenny@example.com"
// // phoneNumber := "+15555550111"
// // fullName := "Jenny Lee"

// userIdentity, uErr := client.UserIdentities.Create(context.Background(), &useridentities.UserIdentitiesCreateRequest{
//     // UserIdentityKey: &userIdentityKey,
//     UserIdentityKey: api.String("fred_smith"),
//     EmailAddress: api.String("fred@example.com"),
//     // EmailAddress: &email,
//     // PhoneNumber: &phoneNumber,
//     // FullName: &fullName,
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(userIdentity)
// return nil

// userIdentity, uErr := client.UserIdentities.Create(context.Background(), &api.UserIdentitiesCreateRequest{
//     UserIdentityKey: api.String("12345"),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(userIdentity)
// return nil


// userIdentities, err := client.UserIdentities.List(context.Background())
// if err != nil {
//     return err
// }
// fmt.Println(userIdentities)
// return nil

// userIdentity, uErr := client.UserIdentities.Get(
//     context.Background(),
//     useridentities.NewUserIdentitiesGetRequestFromUserIdentitiesGetRequestUserIdentityId(
//         &useridentities.UserIdentitiesGetRequestUserIdentityId{
//             UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//         },
//     ),
// )

// if uErr != nil {
//     return uErr
// }

// fmt.Println(userIdentity)
// return nil

// _, uErr := client.UserIdentities.AddAcsUser(context.Background(), &useridentities.UserIdentitiesAddAcsUserRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//     AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// acsUsers, uErr := client.UserIdentities.ListAcsUsers(context.Background(), &useridentities.UserIdentitiesListAcsUsersRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsUsers)
// return nil

// acsSystems, uErr := client.UserIdentities.ListAcsSystems(context.Background(), &useridentities.UserIdentitiesListAcsSystemsRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsSystems)
// return nil

// _, uErr := client.UserIdentities.RemoveAcsUser(context.Background(), &useridentities.UserIdentitiesRemoveAcsUserRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//     AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// _, uErr := client.UserIdentities.Delete(context.Background(), &api.UserIdentitiesDeleteRequest{
//   UserIdentityId: "44d48b20-0dbe-419d-91ca-ab8bceecd135",
// })

// if uErr != nil {
//   return uErr
// }

// return nil

// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//     UserIdentityId: "eec124d4-ece5-4367-b154-dbd42127c2bb",
//     CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     AcsCredentialPoolId: api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
//     CreateCredentialManagerUser: api.Bool(true),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil

// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//     // Use the ACS system ID for the credential service.
//     CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     // Use the user identity ID for the guest user identity.
//     UserIdentityId: "f3dd17cd-4a23-41e1-8aac-1905ae05ad6d",
//     CreateCredentialManagerUser: api.Bool(true),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil


// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//     CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     AcsCredentialPoolId: api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
//     CreateCredentialManagerUser: api.Bool(true),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil

// enrollmentAutomations, uErr := client.UserIdentities.EnrollmentAutomations.List(context.Background(), &useridentities.EnrollmentAutomationsListRequest{
//     UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomations)
// return nil

// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Get(
//     context.Background(),
//     useridentities.NewEnrollmentAutomationsGetRequestFromEnrollmentAutomationsGetRequestUserIdentityId(
//         &useridentities.EnrollmentAutomationsGetRequestUserIdentityId{
//             UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//         },
//     ),
// )

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil

// acsCredential, uErr := client.Acs.Credentials.Create(context.Background(), &acs.CredentialsCreateRequest{
//     AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
//     IsMultiPhoneSyncCredential: api.Bool(true),
//     CardFormat: acs.CredentialsCreateRequestCardFormatRfid48.Ptr(),
//     // FacilityCode: "9",
//     AccessMethod: "mobile_key",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsCredential)
// return nil

// users, err := client.Acs.Users.List(context.Background(), &acs.UsersListRequest{})
// if err != nil {
//     return err
// }
// fmt.Println(users)
// return nil

	// devices, err := client.Devices.List(context.Background(), nil)
	// if err != nil {
	// 	return err
	// }
	// fmt.Println(devices)
	// return nil

// DOES NOT WORK (YET?)
// connectWebviews, err := client.ConnectWebviews.List(
//   context.Background(),
//   &api.ConnectWebviewsListRequest{
//     CustomMetadataHas: {"internal_account_id":"user-1"},
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(connectWebviews)
// return nil

// customMetadata := map[string]ConnectWebviewsCreateRequestCustomMetadataValue

// INCORRECT
// connectWebview, err := client.ConnectWebviews.Create(
//   context.Background(),
//   &api.ConnectWebviewsCreateRequest{
//     CustomMetadata: map[string]string{"internal_account_id":"user-1"},
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(connectWebview)
// return nil

// connectWebview, err := client.ConnectWebviews.Create(
//   context.Background(),
//   &api.ConnectWebviewsCreateRequest{
// 			AcceptedProviders: []api.AcceptedProvider{
// 				api.AcceptedProviderEcobee,
// 			},
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(connectWebview.LoginSuccessful) // false
// fmt.Println(connectWebview.Url)
// return nil

// updatedConnectWebview, err := client.ConnectWebviews.Get(
//   context.Background(),
//   &api.ConnectWebviewsGetRequest{
// 			ConnectWebviewId: connectWebview.ConnectWebviewId,
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(updatedConnectWebview.LoginSuccessful) // true
// return nil

// connectedAccounts, err := client.ConnectedAccounts.List(context.Background())
// if err != nil {
//   return err
// }
// fmt.Println(connectedAccounts)
// return nil

// connectWebviews, err := client.ConnectWebviews.List(context.Background(), nil)
// if err != nil {
//   return err
// }
// fmt.Println(connectWebviews)
// return nil

// devices, err := client.Devices.List(
// 	context.Background(), nil)
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil

// devices, err := client.Devices.List(
// 	context.Background(), &api.DevicesListRequest{
//     DeviceType: api.DeviceTypeEcobeeThermostat.Ptr(),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil


// device, err := client.Devices.Get(
// 	context.Background(),
//   &api.DevicesGetRequest{
//     DeviceId: api.String("36cf1a96-196d-41b0-9804-88154387f1f9"),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println("Online:", device.Properties.Online)
// return nil

// device_connected_events, err := client.Events.List(
// 	context.Background(),
//   &api.EventsListRequest{
//     DeviceId: api.String("36cf1a96-196d-41b0-9804-88154387f1f9"),
//     EventType: api.EventTypeDeviceConnected.Ptr(),
//     Since: api.String("2024-01-01T00:00:00Z"),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(device_connected_events)
// return nil

// In progress
// device, err := client.Devices.Get(
// 	context.Background(),
//   &api.DevicesGetRequest{
//     // DeviceId: api.String("c2cc3831-f347-444e-b83b-d1f14dbb5893"),
//     DeviceId: api.String("36cf1a96-196d-41b0-9804-88154387f1f9"),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println("Online:", device.Properties.Online)
// return nil

// if ($device->properties->has_direct_power === true) {
//   echo "Power Source: Wired\n";
// } else {
//   echo "Power Source: Battery-powered\n";
//   // echo "Battery Level: " + $device->properties->battery->level + "\n";
//   echo "Battery Level: {$device->properties->battery->level}\n";
//   echo "Battery Status: {$device->properties->battery->status}\n";
// }

// acsUsers, uErr := client.UserIdentities.ListAcsUsers(context.Background(), &api.UserIdentitiesListAcsUsersRequest{
//     UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsUsers)
// return nil




// credentials, uErr := client.Acs.Credentials.List(context.Background(), &acs.CredentialsListRequest{
//     UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(credentials)
// return nil

// credentials, uErr := client.Acs.Credentials.List(context.Background(), acs.NewCredentialsListRequestFromCredentialsListRequestUserIdentityId(&acs.CredentialsListRequestUserIdentityId{
// 	UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// }))

// if uErr != nil {
// 	return uErr
// }

// fmt.Println(credentials)
// return nil



// _, uErr := client.Acs.Credentials.Delete(context.Background(), &acs.CredentialsDeleteRequest{
//     AcsCredentialId: "967c1fe0-fa8e-43a5-b7d1-3cfe1ffca31d",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// _, uErr := client.Acs.Credentials.Delete(context.Background(), &acs.CredentialsDeleteRequest{
//     AcsCredentialId: "2abb3708-92f1-4692-95bc-89fba36030fd",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// enrollmentAutomations, uErr := client.UserIdentities.EnrollmentAutomations.List(context.Background(), &useridentities.EnrollmentAutomationsListRequest{
//     UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomations)
// return nil

// acsUser, uErr := client.Acs.Users.Get(
//     context.Background(),
//     &acs.UsersGetRequest{
//         AcsUserId: "d15565e5-d8d1-4e0d-b107-6082929fb31d",
//     },
// )

// if uErr != nil {
//     return uErr
// }

// Incorrect
// _, err := client.UserIdentities.AddAcsUser(context.Background(), &api.UserIdentitiesAddAcsUserRequest{
//     UserIdentityId: "f3dd17cd-4a23-41e1-8aac-1905ae05ad6d",
//     AcsUserId: &acsUser.acsUserId,
// })

// if err != nil {
//     return err
// }

// return nil

// thermostats, uErr := client.Thermostats.List(context.Background(), nil)

// if uErr != nil {
//     return uErr
// }

// fmt.Println(thermostats)
// return nil

// thermostat, uErr := client.Thermostats.Get(context.Background(), &api.ThermostatsGetRequest{
//       DeviceId: api.String("5ce2cd35-09b1-458c-bb08-51ee83c35be7"),
//   })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(thermostat)
// return nil

// heat_attempt, uErr := client.Thermostats.Heat(context.Background(), &api.ThermostatsHeatRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   HeatingSetPointCelsius: api.Float64(20),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(heat_attempt)
// return nil

// action_attempt, uErr := client.ActionAttempts.Get(context.Background(), &api.ActionAttemptsGetRequest{
//   ActionAttemptId: "40dc817d-9ae0-4037-9d4a-736700ee467b",
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(action_attempt)
// return nil

// heat_cool_request, uErr := client.Thermostats.HeatCool(context.Background(), &api.ThermostatsHeatCoolRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   HeatingSetPointCelsius: api.Float64(20),
//   CoolingSetPointCelsius: api.Float64(25),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(heat_cool_request)
// return nil

// off_request, uErr := client.Thermostats.Off(context.Background(), &api.ThermostatsOffRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(off_request)
// return nil
// }

// fan_on_request, uErr := client.Thermostats.SetFanMode(context.Background(), &api.ThermostatsSetFanModeRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   FanMode: api.FanModeOn.Ptr(),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(fan_on_request)
// return nil
// }


// heat_request, uErr := client.Thermostats.Heat(context.Background(), &api.ThermostatsHeatRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   HeatingSetPointCelsius: api.Float64(20),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(heat_request)

// // {
// //   "action_attempt": {
// //     "status": "pending",
// //     "action_type": "SET_HEAT",
// //     "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
// //     "result": null,
// //     "error": null
// //   },
// //   "ok": true
// // }

// fan_on_request, uErr := client.Thermostats.SetFanMode(context.Background(), &api.ThermostatsSetFanModeRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   FanMode: api.FanModeOn.Ptr(),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(fan_on_request)
// return nil

// // {
// //   "action_attempt": {
// //     "status": "pending",
// //     "action_type": "SET_FAN_MODE",
// //     "action_attempt_id": "1a6993af-4b00-4ca5-bacf-074164959878",
// //     "result": null,
// //     "error": null
// //   },
// //   "ok": true
// // }

// devices, err := client.Devices.List(
// 	context.Background(), &api.DevicesListRequest{
//     DeviceType: api.DeviceTypeNestThermostat.Ptr(),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil

devices, err := client.Devices.List(
	context.Background(), &api.DevicesListRequest{
    DeviceType: api.DeviceTypeHoneywellThermostat.Ptr(),
  },
)
if err != nil {
	return err
}
fmt.Println(devices)
return nil


}
