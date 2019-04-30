import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherSettingsComponent } from './dashboard/weather-settings/weather-settings.component';

const routes: Routes = [

	{path: '**', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
* import { NgModule } from '@angular/core';
* import { Routes, RouterModule } from '@angular/router';
* import { UsersLoginComponent } from './users/users-login/users-login.component';
* import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
* import { NewQuestionComponent } from './users/new-question/new-question.component';
* import { LetsPlayComponent } from './users/lets-play/lets-play.component';
*
*
* const routes: Routes = [

* {path: 'login', component: UsersLoginComponent },
* {path: 'dashboard', component: UsersDashboardComponent },
* {path: 'new_question', component: NewQuestionComponent },
* {path: 'lets_play', component: LetsPlayComponent },
* // {path: '**', redirectTo: "/login" },
* 
* ];
* 
* @NgModule({
*  imports: [RouterModule.forRoot(routes)],
*  exports: [RouterModule]
* })
* export class AppRoutingModule { }
*/