import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { LacLoginComponent } from './lac-login/lac-login.component';


@NgModule({
  declarations: [
    LacLoginComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
