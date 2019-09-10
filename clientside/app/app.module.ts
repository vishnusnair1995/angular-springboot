import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {SplitButtonModule} from 'primeng/splitbutton';

import {InputTextModule} from 'primeng/inputtext';

import {AccordionModule} from 'primeng/accordion';   
import {ButtonModule} from 'primeng/button';  //accordion and accordion tab

import {PanelModule} from 'primeng/panel';

import {KeyFilterModule} from 'primeng/keyfilter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {CalendarModule} from 'primeng/calendar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {PaginatorModule} from 'primeng/paginator';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { UpdateComponent } from './component/update/update.component';
import { HeaderComponent } from './component/header/header.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { GraphComponent } from './component/graph/graph.component';
import {ChartModule} from 'primeng/chart';
import {CaptchaModule} from 'primeng/captcha';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent,
    LoginComponent,
    UpdateComponent,
    HeaderComponent,
    GraphComponent,
    AdminComponent,

    
    
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
    SplitButtonModule,
    InputTextModule,
    AccordionModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    TableModule,
    OverlayPanelModule,
    HttpClientModule,
    CalendarModule,
    FormsModule,
    FileUploadModule,
    DialogModule,
    TooltipModule,
    PaginatorModule,
    VirtualScrollerModule,
    ScrollPanelModule,
    DropdownModule,
    AutoCompleteModule,
    TabMenuModule,
    MessagesModule,
    MessageModule,
    KeyFilterModule,
    ConfirmDialogModule,
    ChartModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
