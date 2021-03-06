"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
var modalFooter_1 = require('../components/modalFooter');
/**
 * Data definition
 */
var MessageModalContext = (function () {
    function MessageModalContext() {
    }
    return MessageModalContext;
}());
exports.MessageModalContext = MessageModalContext;
/**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
var MessageModal = (function () {
    function MessageModal(dialog, context) {
        this.dialog = dialog;
        this.context = context;
    }
    MessageModal.prototype.onFooterButtonClick = function ($event) {
        $event.btn.onClick(this, $event.$event);
    };
    Object.defineProperty(MessageModal.prototype, "titleHtml", {
        get: function () {
            return this.context.titleHtml ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    MessageModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            directives: [modalFooter_1.ModalFooter],
            template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n        <div *ngSwitchWhen=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n        <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n    </div>\n    <div [ngClass]=\"context.bodyClass\" [innerHtml]=\"context.body\"></div>\n    <modal-footer [footerClass]=\"context.footerClass\" \n                  [buttons]=\"context.buttons\"\n                  (onButtonClick)=\"onFooterButtonClick($event)\"></modal-footer>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, MessageModalContext])
    ], MessageModal);
    return MessageModal;
}());
exports.MessageModal = MessageModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZU1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYW5ndWxhcjItbW9kYWwvbW9kYWxzL01lc3NhZ2VNb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBR3hDLG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLDRCQUFrRCwyQkFBMkIsQ0FBQyxDQUFBO0FBVzlFOztHQUVHO0FBQ0g7SUFBQTtJQTRDQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLDJCQUFtQixzQkE0Qy9CLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFjSDtJQUNJLHNCQUFtQixNQUEyQixFQUFTLE9BQTRCO1FBQWhFLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFBRyxDQUFDO0lBRXZGLDBDQUFtQixHQUFuQixVQUFvQixNQUE4QjtRQUM5QyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzQkFBSSxtQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUF0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsVUFBVSxFQUFFLENBQUMseUJBQVcsQ0FBQztZQUN6QixRQUFRLEVBQ1IsZ2ZBTzRFO1NBQy9FLENBQUM7O29CQUFBO0lBV0YsbUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLG9CQUFZLGVBVXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7SUN1c3RvbU1vZGFsLCBJQ3VzdG9tTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL21vZGVscy9JQ3VzdG9tTW9kYWwnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XG5pbXBvcnQge01vZGFsRm9vdGVyLCBGb290ZXJCdXR0b25DbGlja0V2ZW50fSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsRm9vdGVyJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGJ1dHRvbiBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxCdXR0b25Db25maWcge1xuICAgIGNzc0NsYXNzOiBzdHJpbmc7XG4gICAgY2FwdGlvbjogc3RyaW5nO1xuICAgIG9uQ2xpY2s6IChtb2RhbENvbXBvbmVudDogYW55LCAkZXZlbnQ/OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIERhdGEgZGVmaW5pdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZU1vZGFsQ29udGV4dCBpbXBsZW1lbnRzIElDdXN0b21Nb2RhbCB7XG5cbiAgICAvKipcbiAgICAgKiBBIENsYXNzIGZvciB0aGUgaGVhZGVyICh0aXRsZSkgY29udGFpbmVyLlxuICAgICAqIERlZmF1bHQ6IG1vZGFsLWhlYWRlclxuICAgICAqL1xuICAgIGhlYWRlckNsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDYXB0aW9uIGZvciB0aGUgdGl0bGUsIGVuY2xvc2VkIGluIGEgSDMgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBIVE1MIGZvciB0aGUgdGl0bGUsIGlmIHNldCBvdmVycmlkZXMgdGl0bGUgcHJvcGVydHkuXG4gICAgICogVGhlIEhUTUwgaXMgd3JhcHBlZCBpbiBhIERJViBlbGVtZW50LCBpbnNpZGUgdGhlIGhlYWRlciBjb250YWluZXIuXG4gICAgICogRXhhbXBsZTpcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8ZGl2PiBIVE1MIENPTlRFTlQgSU5TRVJURUQgSEVSRSA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgICogTm90ZTogSFRNTCBpcyBub3QgY29tcGlsZWQuXG4gICAgICovXG4gICAgdGl0bGVIdG1sOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm9keSBvZiB0aGUgbWVzc2FnZS5cbiAgICAgKiBDYW4gYmUgZWl0aGVyIHRleHQgb3IgSFRNTC5cbiAgICAgKiBOb3RlOiBIVE1MIGlzIG5vdCBjb21waWxlZC5cbiAgICAgKi9cbiAgICBib2R5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBIENsYXNzIGZvciB0aGUgYm9keSBjb250YWluZXIuXG4gICAgICogRGVmYXVsdDogbW9kYWwtYm9keVxuICAgICAqL1xuICAgIGJvZHlDbGFzczogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBDbGFzcyBmb3IgdGhlIGZvb3RlciBjb250YWluZXIuXG4gICAgICogRGVmYXVsdDogbW9kYWwtZm9vdGVyXG4gICAgICovXG4gICAgZm9vdGVyQ2xhc3M6IHN0cmluZztcblxuICAgIGJ1dHRvbnM6IE1vZGFsQnV0dG9uQ29uZmlnW107XG59XG5cbi8qKlxuICogQSBDb21wb25lbnQgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBib290c3RyYXAgbW9kYWwgY29udGVudCBlbGVtZW50LlxuICogXG4gKiBCeSBjb25maWd1cmluZyBhIE1lc3NhZ2VNb2RhbENvbnRleHQgaW5zdGFuY2UgeW91IGNhbjpcbiAqIFxuICogIEhlYWRlcjogXG4gKiAgICAgIC0gU2V0IGhlYWRlciBjb250YWluZXIgY2xhc3MgKGRlZmF1bHQ6IG1vZGFsLWhlYWRlcilcbiAqICAgICAgLSBTZXQgdGl0bGUgdGV4dCAoZW5jbG9zZWQgaW4gSDMgZWxlbWVudClcbiAqICAgICAgLSBTZXQgdGl0bGUgaHRtbCAob3ZlcnJpZGVzIHRleHQpXG4gKiAgICAgIFxuICogIEJvZHk6XG4gKiAgICAgIC0gU2V0IGJvZHkgY29udGFpbmVyIGNsYXNzLiAgKGRlZmF1bHQ6IG1vZGFsLWJvZHkpXG4gKiAgICAgIC0gU2V0IGJvZHkgY29udGFpbmVyIEhUTUwuXG4gKiAgICAgIFxuICogIEZvb3RlcjpcbiAqICAgICAgLSBTZXQgZm9vdGVyIGNsYXNzLiAgKGRlZmF1bHQ6IG1vZGFsLWZvb3RlcilcbiAqICAgICAgLSBTZXQgYnV0dG9uIGNvbmZpZ3VyYXRpb24gKGZyb20gMCB0byBuKVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICAgIGRpcmVjdGl2ZXM6IFtNb2RhbEZvb3Rlcl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgW25nQ2xhc3NdPVwiY29udGV4dC5oZWFkZXJDbGFzc1wiIFtuZ1N3aXRjaF09XCJ0aXRsZUh0bWxcIj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hXaGVuPVwiMVwiIFtpbm5lckh0bWxdPVwiY29udGV4dC50aXRsZUh0bWxcIj48L2Rpdj5cbiAgICAgICAgPGgzICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7Y29udGV4dC50aXRsZX19PC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImNvbnRleHQuYm9keUNsYXNzXCIgW2lubmVySHRtbF09XCJjb250ZXh0LmJvZHlcIj48L2Rpdj5cbiAgICA8bW9kYWwtZm9vdGVyIFtmb290ZXJDbGFzc109XCJjb250ZXh0LmZvb3RlckNsYXNzXCIgXG4gICAgICAgICAgICAgICAgICBbYnV0dG9uc109XCJjb250ZXh0LmJ1dHRvbnNcIlxuICAgICAgICAgICAgICAgICAgKG9uQnV0dG9uQ2xpY2spPVwib25Gb290ZXJCdXR0b25DbGljaygkZXZlbnQpXCI+PC9tb2RhbC1mb290ZXI+YFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTW9kYWwgaW1wbGVtZW50cyBJQ3VzdG9tTW9kYWxDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1vZGFsRGlhbG9nSW5zdGFuY2UsIHB1YmxpYyBjb250ZXh0OiBNZXNzYWdlTW9kYWxDb250ZXh0KSB7fVxuXG4gICAgb25Gb290ZXJCdXR0b25DbGljaygkZXZlbnQ6IEZvb3RlckJ1dHRvbkNsaWNrRXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LmJ0bi5vbkNsaWNrKHRoaXMsICRldmVudC4kZXZlbnQpO1xuICAgIH1cblxuICAgIGdldCB0aXRsZUh0bWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50aXRsZUh0bWwgPyAxIDogMDtcbiAgICB9XG59XG4iXX0=