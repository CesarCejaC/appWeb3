import { HttpClient } from "@angular/common/http";
import { api } from "../../environments/api";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";
import {Reviews} from "../models/Reviews";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService{

    constructor(private service: HttpClient){

    }
//: Observable<any>
    public getReviews() {
        return this.service.get(api.API_SERVER + "getReviews")
    }

}
