import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ MarvelService ]
})

export class HomeComponent implements OnInit {
  public characters: Array<any>;
  public loading: boolean;
  public filterCharacter: any = '';

  constructor(private _marvelService: MarvelService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this._marvelService.getCharacters()
      .subscribe((res: any) => {
        this.characters = res.data.results;
        this.loading = false;
      },
      err => {
        console.log(<any>err);
      });
  }

  resetForm(form) {
    form.reset();
  }
}
