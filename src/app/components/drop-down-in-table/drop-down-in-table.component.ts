import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../Models/schedule.model';
import { Materia } from '../../Models/materia.model';


@Component({
  selector: 'app-drop-down-in-table',
  templateUrl: './drop-down-in-table.component.html',
  styleUrls: ['./drop-down-in-table.component.css']
})
export class DropDownInTableComponent implements OnInit {
  ScheduleList: Schedule[] = [
    {idmateria: 1, idhorario: 1, horario: 'de 10:00am a 2:00pm'},
  {idmateria: 1, idhorario: 2, horario: 'de 9:00am a 2:00pm'},
  {idmateria: 1, idhorario: 3, horario: 'de 11:00am a 3:00pm'},
  {idmateria: 1, idhorario: 4, horario: 'de 2:00am a 3:00pm'},
  {idmateria: 2, idhorario: 5, horario: 'de 8:00am a 11:00am'},
  {idmateria: 2, idhorario: 6, horario: 'de 2:00am a 3:00pm'}];

  MateriasList: Materia[] = [
    {idmateria: 1,  materia: 'Matematica', pkidhorario: 0, schedules: []},
    {idmateria: 2,  materia: 'Gramatica', pkidhorario: 0, schedules: []}];
  constructor() { }

  ngOnInit(): void {
  }

 GetMateriaSchedule(item): any {
    item.schedules = this.ScheduleList.filter(x => x.idmateria === item.idmateria);
    item = JSON.stringify(item);
    return item;
 }

}
