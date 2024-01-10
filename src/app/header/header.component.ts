import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeTab: number = 0
  @Output() selectedTab = new EventEmitter<number>()

  onSelectTab(index: number){
    this.activeTab = index
    this.selectedTab.emit(index)
  }
}
