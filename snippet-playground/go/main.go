package main

import (
	"context"
	"fmt"
	"math/rand"
	"os"

	seam "github.com/seamapi/go/client"
)

func main() {
	if err := run(); err != nil {
		_, _ = fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func run() error {
	client := seam.NewClient(
		seam.WithBaseURL(fmt.Sprintf("https://%d.fakeseamconnect.seam.vc", rand.Intn(1000000))),
		seam.WithApiKey("seam_apikey1_token"),
	)
	devices, err := client.Devices.List(context.Background(), nil)
	if err != nil {
		return err
	}
	fmt.Println(devices)
	return nil
}
