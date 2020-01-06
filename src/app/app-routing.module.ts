import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './feed/feed.component';
import { ArticleComponent } from './feed/article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo:'main', pathMatch:'full'},
  {path: "main", component: MainComponent},
  {path: "feed", component: FeedComponent},
  {path: 'feed/:id', component: ArticleComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MainComponent, FeedComponent, ArticleComponent, PageNotFoundComponent]
