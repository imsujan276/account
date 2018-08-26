import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LedgerSummaryPage } from './ledger-summary';

@NgModule({
  declarations: [
    LedgerSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(LedgerSummaryPage),
  ],
})
export class LedgerSummaryPageModule {}
