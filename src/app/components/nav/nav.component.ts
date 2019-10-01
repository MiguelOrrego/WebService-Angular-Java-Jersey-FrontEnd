import { Component, OnInit } from '@angular/core';
import { faUser, faMobile,faClipboardCheck,faEdit,faSearch} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faUser=faUser;
  faMobile=faMobile;
  faClipboardCheck=faClipboardCheck;
  faEdit=faEdit;
  faSearch=faSearch;
  constructor() { }

  ngOnInit() {
  }

}
