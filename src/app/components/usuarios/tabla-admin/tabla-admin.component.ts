import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.scss']
})
export class TablaAdminComponent implements OnInit {
  
  @Input() admins: any;

  constructor() { }

  ngOnInit(): void {
  }

}
