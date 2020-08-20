import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ MarvelService ]
})
export class DetailComponent implements OnInit {
  public loading: boolean;
  public character: any;
  public comic: any;

  constructor
  ( private _marvelService: MarvelService,
    private _route: ActivatedRoute
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getCharacter(id);
      this.getComic(id);
    });
  }

  getCharacter(id) {
    this._marvelService.getCharacter(id)
      .subscribe((res: any) => {
        this.character = res.data.results[0];
        this.loading = false;
      }, err => {
        console.log(<any>err);
      });
  }

  getComic(id) {
    this._marvelService.getComic(id)
      .subscribe((res: any) => {
        this.comic = res.data.results[0];
        this.loading = false;
      }, err =>{
        console.log(<any>err);
      });
  }
}
