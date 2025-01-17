import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderDuhansComponent } from './header-duhans/header-duhans.component';
import { FooterDuhansComponent } from './footer-duhans/footer-duhans.component';
import { AceDuhansComponent } from './ace-duhans/ace-duhans.component';
import { KingDuhansComponent } from './king-duhans/king-duhans.component';
import { QueenDuhansComponent } from './queen-duhans/queen-duhans.component';
import { JackDuhansComponent } from './jack-duhans/jack-duhans.component';
import {Routes, RouterModule} from '@angular/router';
import { CardDuhansService } from './card-duhans.service';
const approutes: Routes = [
  { path: "", component: AceDuhansComponent },
  { path: "ace", component: AceDuhansComponent },
  { path: "king", component: KingDuhansComponent },
  { path: "queen", component: QueenDuhansComponent },
  { path: "jack", component: JackDuhansComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderDuhansComponent,
    FooterDuhansComponent,
    AceDuhansComponent,
    KingDuhansComponent,
    QueenDuhansComponent,
    JackDuhansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule, ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CardDuhansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
