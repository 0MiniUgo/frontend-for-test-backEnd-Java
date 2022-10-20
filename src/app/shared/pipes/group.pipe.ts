import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'VINGADORES' : return 'Vingadores';
      case 'LIGA_DA_JUSTICA' : return 'Liga da Justiça';
      default: return '';
    }
  }

}
