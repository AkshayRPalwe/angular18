import { NgModule, isDevMode } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociateListingComponent } from './component/associate-listing/associate-listing.component';
import { AddAssociateComponent } from './component/add-associate/add-associate.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { associateReducer } from './store/associates/associate.reducer';
import { AssociateEffects } from './store/associates/associate.effects';

@NgModule({
  declarations: [
    AppComponent,
    AssociateListingComponent,
    AddAssociateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({associate:associateReducer}),
    EffectsModule.forRoot([AssociateEffects]),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [provideClientHydration(withEventReplay()), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
