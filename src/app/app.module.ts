import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';
import { LeftSideComponent } from './template/left-side/left-side.component';
import { RouterModule } from '@angular/router';

import { r } from '../routes/app-routes';
import { UserSidebarComponent } from './template/user-sidebar/user-sidebar.component';
import { NavComponent } from './template/nav/nav.component';
import { BrokerComponent } from './bseg/broker/broker.component';
import { BrokerListComponent } from './bseg/broker/broker-list/broker-list.component';
import { BrokerCreateComponent } from './bseg/broker/broker-create/broker-create.component';
import { BrokerFormComponent } from './bseg/broker/broker-form/broker-form.component';
import { BrokerShowComponent } from './bseg/broker/broker-show/broker-show.component';
import { DashboardComponent } from './bseg/dashboard/dashboard.component';
import { InsurancesComponent } from './bseg/insurances/insurances.component';
import { ClientsComponent } from './bseg/clients/clients.component';
import { PoliciesComponent } from './bseg/policies/policies.component';
import { AlertsComponent } from './bseg/alerts/alerts.component';
import { ChatComponent } from './bseg/chat/chat.component';
import { NotificationsComponent } from './bseg/notifications/notifications.component';
import { BrokerBreadcumbComponent } from './bseg/broker/broker-breadcumb/broker-breadcumb.component';
import { ClientsBreadcumbsComponent } from './bseg/clients/clients-breadcumbs/clients-breadcumbs.component';
import { ClientsListComponent } from './bseg/clients/clients-list/clients-list.component';
import { ClientsFormComponent } from './bseg/clients/clients-form/clients-form.component';
import { ClientsShowComponent } from './bseg/clients/clients-show/clients-show.component'

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LeftSideComponent,
    UserSidebarComponent,
    NavComponent,
    BrokerComponent,
    BrokerListComponent,
    BrokerCreateComponent,
    BrokerFormComponent,
    BrokerShowComponent,
    DashboardComponent,
    InsurancesComponent,
    ClientsComponent,
    PoliciesComponent,
    AlertsComponent,
    ChatComponent,
    NotificationsComponent,
    BrokerBreadcumbComponent,
    ClientsBreadcumbsComponent,
    ClientsListComponent,
    ClientsFormComponent,
    ClientsShowComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AdminModule,
    RouterModule.forRoot(r)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
