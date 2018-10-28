import { Component, OnInit } from '@angular/core';
import {SearchResult} from './search-result.model';

@Component({
  selector: 'app-youtubesearch',
  templateUrl: './youtubesearch.component.html'
})
export class YoutubesearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log("results:", this.results);
  }

}
