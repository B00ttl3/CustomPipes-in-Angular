import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

    // example 1
  // transform(value: number, num1 : number) 
  // {
  //   return Math.pow(value , num1);
  // }

  transform(value: string)
  {
    return `${value.slice(0,4)}-${value.slice(4,11)}` ;
  }

}
