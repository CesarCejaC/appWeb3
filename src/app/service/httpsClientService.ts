import { HttpClient } from "@angular/common/http";
import { api } from "../../environments/api";
import { Observable } from "rxjs";


export class HttpClientService{

    constructor(private httpvlir: HttpClient){

    }

    public getReviews(){
        return this.httpvlir.get(api.API_SERVER + "getReviews")
    }

}