import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  saints: string[] = ['Santo Tomas de Aquino', 'Santa Teresita del niño Jesús', 'San Juan Pablo II'];   
  titleGranted: string[] = ['Doctor Ecclesiae', 'Doctor Ecclesiae', 'Papa'];

}
