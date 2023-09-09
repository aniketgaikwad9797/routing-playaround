import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() selectedUser:{id:number,name:string};
  user: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}
