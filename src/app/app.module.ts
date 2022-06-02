import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackableDirective } from './directives';
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { PeopleComponent } from './routes/people/people.component';
import { PlaceComponent } from './routes/place/place.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    PlaceComponent,
    TrackableDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
