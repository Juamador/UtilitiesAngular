import { Schedule } from './schedule.model';

export class Materia {
    idmateria: number;
    materia: string;
    pkidhorario: number;
    schedules: Schedule[];
}