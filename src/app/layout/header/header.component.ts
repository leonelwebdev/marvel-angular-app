import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $(".sidenav").sidenav();
      $(".white-text").click(() => {
        $(".sidenav-overlay").css('display', 'none');
        $("body").css('overflow', 'auto');
      });
    });
  }

}
