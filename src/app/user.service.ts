import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUsers(): any{
    let response = this._http.get("./assets/user.json")
    console.log(response)
    return response;
  }
}
