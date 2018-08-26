import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LedgerDetailPage } from './ledger-detail';

@NgModule({
  declarations: [
    LedgerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LedgerDetailPage),
  ],
})
export class LedgerDetailPageModule {}
