import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase(); // Example transformation: convert string to uppercase
  }

}
