import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  private searchValue: string = '';
  toggleData: boolean = true;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allMovies!: any[];
  language: string = 'en-Us';
  totalMovies!:number;
  pageSize:number=20;
  currentPage:number=1;


  //single object of movies service
  //dependancy injection
  constructor(private myMoviesService: MoviesService) {}

  ngOnInit(): void {
    this.myMoviesService.getAllMovies(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allMovies = response.results;
        this.totalMovies=response.total_results
      },
    });
  }


  set setSearchValue(value: string) {
    this.searchValue = value;
    this.searchMovies(value);
  }

  toggleDescription(movieId: number) {
    for (const movie of this.allMovies) {
      if (movie.id == movieId) {
        movie.showDetails = !movie.showDetails;
      }
    }
  }

  searchMovies(movieName: string) {
    this.myMoviesService.searchAllMovies(movieName,this.currentPage).subscribe({
      next: (data) => {
        this.allMovies=data.results;
      },
    });
  }
  changeLanguage() {
    this.language= this.myMoviesService.changeLanguage()
    this.myMoviesService.getAllMovies().subscribe({
      next: (response) => {
        this.allMovies = response.results;
      },
    });
   }

   changePage(pageInfo:PageEvent){
    this.currentPage=pageInfo.pageIndex+1;
    this.myMoviesService.getAllMovies(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allMovies = response.results;
        this.totalMovies=response.total_results
      },
    });
    
      
   } 
}
