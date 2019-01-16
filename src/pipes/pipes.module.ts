import { NgModule } from '@angular/core';
import { RunningTotalPipe } from './running-total/running-total';
@NgModule({
	declarations: [RunningTotalPipe],
	imports: [],
	exports: [RunningTotalPipe]
})
export class PipesModule {}
