import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  url;
  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  get_topstories()
  {
    this.url = 'https://newsapi.org/v2/top-headlines?country=IN&apiKey=d79659b40e464b51a6955fe10686358c';
    return this.http.get(this.url);
  
  }
  foreign_news(cd)
  {
    this.url = 'https://newsapi.org/v2/top-headlines?sources='+cd+'&apiKey=d79659b40e464b51a6955fe10686358c';
    return this.http.get(this.url);
  }
  specific_news(cd)
  {
    this.url = 'https://newsapi.org/v2/everything?q='+cd+'&from=2020-01-01&sortBy=popularity&apiKey=d79659b40e464b51a6955fe10686358c';
    return this.http.get(this.url);
  }

}
//d79659b40e464b51a6955fe10686358c