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

  private _url:string = 'https://jsonplaceholder.typicode.com/posts' //just a placeholder for testing, obviously, will be replaced with correct API url as soon as that API becomes available 
  constructor(private request: ArticleRequestService,
              private  router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    let batch2 = this.batch.toString()

    console.log(this.batch)

    let params = new HttpParams().set('userId', batch2 ); 

    this.request.requestGet(this._url, params).subscribe((res)=>{


      for(let i in res){            // i am yet to find a more effective way of doing this
        this.articles.push(res[i]); // also i will probably make it into a separate servise at some point
      }
      
    });
    this.batch += 1;

  }

  showArticle(article){
    this.router.navigate(['/feed', article.id])
  }
}
