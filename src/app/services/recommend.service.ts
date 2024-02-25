import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RecommendationServiceClient } from '@google-cloud/discoveryengine/build/src/v1alpha';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  /* constructor( private discoveryengineClient : RecommendationServiceClient ) { }

  async getRecommendation(user1 : User | null) {

    let userEvent = {};
    if (user1) {
      userEvent = {
        "eventType" : "view-item-list",
        "userPseudoId" : "visitor0",
        "userInfo" : {
          "userId" : user1.uid,
        },
        // "attributionToken" : user2.uid,
      }; 
    }
    let servingConfig = environment.ENGINE_ID;

    const request = {
      servingConfig,
      userEvent,
    };

    const response = await this.discoveryengineClient.recommend(request);
    return response;

  } */
}
