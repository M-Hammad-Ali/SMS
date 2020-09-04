import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {LoginComponent} from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgbModule , NgbModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '',component:LoginComponent}
    ]),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    // LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
