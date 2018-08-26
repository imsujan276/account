import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockSummaryPage } from './stock-summary';

@NgModule({
  declarations: [
    StockSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(StockSummaryPage),
  ],
})
export class StockSummaryPageModule {}
