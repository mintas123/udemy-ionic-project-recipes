import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Apartamento",
      "blablaba super miejsce",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-tCmv-4Ccu-crp6_varso-tower-1920x1080-nocrop.jpg",
      599.99
    ),
    new Place(
      "p2",
      "Oui Oui",
      "omlette di fromage super miejsce",
      "https://i.pinimg.com/474x/5f/11/ad/5f11adb59e1f0e8bbcdcff935db2fbd1.jpg",
      299.99
    ),
    new Place(
      "p3",
      "Shitz",
      "Mamy łóżka i okna",
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Destroyed_building_in_Muzaffarabad_after_the_earthquake_%282005%29.jpg",
      59.99
    )
  ];

  constructor() {}

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => 
      p.id === id)};
  }
}




