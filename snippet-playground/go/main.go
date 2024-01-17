package main

import (
	"context"
	"fmt"
	// "math/rand"
	"os"

  api "github.com/seamapi/go"
	seam "github.com/seamapi/go/client"
  // "github.com/seamapi/go/useridentities"
  "github.com/seamapi/go/acs"


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

acsCredential, uErr := client.Acs.Credentials.Create(context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
    IsMultiPhoneSyncCredential: api.Bool(true),
    CardFormat: acs.CredentialsCreateRequestCardFormatRfid48.Ptr(),
    // FacilityCode: "9",
    AccessMethod: "mobile_key",
})

if uErr != nil {
    return uErr
}

fmt.Println(acsCredential)
return nil

// users, err := client.Acs.Users.List(context.Background(), &acs.UsersListRequest{})
// if err != nil {
//     return err
// }
// fmt.Println(users)
// return nil




}
