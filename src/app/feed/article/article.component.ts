import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleRequestService } from '../article-request.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  public id;
  article;
  _url;

  constructor(private route:ActivatedRoute,
              private req: ArticleRequestService,
              ) { }

  ngOnInit() {


    this.id = this.route.snapshot.params.id;
    this._url = `http://localhost:3000/api/articles/${this.id}` //will make a proper url constructor as soon as i figure out how it works
    this.req.requestGet(this._url,'').subscribe((res)=>{
      this.article = res;
      console.log(this.article);
    })
 }

}