import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI( environment.API_KEY );
const model = genAI.getGenerativeModel( {model: "gemini-pro"} );

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.scss'
})
export class GptComponent {

  textInput: any;
  responseData: any;

  constructor( public http : HttpClient, ) {}

  async sendRequest() {

    const result = await model.generateContent(this.textInput);
    const response = await result.response;
    this.responseData = response.text();

    // console.log(this.textInput);
    // const prompt = this.buildPrompt( this.textInput );
    // const endpoint = this.buildEndpointUrl( environment );
    // let headers = this.getAuthHeaders(
    //    environment.GCLOUD_AUTH_PRINT_ACCESS_TOKEN,
    // );

    // this.http.post( endpoint, prompt, {headers} ).subscribe((res : any) => {
    //   this.responseData = res.candidates?.[0].content.parts[0].text;
    // });
  }

  // getAuthHeaders(accessToken: string) {
  //   const headers = new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${accessToken}`
  //   );
  //   return headers;
  // }

  // buildEndpointUrl(environment: any ) {
  //   const PROTOCOL = "https://";
  //   const REGION = environment.region;
  //   const PROJECT_ID = environment.firebase.projectId;
  //   const BASE_URL = PROTOCOL + REGION + "-aiplatform.googleapis.com/";
  //   const API_VERSION = "v1";
  //   const MODEL = "gemini-1.0-pro"

  //   let url = BASE_URL;
  //   url += API_VERSION;
  //   url += "/projects/" + PROJECT_ID;
  //   url += "/locations/" + REGION;
  //   url += '/publishers/google';
  //   url += '/models/' + MODEL;
  //   url += ':streamGenerateContent?alt=sse';

  //   return url;
  // }

  // buildPrompt(textInput: string | undefined) {
  //   return {
  //     "contents": {
  //       "role": "user",
  //       "parts": {
  //           "text": textInput,
  //       },
  //     },
  //     "safety_settings": {
  //       "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  //       "threshold": "BLOCK_LOW_AND_ABOVE"
  //     },
  //     "generation_config": {
  //       "temperature": 0.2,
  //       "topP": 0.8,
  //       "topK": 40
  //     }
  //   };
  // }

}
