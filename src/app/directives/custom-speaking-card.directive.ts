import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[cardType]'
})
export class CustomSpeakingCardDirective implements OnInit {
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {

  }

  // The @HostListener decorator lets you subscribe to events of the DOM element
  // that HOSTS an attribute directive (cue-card + new-words components)
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || '#7dbff5');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
