import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RegisterUser } from '../models/register-user'
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';

const API_Base_URL : string = "http://localhost:5228/api/Account/";
const API_Base_URL2 : string = "http://localhost:5228/api/Courses/";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public currentUserName : string | null = null;

  constructor(private httpClient:HttpClient) { }

  public postRegister(registerUser:RegisterUser): Observable<any>{
    return this.httpClient.post<RegisterUser>(`${API_Base_URL}register`,registerUser);
  }

  public postLogin(loginUser:LoginUser): Observable<any>{
    return this.httpClient.post<LoginUser>(`${API_Base_URL}login`,loginUser);
  }

  public getLogout(): Observable<string>{
    return this.httpClient.get<string>(`${API_Base_URL}logout`);
  }

  public getDemo(): Observable<string>{
     //Adding the JWT Token as a part of Request headers
     let headers = new HttpHeaders();
     headers = headers.append("Authorization",`Bearer ${localStorage['token']}`);

    return this.httpClient.get(`${API_Base_URL}demo`,{headers:headers,responseType:'text'});
  }

  public getCourses(): Observable<string>{
    //Adding the JWT Token to Request headers for Authentication and Authorization
    let headers = new HttpHeaders();
    headers  = headers.append("Authorization",`Bearer ${localStorage["token"]}`);

    return this.httpClient.get(`${API_Base_URL2}allcourses`,{headers:headers,responseType:'text'});
  }
}
