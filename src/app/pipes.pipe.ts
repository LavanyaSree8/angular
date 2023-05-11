import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value:any,wish:string): string {
  // console.log(value);
    // return "hi";
   if(value.gender=="f")
   return "hello miss  "+ value.name+" " +wish;
   else 
   return "hello mr ${p.name} ${wish}";
  }

}
