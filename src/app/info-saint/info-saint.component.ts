import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-info-saint',
  templateUrl: './info-saint.component.html',
  styleUrls: ['./info-saint.component.css']
})
export class InfoSaintComponent {
  @Input()
  saintName: string | any;
  @Input()
  titleGranted: string | any;
  
  
}
