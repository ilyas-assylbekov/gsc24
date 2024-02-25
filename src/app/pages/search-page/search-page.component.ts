import { Component } from '@angular/core';
import { RecommendService } from '../../services/recommend.service';
import { Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
  
})
export class SearchPageComponent {

  recommendations: any;

  constructor(private recommendationService : RecommendService, private auth : Auth) {}

  onSearchButtonClick() : void {
    const user = this.auth.currentUser;
    console.log(user);
    //this.recommendations = this.recommendationService.getRecommendation(user);
  }
}
