import { Component, OnInit, Input} from '@angular/core';
@Component({
   selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.scss']
})

export class CommonHeaderComponent implements OnInit{
  
  title: string = "Hello";
  @Input('content') titleContent: string;

	ngOnInit() {
		this.title = this.titleContent
	}
}