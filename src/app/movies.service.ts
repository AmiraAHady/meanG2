import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = '49560ad2a12709cba7c0bd0903b19313';
  language: string = 'en-Us';
  constructor(private http: HttpClient) {}


  getAllMovies(pageNumber:number=1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getMovieById(movieID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  searchAllMovies(movieName: string,pageNumber:number=1): Observable<any> {
    if (movieName == '') {
      return this.getAllMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }
  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';
    
    return this.language;
  }
}
