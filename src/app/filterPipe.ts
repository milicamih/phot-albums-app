import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        if (!items || !term) {
            return items;
        }
        return items.filter(item =>
            item.title.toLowerCase().indexOf(term.toLocaleLowerCase()) !== -1);
    }
}
