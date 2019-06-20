import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private serverService: ServerService){}

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  appName = this.serverService.getAppName();
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave(){
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response: Response) =>{
          console.log(response);
          const data = response.json();
          console.log(data);  

      },
      (error) => {
        console.log(error);
      }
    )
  }
  onGet(){
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) =>{
        console.log(servers);
        this.servers = servers;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
//https://http-project-6daba.firebaseio.com