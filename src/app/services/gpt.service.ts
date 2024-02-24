import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor( private http : HttpClient ) { }

  getGptResponse(req : any) {

    // console.log( req );

    const REGION = environment.region;
    const PROJECT_ID = environment.firebase.projectId;

    // console.log( REGION + PROJECT_ID );

    // TODO: USE VARIABLES NOT HARDCODED
    const apiUrl = "https://us-central1-aiplatform.googleapis.com/v1/projects/gsc24-57103/locations/us-central1/publishers/google/models/gemini-pro:streamGenerateContent";
    
    console.log( apiUrl );
    
    return this.http.post(apiUrl, req);
  }
}
