import { Component } from '@angular/core';
import { A3Classduhans } from './classDuhans';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A3duhans';

  profileDuhans :A3Classduhans ={
    fullName991701782:'Sachin Duhan', id991701782: 991701782, email991701782: 'duhan.sachin@outlook.com', login991701782: 'duhans'
  }
}
