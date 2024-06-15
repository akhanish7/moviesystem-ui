import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.scss'
})
export class MovieFilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  filters = { genre: null, language: null, year: null };

  applyFilters() {
    this.filtersChanged.emit(this.filters);
  }
}
