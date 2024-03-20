import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisruptsService {
  private apiUrl:String = 'https://api.downcheckup.com:3000/user';

  constructor(private http:HttpClient) { }
  getRecentDisrupts(){
    return this.http.get(this.apiUrl+"/get-recent-disrupts");
  }
}
