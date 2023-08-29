import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  selectedmovie: any;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(public route: ActivatedRoute,private moviesServ : MoviesService) {}

 
  ngOnInit(): void {
    let movieId = parseInt(this.route.snapshot.paramMap.get('id')!);
   this.moviesServ.getMovieById(movieId).subscribe({next:(response)=>{
        this.selectedmovie=response
   }})
    console.log(this.selectedmovie);
    
  }
}
