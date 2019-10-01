import { Component, OnInit } from '@angular/core';
import { faUser, faMobile,faClipboardCheck,faEdit,faSearch} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faUser=faUser;
  faMobile=faMobile;
  faClipboardCheck=faClipboardCheck;
  faEdit=faEdit;
  faSearch=faSearch;


  constructor() { }

  ngOnInit() {
  }

}
