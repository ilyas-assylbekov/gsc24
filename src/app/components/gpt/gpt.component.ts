import { Component } from '@angular/core';
import { GptService } from '../../services/gpt.service';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.scss'
})
export class GptComponent {

  textInput: string | undefined;
  responseData: any;

  constructor( private gptService : GptService ) {}

  sendRequest() {

    // console.log(this.textInput);

    const requestBody = {
      "contents": {
        "role": "user",
        "parts": {
            "text": this.textInput,
        },
      },
      "safety_settings": {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_LOW_AND_ABOVE"
      },
      "generation_config": {
        "temperature": 0.2,
        "topP": 0.8,
        "topK": 40
      }
    };

    // console.log( requestBody );

    this.gptService.getGptResponse( requestBody )
      .subscribe( res => {
        this.responseData = res;
        console.log( this.responseData );
      }, err => {
        console.error("Error: ", err);
      } )
  }

}
