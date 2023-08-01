import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})

// Pipe che trasforma un input (stringa) in UPPERCASE
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.toUpperCase();
  }
}
