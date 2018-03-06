import { Routes, Router } from "@angular/router";
import { BrokerComponent } from "../app/bseg/broker/broker.component";
import { ClientsComponent } from "../app/bseg/clients/clients.component";
import { InsurancesComponent } from "../app/bseg/insurances/insurances.component";
import { NotificationsComponent } from "../app/bseg/notifications/notifications.component";
import { PoliciesComponent } from "../app/bseg/policies/policies.component";
import { ChatComponent } from "../app/bseg/chat/chat.component";
import { AlertsComponent } from "../app/bseg/alerts/alerts.component";

export const r:  Routes = [
    { path: '', redirectTo: 'starter', pathMatch: 'full' },
    { path: 'broker', component: BrokerComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'insurances', component: InsurancesComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'chat', component: ChatComponent },
]