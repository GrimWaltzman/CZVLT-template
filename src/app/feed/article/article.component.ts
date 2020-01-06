import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public artID;
  public artTitle;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    let title = this.route.snapshot.paramMap.get('title');

    this.artID = id;
    this.artTitle = title;

    console.log(this.artID);
    console.log(this.artTitle);
 }

}
