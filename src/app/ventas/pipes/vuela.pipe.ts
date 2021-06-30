import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    
    transform(flag:boolean): string {

        return (flag) ? 'vuela' : 'no vuela';
    }
}