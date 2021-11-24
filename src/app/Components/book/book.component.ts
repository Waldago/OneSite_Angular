import { Component, OnInit, Output, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../../Services/Book/book.service';//importamos nuestro servicio
import { libro } from 'src/app/Models/libro';
import { capitulo } from 'src/app/Models/capitulo';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Output()
  books : Observable <any[]>

  libros !: libro[];

  capitulos !: capitulo[];

  capitu1 !: capitulo[];
  capitu2 !: capitulo[];
  capitu3 !: capitulo[];

  i : number = 0;

  bir : string [] = [
    "assets/img/fotr.jpg",
    "assets/img/ttt.jpg",
    "assets/img/rotk.jpg"
  ]

  constructor(public bookservice: BookService) {
    this.books=this.bookservice.getAllBooks()

   }

  ngOnInit(): void {
    this.bookservice.getAllBooks().subscribe(Response => {
      console.log(Response)
      this.libros = Response.docs
      Response.docs.forEach((element: any) => {
        console.log(this.i)
        this.bookservice.getAllChapBooks(element._id).subscribe(data=>{
          console.log("capitulo:",data.docs)
          console.log("pasada numero: ",this.i)
          if(this.i === 0){
            this.capitu1=data.docs
            this.capitu1.forEach((data : any)=>{
              console.log(data)
            })
          }
          if(this.i===1){
            this.capitu2=data.docs
            this.capitu2.forEach((data : any)=>{
              console.log(data)
            })
          }
          if(this.i===2){
            this.capitu3=data.docs
            this.capitu3.forEach((data : any)=>{
              console.log(data)
            })
          }
          this.capitulos = data.docs
          this.i++
        })
        
      });
    }, error=>{
      console.error(error)
    }
    )
  }

}
