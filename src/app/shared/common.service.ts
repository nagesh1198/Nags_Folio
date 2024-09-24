import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:8084/swagger-ui/';

  getData(): Observable<any> {
    return this.http.get(this.apiUrl + 'departments').pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
