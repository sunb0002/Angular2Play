import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appBsButton], span[appBsButtonSpan]'
})
export class BsButtonDirective {

  @Input() appBsButton;

  defaultButton: string = 'primary';
  overButton: string = 'danger';

  showMsg: boolean = true;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    let testInput = this.appBsButton;

    //// ES6/JSX Template literals
    console.log(`BsButtonDirective testInput: ${testInput}`);

    const button = (this.el.nativeElement as HTMLElement);
    // HTML element.tagName
    console.log("This is a %o element. Tagname=" + button.tagName, button);

    if (button.tagName.toUpperCase() === "BUTTON") {
      button.classList.add('btn');
      //// Js/Ts hack way to set default value, using ||
      button.classList.add(`btn-${testInput || this.defaultButton}`);

    }
  }

  @HostListener('mouseover')
  doMouseOver() {
    console.log(`BsButtonDirective testInput: ${this.appBsButton}`);
    const buttonX = (this.el.nativeElement as HTMLElement);
    if (buttonX.tagName.toUpperCase() === "SPAN") {
      buttonX.classList.toggle('bg-success');
    }
  }

}
