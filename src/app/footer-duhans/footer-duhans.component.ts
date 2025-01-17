import { Component, Input } from '@angular/core';
import { A3Classduhans } from '../classDuhans';

@Component({
  selector: 'app-footer-duhans',
  templateUrl: './footer-duhans.component.html',
  styleUrl: './footer-duhans.component.css'
})
export class FooterDuhansComponent {
@Input() HFduhans!: A3Classduhans;
 }
