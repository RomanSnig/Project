import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SocketComponent } from './components/socket/socket.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pizzas', component: PizzasComponent},
  {path: 'userPage', component: UserPageComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'socket', component: SocketComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MainComponent,
    LoginComponent,
    PizzasComponent,
    UserPageComponent,
    FeedbackComponent,
    SocketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
