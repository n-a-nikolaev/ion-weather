import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data: any = '';

  constructor(
    public navCtrl: NavController,
    public weatherService: WeatherService
  ) {
    // this.weatherService.getByCurrentLocation().subscribe(data => {
    //   this.data = JSON.stringify(data);
    // });
  }
}
