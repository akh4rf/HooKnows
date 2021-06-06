import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendRequestService {
  get(dest: string): Observable<any> {
    return this.client.get(dest);
  }

  post(dest: string, body: any): Observable<any> {
    return this.client.post<any>(dest, body);
  }

  constructor(private client: HttpClient) {}
}
