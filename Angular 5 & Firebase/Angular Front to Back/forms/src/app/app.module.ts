import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { NgmodelComponent } from './components/ngmodel/ngmodel.component';
import { FormSubmiComponent } from './components/form-submi/form-submi.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NgmodelComponent,
    FormSubmiComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
