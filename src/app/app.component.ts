import { Component } from "@angular/core";
import { KuikaModule } from "./kuika/kuika.module";
declare var window: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "material-angular";
  constructor() {
    window.kuikaModule = KuikaModule;
  }
}
