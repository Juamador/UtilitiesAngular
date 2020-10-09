import { Injectable, Inject } from '@angular/core';
// import { WINDOW } from '../window.provider';
import { WINDOW } from './windows-providers';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ComputerService {

    constructor(@Inject(WINDOW) private window: Window, private _http: HttpClient) {
    }

    getHostname(): Observable<any> {
//        return this.window.location.hostname;
        return this._http.get('https://api.ipify.org/?format=json');
    }
}
