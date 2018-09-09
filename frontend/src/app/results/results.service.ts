import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ResultsService {

  constructor(private http: HttpClient) {
      this.http.get(`${environment.API_URL}/api/hello`, {responseType: 'text'}).subscribe(response => {
        console.log(response);
      });
  }
}
