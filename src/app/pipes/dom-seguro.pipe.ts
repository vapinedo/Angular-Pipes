import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform( urlDelRecurso: string ): SafeResourceUrl {
    
    return this.domSanitizer.bypassSecurityTrustResourceUrl( urlDelRecurso ); 
  }

}
