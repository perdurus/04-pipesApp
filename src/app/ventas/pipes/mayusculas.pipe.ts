import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(texto:string, enMayusculas:boolean = true): string {

/*         if (enMayusculas){
            return texto.toUpperCase();
        }else{
            return texto.toLowerCase();
        } */

        return (enMayusculas) ? texto.toUpperCase() : texto.toLowerCase();
    }
}