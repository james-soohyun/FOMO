import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/Map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
	
	apiKey = '60be675176c8bd0f65c6b7eac3297c1f';

	url;

	constructor(public _http: HttpClient) {
		this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=';
	}

	getWeather(city, code) {
		return this._http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());
	}
}
