import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { LedgerDetailPage } from './ledger-detail';

@NgModule({
  declarations: [
    LedgerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LedgerDetailPage),
    PipesModule,
  ],
})
export class LedgerDetailPageModule {}
