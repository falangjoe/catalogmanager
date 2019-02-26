import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { getLocaleDateTimeFormat } from '@angular/common';

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

    let result = "";

    if(interval.IsActive){
      result = "interval-active";
    }
    else {
      result = "interval-inactive";
    }

    if(new Date(interval.StartDate) > new Date()){
      result = result + ' future-interval';
    }
    else if ( !interval.EndDate || new Date(interval.EndDate) > new Date()) {
      result = result + ' present-interval';
    }
    else {
      result = result + ' past-interval';
    }

    return result;
  }


  private getTimeClass(){

  }

  private show(i : number){

    let interval = this.intervals[i];
    this.catalogService.createShow(interval);
  }

  private deletable(i : number){
    let result = false;

    let interval = this.intervals[i];
    if(!interval.StopDate && new Date(interval.StartDate) > new Date())
    {
      result = true;
    }
    return result;
  }

  private delete(i : number){
    let assocationId = this.intervals[i].Association.AssocationId
    //this.catalogService.delete(assocationId);
  }

}


