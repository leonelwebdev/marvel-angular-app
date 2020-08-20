import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://gateway.marvel.com:443/v1/public/characters';
const apikey = '003ecb3ef017f3ee5cf6ce128a5a4966';
const hash = '9f86c47947c5df2e3aeed3df8bb6187e';
const finalUrl = `?ts=1&apikey=${apikey}&hash=${hash}`;

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private _http: HttpClient) { }

  getCharacters() {
    return this._http.get(url + finalUrl); 
  }

  getCharacter(id) {
    return this._http.get(url + `/${id}` + finalUrl);
  }

  getComic(id) {
    return this._http.get(url + `/${id}/comics` + finalUrl);
  }
}
