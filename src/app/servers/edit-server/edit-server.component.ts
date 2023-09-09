import { Component, Input, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  @Input() selectedServer!: { id: number; name: string; status: string };
  serverName = this.selectedServer ? this.selectedServer.name : '';
  serverStatus = this.selectedServer ? this.selectedServer.status : '';

  constructor(private serversService: ServersService) {}

  ngOnInit() {
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.selectedServer.name,
      status: this.selectedServer.status,
    });
  }
}
