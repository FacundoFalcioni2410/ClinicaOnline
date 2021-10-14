export interface Paciente {
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
    obraSocial: string;
    imagenes?: string[];
}
