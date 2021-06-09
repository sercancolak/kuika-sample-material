import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { KuikaModule } from "./kuika/kuika.module";
import { NgxKuikaLibModule } from "@kuika/kuika-angular-cl-agent";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KuikaModule, NgxKuikaLibModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
