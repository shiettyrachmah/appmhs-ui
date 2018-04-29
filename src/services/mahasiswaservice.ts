import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { ContentType } from "@angular/http/src/enums";
import { SearchData } from "../interfaces/searchData";
import { Mahasiswa } from "../interfaces/mahasiswa";

let url: string = 'http://localhost:8080/api/mahasiswa';

@Injectable()
export class MahasiswaService{
private mahasiswa:Mahasiswa;

    constructor(private http: Http){

    }
   
    findAll(){
        return this.http.get(url)
        .map(res=> res.json()) //change request to json
        .catch(this.handlerError);
    }

    save(mahasiswa: Mahasiswa){
        let header = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cache'});
        let options = new RequestOptions({headers:header}); 
        return this.http.post(url, mahasiswa, options)
        .map(res=>res.json())
        .catch(this.handlerError); 
    }

    updateData(mahasiswa: Mahasiswa){
        let header = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cache'});
        let options = new RequestOptions({headers:header}); 
        return this.http.put(url+'/edit', mahasiswa, options)
        .map(res=>res.json())
        .catch(this.handlerError); 
    }

    delete(id){
        return this.http.delete(url + '/' + id)
        .map(res=>res.json())
        .catch(this.handlerError);
    }

    search(searchData: SearchData){
        let header = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cache'});
        let options = new RequestOptions({headers:header}); 
        //console.log(sData);
        return this.http.post(url+'/search', searchData, options)
        .map(res=>res.json())
        .catch(this.handlerError); 
    }

    handlerError(error){
        return Observable.throw(error.json() && 'Serve Error');
    }

    setter(mahasiswa){
        this.mahasiswa=mahasiswa;
    }
   
    
    getter(mahasiswa){
        return this.mahasiswa;
    }
}