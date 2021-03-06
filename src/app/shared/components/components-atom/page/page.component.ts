import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() type : '' | 'light' | 'public' = '';
  constructor() { }

  ngOnInit() {
  }

}
