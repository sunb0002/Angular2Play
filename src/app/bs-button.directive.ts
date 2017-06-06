import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'button[appBsButton]'
})
export class BsButtonDirective {

  @Input() appBsButton;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let testInput = this.appBsButton;

    //// ES6/JSX Template literals
    console.log("BsButtonDirective testInput: ${testInput}");


    const button = (this.el.nativeElement as HTMLElement);
    button.classList.add('btn');
    //// Js/Ts hack way to set default value, using ||
    button.classList.add(`btn-${testInput || 'primary'}`);

  }

}
