import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	private subject: Subject<string> = new Subject();
	private handleSearch(searchTextValue: string): void {

    }
  constructor() { }

  ngOnInit() {
  	this.subject
  		.debounceTime(500)
  		.distinctUntilChanged()
  		.subscribe(searchTextValue => {
    	this.handleSearch(searchTextValue);
    	console.log("after this.handleSearch ", searchTextValue)
  	});
  }

  searchMusic(searchTextValue: string){
  	this.subject.next(searchTextValue);
  }

}
