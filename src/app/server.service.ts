import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServerService{
    constructor(private http:Http){}
    storeServers(servers:any[]){
        const header = new Headers({'Content-Typ':'vimal'})
        return this.http.post('https://http-project-6daba.firebaseio.com/data.json',
        servers,{headers: header});
    }
    getServers(){
        return this.http.get('https://http-project-6daba.firebaseio.com/data.json');
    }
}