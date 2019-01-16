import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RunningTotalPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'runningTotal',
})
export class RunningTotalPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, position) {
    console.log(value, position)
    let runningTotal = 0;
    for(var i=0; i<=position; i++){
      if(parseFloat(value[i]['credit']) == 0 ){
        runningTotal += parseFloat(value[i]['debit'])
      }else{
        runningTotal -= parseFloat(value[i]['credit'])
      }
    }
    return runningTotal;
  }
}
