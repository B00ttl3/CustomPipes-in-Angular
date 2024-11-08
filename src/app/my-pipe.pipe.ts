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

  // EXAMPLE 4
  // transform(value: string) : string
  //  {
  //   const name = value.split(' ');

  //   return name.map(part=>part.charAt(0).toUpperCase()).join('');
  // }

  // Example 5
  // transform (value: string, gender : string) : string {
  //   if (gender == "Male") {
  //     return `Mr. ${value}`;
  //   }
  //   return `Ms. ${value}`;
  // }

  // Example 6
  // transform(value: number, targetUnit: string): string {
  //   if (isNaN(value)) {
  //     return ''; 
  //   }

  //   let convertedValue: number;

  //   switch (targetUnit) {
  //     case 'F':
  //       convertedValue = (value * 9/5) + 32;
  //       return `${convertedValue.toFixed(2)} °F`;

  //     case 'K':
  //       convertedValue = value + 273.15;
  //       return `${convertedValue.toFixed(2)} K`;

  //     default:
  //       return `${value} °C`; 
  //   }
  // }

  // Example 7:
  transform(data : any [], sortProperty : string, order: 'asc' | 'desc' = 'asc') {
    return data.sort((a,b)=>{
      if(order == 'asc'){
        return a[sortProperty] < b[sortProperty] ? -1 : 1;
      }
      else {
        return a[sortProperty] > b[sortProperty] ? -1 : 1;
      }
    });
  }
}
