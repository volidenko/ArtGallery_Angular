import { Component, OnInit } from '@angular/core';
import { Picture } from '../Picture';
import {ITEMS} from './picture-mock';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  styles:[]
  // providers:[ArtGallery]
})

export class ArtComponent implements OnInit {
  items = ITEMS;
  // picture: Picture;
  // pictureItems:Picture[]=ITEMS;
  styles={
    min: true,
    normal: true
  }

  toggle(){
    this.styles.min=!this.styles.min;
  }

  obj:Picture=new Picture();
  // items:Picture[];
  constructor(){}

  // constructor(private pictureService:ArtGallery) { }

  addInfo(obj:Picture){
    // this.pictureService.addInfo(obj);
  }

  ngOnInit(): void {
    // this.items=this.pictureService.getItems();
  }

}
 