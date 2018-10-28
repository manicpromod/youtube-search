import {s} from '@angular/core/src/render3';

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any){

    this.id = obj && obj.id || null;
    this.description = obj && obj.description || null;
    this.title = obj && obj.title || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
  }
}
