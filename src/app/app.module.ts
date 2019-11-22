//angular predefine modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//..end
//..other module
//like loader, toasty
import { ToastyModule } from 'ng2-toasty';
import { NgxSpinnerModule } from 'ngx-spinner';
// loader component
import { SpinnerComponent } from './spinner/spinner.component';
//app component
import { AppComponent } from './app.component';
//main RoutingModule 
import { AppRoutingModule } from './app-routing.module';
//angular material
import {
  MatCardModule,
  MatTableModule, MatExpansionModule,
  MatListModule, MatButtonModule,
  MatInputModule, MatSelectModule, MatFormFieldModule,
  MatToolbarModule, MatIconModule, MatMenuModule, MatTooltipModule, MatAutocompleteModule, MatNativeDateModule, MatDatepickerModule, MatChipsModule, MatPaginatorModule, MatBottomSheetModule
} from '@angular/material';

//header layout
import { PagesComponent } from './pages/pages.component';
//login , signup component or user service
import { UserService } from './services/user.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuard } from './gaurds/login.guard';
import { SignupComponent } from './signup/signup.component';
//change password compont
import { ChangePassComponent } from './modals/change-pass/change-pass.component';
//xml component or service
import { XmlComponent } from './pages/xml/xml.component';
import { XMLService } from './services/xml.service';
import { ChangeKyeroFormatComponent } from './pages/xml/change-kyero-format/change-kyero-format.component';
import { ViewXmlComponent } from './pages/xml/view-xml/view-xml.component';
import { EditColumnComponent } from './pages/xml/edit-column/edit-column.component';


//angular material module used imports
const MaterialModule = [
  MatFormFieldModule,
  MatInputModule, MatCardModule,
  MatTableModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatChipsModule,
  MatPaginatorModule,
  MatBottomSheetModule
];


@NgModule({
  // component imports
  declarations: [
    AppComponent,
    PagesComponent,
    LoginFormComponent,
    SpinnerComponent,
    ChangePassComponent,
    XmlComponent,
    SignupComponent,
    ChangeKyeroFormatComponent,
    ViewXmlComponent,
    EditColumnComponent
  ],
//modals imports
  entryComponents: [ChangePassComponent],
 // import used module
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MaterialModule,
    MatSelectModule,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ToastyModule.forRoot(),
  ],
// import services
  providers: [
    LoginGuard,
    UserService,
    XMLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
