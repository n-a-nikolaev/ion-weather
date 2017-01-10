// How to get accurate API response
// ------------------------------------------------------
// 1. Do not send requests more than 1 time per 10 minutes from one device/ one API key.
// Normally the weather is not changing so frequently.

// 2. Use the name of the server as api.openweathermap.org.
// Please never use the IP address of the server.

// 3. Call API by city ID instead of city name, city coordinates or zip code. 
// In this case you get precise respond exactly for your city.

// 4. Free account has limitation of capacity and data availability. 
// If you do not get respond from server do not try to repeat your request immediately, 
// but only after 10 min.Also we recommend to store your previous request data.

import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import Rx from 'rxjs/Rx';

@Injectable()
export class WeatherService {
  private API_KEY: string = '1c66cea8189fbf5260c869538c6b550b';
  private API_BASE_URL: string = 'http://api.openweathermap.org/data/2.5';

  constructor(public http: Http) {
  }

  /**
   * Get weather by current device's location
   * 
   * @returns {Observable<any[]>}
   * 
   * @memberOf WeatherService
   */
  public getByCurrentLocation(): Observable<any[]> {
    return Rx.Observable.fromPromise(Geolocation.getCurrentPosition())
      .flatMap((value: any, index: number) => {
        return this.getByCoordinates(value.coords.latitude, value.coords.longitude);
      });
  }

  /**
   * By geographic coordinates
   * API call: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
   * 
   * @param {string} lat - coordinates of the location of your interest
   * @param {string} lng - coordinates of the location of your interest
   * @returns {Observable<any[]>}
   * 
   * @memberOf WeatherService
   */
  public getByCoordinates(lat: string, lng: string): Observable<any[]> {
    return this.http
      .get(`${this.API_BASE_URL}/weather?lat=${lat}&lon=${lng}&APPID=${this.API_KEY}`)
      .map(res => res.json());
  }

  public getByCity() {
    // TODO...
  }
}
