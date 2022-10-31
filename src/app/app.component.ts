import { Component, VERSION } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  ngOnInit() {
    console.log("Hi");

    const dummyData = {
      name: "rohit",
      job: "developer"
    };

    const encryptedDataInBase64 = CryptoJS.AES.encrypt(
      JSON.stringify(dummyData),
      "secretKey123"
    ).toString();
    console.log("encryptedDataInBase64-->>-->", encryptedDataInBase64);

    const decryptedDataBase64 = CryptoJS.AES.decrypt(
      encryptedDataInBase64,
      "secretKey123"
    );
    const decryptedDataBase64InUtf = decryptedDataBase64.toString(
      CryptoJS.enc.Utf8
    );

    console.log("decryptedDataBase64InUtf--<<--<", decryptedDataBase64InUtf);
    console.log(
      "decryptedDataBase64InUtf--<Obj<--<",
      JSON.parse(decryptedDataBase64InUtf)
    );
  }
}
