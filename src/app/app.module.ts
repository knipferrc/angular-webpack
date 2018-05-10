import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core'
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: process.env.NODE_ENV === 'production'
    }),
    AppRoutingModule
  ],
  declarations: [AppComponent, DashboardComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
