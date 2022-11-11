import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

 transform(value: number, designation:string,  salary:number) {
   if(designation === 'Trainer')
   {
    return (salary * 10) / 100
   }
   else if(designation === 'HR')
   {
    return (salary * 8) / 100;
   }
   else if(designation === 'Accounts')
   {
    return (salary * 5) / 100;
   }
   return 0;
 }

}
