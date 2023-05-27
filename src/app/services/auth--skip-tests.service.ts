import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthSkipTestsService {
  private rootUrl = 'https://fakejson.com/products';

  constructor(private httpClient: HttpClient) { }
  getAll(){
    return this.httpClient.get(this.rootUrl, {observe: 'response'});
  }

  // Read One
  getOne(id: number){
    return this.httpClient.get(`${this.rootUrl}/${id}`);
  }

  // Delete
  delete(id: number){
    return this.httpClient.delete(`${this.rootUrl}/${id}`);
  }

}
