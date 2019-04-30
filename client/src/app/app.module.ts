import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherSettingsComponent } from './dashboard/weather-settings/weather-settings.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 

import { HttpService } from './http.service';
import { WeatherService } from './weather.service';
import { HomeComponent } from './landing/home/home.component';
import { InfoComponent } from './landing/info/info.component';
import { TutorialComponent } from './landing/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    WeatherSettingsComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
