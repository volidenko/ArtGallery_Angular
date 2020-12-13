import { Component, OnInit } from '@angular/core';
import { Picture } from './Picture';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  picture: Picture;
  constructor() { }

  ngOnInit(): void {
    this.picture = new Picture();
    this.picture.title="The Old Guitarist";
    this.picture.year=1903;
    this.picture.artist="Pablo Picasso";
    this.picture.size="122,9 х 82,6 см";
    this.picture.place="Чикагский институт искусств";
    this.picture.path="../../assets/images/The Old Guitarist.jpeg";
  }
  toggle(){

  }

}
