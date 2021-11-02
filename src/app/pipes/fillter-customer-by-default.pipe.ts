import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'fillterCustomerByDefault',
})
export class FillterCustomerByDefaultPipe implements PipeTransform {
  transform(
    value: Customer[],
    propertyName: string,
    searchTerm: string
  ): Customer[] {
    return value?.filter((item) => item[propertyName].includes(searchTerm));
  }
}
