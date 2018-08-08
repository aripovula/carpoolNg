import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appCustomUnless]'
})

export class CustomUnlessDirective {
    @Input() set appCustomUnless(condition: boolean) {
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {

        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    }
}
