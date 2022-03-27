import { HttpClient } from "@angular/common/http";
import { api } from "../../environments/api";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService{

    constructor(private service: HttpClient){

    }

    public getReviews(): Observable<any> {
      return this.service.get(api.API_SERVER + "getReviews")
    }

    public saveReview(new_review: any): Observable<any>{
      return this.service.post(api.API_SERVER + "newReview", new_review)
    }
}
