import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RecommendationServiceClient } from '@google-cloud/discoveryengine/build/src/v1alpha';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  private discoveryengineClient = new RecommendationServiceClient();

  constructor(private http : HttpClient) { }

  async getRecommendation(userId : string) {

    const endpoint = "projects/* /locations/global/collections/* /engines/* /servingConfigs/*";
    const userEvent = {};
    // const userEvent = { userId };
    let servingConfig = "";
    // const servingConfig = this.http.get(endpoint);

    const request = {
      servingConfig,
      userEvent,
    };
    const response = await this.discoveryengineClient.recommend(request);

  }
}
