import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles = []
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data:any)=>{
      this.articles = data.articles
      console.log(this.articles);
      
    })
  }

}
