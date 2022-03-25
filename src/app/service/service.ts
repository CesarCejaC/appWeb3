import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class service {

  private API_SERVER = "http://localhost:8081/api/v1/";

  constructor(private http: HttpClient) {
  }

  public getReviews(): Observable<any>{
    return this.http.get(this.API_SERVER + "getReviews")
  }
  public saveReview(Review: any): Observable<any>{
    return this.http.post(this.API_SERVER, Review)
  }
}
