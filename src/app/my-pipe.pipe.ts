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

  // example 2
  // transform(value: string)
  // {
  //   if (value.length<11) return `Phone number is less than 11 digits. Current length is : ${value.length}`;
  //   if(value.length>11) return `Phone number is greater than 11 digits. Current length is : ${value.length}`;
  //   return `${value.slice(0,4)}-${value.slice(4,11)}` ;
  // }

// Example 3
  // transform(value: string)
  // {
  //   if (value.length<7) return `Weak Password`;
  //   if(value.length<10) return `Medium Password`;
  //   return `Strong Password` ;
  // }

  // eXAMPLE 4
  transform(value: string) : string
   {
    const name = value.split(' ');

    return name.map(part=>part.charAt(0).toUpperCase()).join('');
  }
}
