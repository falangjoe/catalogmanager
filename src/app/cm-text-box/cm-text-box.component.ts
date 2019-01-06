import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { PromotionMetadataService } from '../promotion-metadata.service';
import {PromotionService} from '../promotion.service';


@Component({
  selector: 'cm-text-box',
  templateUrl: './cm-text-box.component.html',
  styleUrls: ['./cm-text-box.component.css']
})
export class CmTextBoxComponent implements OnInit {

  constructor(private promotionMetadataService: PromotionMetadataService, private promotionService: PromotionService) { 

  }

  ngOnInit() {

    console.log('init value' + this.data);
    console.log(this.promotionMetadataService.getInterface('IReward'));
    console.log(this.promotionService.getPromotions());
  }

  dataValue = '';

  @Output() dataChange = new EventEmitter();

  @Input()
  type = {};

  @Input()
  get data(){
    return this.dataValue;
  }

  set data(val){
    this.dataValue = val;
    this.dataChange.emit(this.dataValue);
  }

  inputChanged(event){
    this.data = event.target.value;
  }

}
