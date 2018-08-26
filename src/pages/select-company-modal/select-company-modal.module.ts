import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCompanyModalPage } from './select-company-modal';

@NgModule({
  declarations: [
    SelectCompanyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCompanyModalPage),
  ],
})
export class SelectCompanyModalPageModule {}
