import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmationModalComponent } from './components/Modals/confirmation-modal/confirmation-modal.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NewCategoryComponent } from './components/Modals/new-category/new-category.component';
import {ReportViewerModule} from 'ngx-ssrs-reportviewer';
import { WINDOW_PROVIDERS } from './services/windows-providers';
import { ComputerService } from './services/computer.services';
import { EditComponent } from './components/edit/edit.component';
import { DropDownInTableComponent } from './components/drop-down-in-table/drop-down-in-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ConfirmationModalComponent,
    NewCategoryComponent,
    EditComponent,
    DropDownInTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReportViewerModule,

    NgbModule.forRoot()
  ],
  providers: [
    WINDOW_PROVIDERS,
    ComputerService
  ],
  entryComponents: [ConfirmationModalComponent, NewCategoryComponent],
  exports: [ConfirmationModalComponent, NewCategoryComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
