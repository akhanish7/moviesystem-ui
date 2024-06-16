import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.scss'
})
export class MovieFilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  selectedGenre  = null;
  selectedLanguage = null;
  year = null;
  genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western'
  ];
  languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Hindi',
    'Tamil',
    'Telugu',
    'Malayalam',
    'Kannada',
    'Bengali',
    'Marathi',
    'Gujarati',
    'Punjabi',
    'Urdu',
    'Arabic',
    'Portuguese',
    'Russian',
    'Italian',
    'Dutch',
    'Swedish',
    'Norwegian',
    'Danish',
    'Finnish',
    'Greek',
    'Turkish',
    'Thai',
    'Indonesian',
    'Malay',
    'Vietnamese'
  ];


  applyFilters() {
    const params: any = {};

    if (this.selectedGenre) {
      params['genre'] = this.selectedGenre;
    }
    if (this.selectedLanguage) {
      params['language'] = this.selectedLanguage;
    }
    if (this.year) {
      params['year'] = this.year;
    }

    this.filtersChanged.emit(params);
  }
}
