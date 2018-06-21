import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeText]'
})

export class ChangeTextDirective {

  constructor(private Element: ElementRef) { 
    console.log("Element is: "+ Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive";
    Element.nativeElement.style.backgroundColor = "green";
  }

 @HostListener('mouseenter') onMouseEnter(){
  this.highlight('yellow');
}

@HostListener('mouseleave') onmouseleave(){
  this.highlight('green');
}
 private highlight(color: string) {
  this.Element.nativeElement.style.backgroundColor = color;
}

}

