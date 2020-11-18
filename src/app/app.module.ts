import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { CreatorComponent } from './creator/creator.component';
import { CallbackComponent } from './callback/callback.component';
import { MapHigherComponent } from './map-higher/map-higher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import for the shared module and all of its compoents 
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    CreatorComponent,
    CallbackComponent,
    MapHigherComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
