import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrls: ['./button-load-more.component.css']
})
export class ButtonLoadMoreComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
