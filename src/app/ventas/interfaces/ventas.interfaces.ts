export enum Color{
    rojo, negro, azul,verde, morado, blanco
}

export interface Heroe{
    nombre:string;
    vuela:boolean;
    color: Color;
}