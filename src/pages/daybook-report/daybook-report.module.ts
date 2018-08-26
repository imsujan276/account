import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaybookReportPage } from './daybook-report';

@NgModule({
  declarations: [
    DaybookReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DaybookReportPage),
  ],
})
export class DaybookReportPageModule {}
