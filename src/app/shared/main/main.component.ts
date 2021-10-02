import { Component, OnInit } from '@angular/core';
import {ProductsSelectors} from "../../store/services/products.selectors";
import {ProductsDispatchers} from "../../store/services/products.dispatchers";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
