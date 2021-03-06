import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService{
    constructor(private http:Http){}
    storeServers(servers:any[]){
        const header = new Headers({'Content-Type':'application/json'})
        // return this.http.post('https://http-project-6daba.firebaseio.com/data.json',
        // servers,{headers: header});
        return this.http.put('https://http-project-6daba.firebaseio.com/data.json',
        servers,{headers: header});
    }
    getServers(){
        return this.http.get('https://http-project-6daba.firebaseio.com/data')
        .map(
            (response: Response) => {
                const data = response.json();
                for(const server of data){
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        ).catch(
            (error:Response) =>{
                console.log(error);
                return Observable.throwError('Something Went Wrong');
            }
        );
    }
    getAppName(){
        return this.http.get('https://http-project-6daba.firebaseio.com/appName.json')
        .map(
            (response: Response) => {
                const data = response.json();
                console.log(data);
                return data;
            }
        ).catch(
            (error:Response) =>{
                console.log(error);
                return Observable.throwError(error);
            }
        )
    }
}