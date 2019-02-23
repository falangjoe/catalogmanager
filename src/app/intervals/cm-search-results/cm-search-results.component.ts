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
      self.intervals = x;
    });
  }

  private intervals : any[];

  private class(i : number){

    return 'interval';
  }

  private show(i : number){

    let interval = this.intervals[i];
    this.catalogService.createShow(interval);
  }

  private deletable(i : number){
    return true;
  }

  private delete(i : number){
    let assocationId = this.intervals[i].Association.AssocationId
    //this.catalogService.delete(assocationId);
  }

}


