import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Serpong M-Town',
      '2BR apartment newar Summarecon Mal Serpong.',
      'http://www.summareconbekasi.com/public/images/gallery/article/7082/IMG_3293-25.jpg',
      700000000
    ),
    new Place(
      'p2',
      'Scientia Residence',
      'Near UMN with many choices of foods around.',
      'https://pix10.agoda.net/hotelImages/376/3762045/3762045_17122109000060531202.jpg?s=1024x768',
      1000000000
    )
  ];
  constructor(){}

  getAllPlaces(){
    return [...this.places];
  }
}
