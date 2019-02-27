import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'cm-search-results',
  templateUrl: './cm-search-results.component.html',
  styleUrls: ['./cm-search-results.component.css']
})
export class CmSearchResultsComponent implements OnInit {

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {

    let self = this;

    this.catalogService.getSearches().subscribe(x => {
      self.intervals = x.Intervals,
      self.catalog = x.Catalog
    });
  }

  private intervals : any[];
  private catalog: any;

  private class(i : number){

    let interval = this.intervals[i];

    let result = '';

    if (interval.EndDate && new Date(interval.EndDate) < new Date()) {
      result = 'interval-past';
    }

    return result;
  }

  private show(i : number){

    let interval = this.intervals[i];

    this.catalogService.createShow(this.catalog, interval);
  }

  private deletable(i : number){
    let result = false;

    let interval = this.intervals[i];
    if(!interval.StopDate && new Date(interval.StartDate) > new Date() && i === 0)
    {
      result = true;
    }
    return result;
  }

  private delete(i : number){

    let interval = this.intervals[i];

    this.catalogService.delete(this.catalog, interval);
  }

}


