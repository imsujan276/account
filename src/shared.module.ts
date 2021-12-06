import { NgModule } from "@angular/core";

import { DaybookReportPageModule } from "./pages/daybook-report/daybook-report.module";
import { LedgerDetailPageModule } from "./pages/ledger-detail/ledger-detail.module";
import { LedgerSummaryPageModule } from "./pages/ledger-summary/ledger-summary.module";
import { LoginPageModule } from "./pages/login/login.module";
import { SelectCompanyModalPageModule } from "./pages/select-company-modal/select-company-modal.module";
import { StockDetailPageModule } from "./pages/stock-detail/stock-detail.module";
import { StockSummaryPageModule } from "./pages/stock-summary/stock-summary.module";

@NgModule({
    imports: [
        LoginPageModule,
        LedgerSummaryPageModule,
        LedgerDetailPageModule,
        DaybookReportPageModule,
        StockSummaryPageModule,
        StockDetailPageModule,
        SelectCompanyModalPageModule,
    ],
    declarations: [],
   exports: []
  })
  export class SharedModule { }