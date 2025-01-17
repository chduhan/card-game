import { Component, Input } from '@angular/core';
import { A3Classduhans } from '../classDuhans';
@Component({
  selector: 'app-header-duhans',
  templateUrl: './header-duhans.component.html',
  styleUrl: './header-duhans.component.css'
})
export class HeaderDuhansComponent {
@Input() HFduhans!: A3Classduhans;
}
