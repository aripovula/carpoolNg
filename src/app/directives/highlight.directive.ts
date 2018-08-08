import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
    // @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @HostBinding('innerText') innerText = 'transparent';
    // constructor(private elementRef: ElementRef) {
    // }

    // ngOnInit() {
    //     this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
        this.innerText = 'gray';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.innerText = 'transparent';
    }

}
