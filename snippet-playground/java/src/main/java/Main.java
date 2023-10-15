import java.io.Console;
import java.util.Random;
import com.seam.api.Seam;

public class Main {

    private static final Random rand = new Random();
    
    public static void main(String[] args) {
        int randomNumber = rand.nextInt(1_000_000);     

        // Get a Seam Client
        Seam seam = Seam.builder()
            .apiKey("seam_apikey1_token")
            .url(String.format("https://%d.fakeseamconnect.seam.vc", randomNumber))
            .build();

        var devices = seam.devices().list();
        System.out.println(devices);
    }
}
