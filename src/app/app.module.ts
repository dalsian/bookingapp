// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app-bootstrap.module';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { BrowserXhr } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import components
import { AppComponent } from './app.component';
import {AppHeaderComponent} from './components/header/header.component'
import {AppFooterComponent} from './components/footer/footer.component'
import {AppLoginComponent} from './components/login/login.component'
import {AppRegisterComponent} from './components/register/register.component'
import {AppHomeComponent} from './components/home/home.component'
import {AppTheatersComponent} from './components/theaters/theaters.component'
import {AppListTheatersComponent} from './components/theaters/listTheaters/listTheaters.component'
import {AppNewTheatersComponent} from './components/theaters/newTheater/newTheater.component'

// import services
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';


// import guards
import { AuthGuard } from './guards/auth.guard';

// import utils
import {CustExtBrowserXhr} from './utils/cust-ext-browser-xhr';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'register', component: AppRegisterComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'home', component: AppHomeComponent },
  { path: 'theaters', component: AppTheatersComponent },
  {path: '**', component: AppHomeComponent}
 ];


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppLoginComponent,
    AppRegisterComponent,
    AppHomeComponent,
    AppTheatersComponent,
    AppListTheatersComponent,
    AppNewTheatersComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule
  ],
  providers: [AuthService,HttpService, UserService,MessageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
