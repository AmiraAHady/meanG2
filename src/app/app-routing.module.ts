import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  // localhost/movies
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'moviedetails/:id',component:MovieDetailsComponent},
  {path:'tv',component:TvShowComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
