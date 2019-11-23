import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // Binding the 'open' with the class object
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('click') clickEvent(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

}
