import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { CompaniesBlockComponent } from './companies-block/companies-block.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';


@NgModule({
  declarations: [CompaniesBlockComponent, ClientsPageComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
