import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;

}




@Injectable({providedIn: 'root'})
export class  AuthService{
    constructor(private http: HttpClient){}
 signup(email:string,password: string){
    return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[AIzaSyCFi9MDV2l8vBSZDzOmzh6Cl2B8PcpXJfc]',
       {
        email:email,
        password: password,
        returnSecureToken: true
       }
    );
 }
}