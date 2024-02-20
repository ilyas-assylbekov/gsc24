import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor( private http : HttpClient ) { }

  getGptResponse(req : any) {

    const REGION = environment.region;
    const PROJECT_ID = environment.firebase.projectId;

    const apiUrl = "https://${REGION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${REGION}/publishers/google/models/gemini-pro:streamGenerateContent";
    return this.http.post(apiUrl, req);
  }
}
