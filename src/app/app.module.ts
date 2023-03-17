import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PazienteComponent } from './components/paziente/paziente.component';
import { PazientiListComponent } from './components/paziente/pazienti-list/pazienti-list.component';
import { PazienteDetailComponent } from './components/paziente/paziente-detail/paziente-detail.component';
import { PazienteItemComponent } from './components/paziente/pazienti-list/paziente-item/paziente-item.component';
import { VisitaComponent } from './components/visita/visita.component';
import { VisiteListComponent } from './components/visita/visite-list/visite-list.component';
import { VisitaDetailComponent } from './components/visita/visita-detail/visita-detail.component';
import { HeaderComponent } from './header/header.component';
import { EmptyPazienteComponent } from './components/paziente/empty-paziente/empty-paziente.component';
import { EditPazienteComponent } from './components/paziente/edit-paziente/edit-paziente.component';
import { ModalComponent } from './components/modal/modal.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    PazienteComponent,
    PazientiListComponent,
    PazienteDetailComponent,
    VisitaComponent,
    VisiteListComponent,
    VisitaDetailComponent,
    PazienteItemComponent,
    HeaderComponent,
    EmptyPazienteComponent,
    EditPazienteComponent,
    ModalComponent
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
