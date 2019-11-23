import { Directive, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // Binding the 'open' with the class object
  @HostBinding('class.open') isOpen = false;
  
  
  //host listener added to a particular dropdown
  // @HostListener('click') clickEvent(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }

  //HostListener added to the document that closes every other dropdown upon click on the document
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }

}
