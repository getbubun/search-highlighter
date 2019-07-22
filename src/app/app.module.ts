import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
//test
import { AppComponent } from "./app.component";
import { UserService } from "./user.service";

import { FilterPipe } from "./filter.pipe";
import { HighlightPipe } from "./highlight.pipe";

@NgModule({
  declarations: [AppComponent, FilterPipe, HighlightPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule, NgxPaginationModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
