import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, num1 : number) 
  {
    return Math.pow(value , num1);
  }

}
