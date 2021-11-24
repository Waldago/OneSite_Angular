import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { capitulo } from 'src/app/Models/capitulo';
import { ChapterService } from 'src/app/Services/Chapter/chapter.service';


@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  
  @Output()
  chapters : Observable <any[]>

  capitulos !: capitulo[]

  constructor(public chapterservice : ChapterService) { 
    this.chapters = this.chapterservice.getAllChapters()
  }

  ngOnInit(): void {
    this.chapterservice.getAllChapters().subscribe(Response => {
      this.capitulos = Response.docs
      console.log(Response)
    }, error=>{
      console.error(error)
    })
  }

}
