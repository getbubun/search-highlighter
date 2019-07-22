import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(value: any, args?: any): any {
    if(!value || !args){
      return value;
    }
    
  return this.highlightedString(value, args);
   

  }


// method to convert lowercase args to titlecase args
    highlightedString(value:string, args:string):SafeHtml{
      let search = args; 
      let index = value.toLowerCase().indexOf(args.toLowerCase());
      if(index >= 0){
        
        var res = value.substring(index ,index + search.length);
        const text = value.replace( res, `<span style= 'background-color: yellow'>${res}</span>` );

          
          return this._sanitizer.bypassSecurityTrustHtml(text);
      }
      return value;
      
      
    }}