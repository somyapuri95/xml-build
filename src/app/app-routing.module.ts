import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { LoginGuard } from './gaurds/login.guard';
import { PagesComponent } from './pages/pages.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { XmlComponent } from './pages/xml/xml.component';
import { SignupComponent } from './signup/signup.component';
import { ChangeKyeroFormatComponent } from './pages/xml/change-kyero-format/change-kyero-format.component';
import { ViewXmlComponent } from './pages/xml/view-xml/view-xml.component';
import { EditColumnComponent } from './pages/xml/edit-column/edit-column.component';
//end....
//child Routes 
const childRoutes: Routes = [
  { path: '', redirectTo: 'xml', pathMatch: 'full' },
  { path: 'xml', component: XmlComponent },
  { path: 'xml/change-kyero-format', component: ChangeKyeroFormatComponent },
  { path: 'xml/view-xml', component: ViewXmlComponent },
  { path: 'xml/edit-column', component: EditColumnComponent }
 ];
//end....

//main routes
 const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent, children: childRoutes}, 
  { path: 'signin', component: LoginFormComponent },
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] }
];
//end....
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
