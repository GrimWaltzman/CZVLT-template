import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ArticleRequestService } from './article-request.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public batch = 1;

  articles: any = [];

  private _url:string = 'http://localhost:3000/api/articles/' 
  constructor(private request: ArticleRequestService,
              private  router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    let batch2 = this.batch.toString()


    // let params = new HttpParams().set('userId', batch2 ); //Will be patched when i figure out proper URL construction for requests

    this.request.requestGet(this._url, '').subscribe((res)=>{
      console.log(res);

      for(let i in res){            // i am yet to find a more effective way of doing this
        this.articles.push(res[i]); // also i will probably make it into a separate servise at some point
      }
      
    });
    this.batch += 1;

  }

  showArticle(article){
    this.router.navigate(['/feed', article._id])
  }
}
