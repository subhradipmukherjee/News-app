import { Component, ViewChild } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 /* title: string = "Top Stories";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }*/
  title: string = "Top Stories";
  isAndroid: boolean = false;
  detail:any;
  name:any;
  val:any;
  items=[0,1,2,3,4,5,6,7,8];


  constructor(platform: Platform, public news:NewsProvider) {
    this.isAndroid = platform.is('android');
    
  }
  
  ionViewWillEnter()
  {
    this.topstories();
  }

  topstories()
  {
     this.news.get_topstories().subscribe((res)=>{
       console.log(res);
       this.detail=res;
     })
  }
  articles()
  {
    console.log("artcles");
  }
  specific()
  {
    
    console.log("whats up");
  } 

  load()
  {
    console.log("hey guys");
  }

  getItems(ev) {
    
    this.val = ev.target.value;
    
  }
  getval()
  {
    console.log(this.val);
    this.news.foreign_news(this.val).subscribe((res)=>{
      console.log(res);
      this.detail=res;
    })
  }

  getItems2(ev) {
    
    this.name = ev.target.value;
    
  }
  getval2()
  {
    console.log(this.name);
    this.news.specific_news(this.name).subscribe((res)=>{
      console.log(res);
      this.detail=res;
    })
  }


}
