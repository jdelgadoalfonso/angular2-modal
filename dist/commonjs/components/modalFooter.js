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
/**
 * Represents the modal footer for storing buttons.
 */
var ModalFooter = (function () {
    function ModalFooter() {
        /**
         * Emitted when a button was clicked
         * @type {EventEmitter<FooterButtonClickEvent>}
         */
        this.onButtonClick = new core_1.EventEmitter();
    }
    ModalFooter.prototype.onClick = function (btn, $event) {
        this.onButtonClick.emit({ btn: btn, $event: $event });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalFooter.prototype, "footerClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ModalFooter.prototype, "buttons", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ModalFooter.prototype, "onButtonClick", void 0);
    ModalFooter = __decorate([
        core_1.Component({
            selector: 'modal-footer',
            template: "<div [ngClass]=\"footerClass\">\n    <button *ngFor=\"#btn of buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ModalFooter);
    return ModalFooter;
}());
exports.ModalFooter = ModalFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxGb290ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9jb21wb25lbnRzL21vZGFsRm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFRckU7O0dBRUc7QUFVSDtJQWlCSTtRQU5BOzs7V0FHRztRQUNjLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUEwQixDQUFDO0lBRTdELENBQUM7SUFFaEIsNkJBQU8sR0FBUCxVQUFRLEdBQVEsRUFBRSxNQUFrQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUEsR0FBRyxFQUFFLFFBQUEsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBakJEO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQU1SO1FBQUMsYUFBTSxFQUFFOztzREFBQTtJQXhCYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQ1osaU1BSU87U0FDTixDQUFDOzttQkFBQTtJQXVCRixrQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksbUJBQVcsY0FzQnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TW9kYWxCdXR0b25Db25maWd9IGZyb20gJy4uL21vZGFscy9NZXNzYWdlTW9kYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckJ1dHRvbkNsaWNrRXZlbnQge1xuICAgIGJ0bjogTW9kYWxCdXR0b25Db25maWc7XG4gICAgJGV2ZW50OiBNb3VzZUV2ZW50O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIG1vZGFsIGZvb3RlciBmb3Igc3RvcmluZyBidXR0b25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWZvb3RlcicsXG4gICAgdGVtcGxhdGU6XG5gPGRpdiBbbmdDbGFzc109XCJmb290ZXJDbGFzc1wiPlxuICAgIDxidXR0b24gKm5nRm9yPVwiI2J0biBvZiBidXR0b25zO1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJidG4uY3NzQ2xhc3NcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soYnRuLCAkZXZlbnQpXCI+e3tidG4uY2FwdGlvbn19PC9idXR0b24+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyIHtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHVzZWQgZm9yIHRoZSBmb290ZXIgY29udGFpbmVyLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmb290ZXJDbGFzczogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBjb2xsZWN0aW9uIG9mIGJ1dHRvbiBjb25maWd1cmF0aW9ucywgZWFjaCBjb25maWd1cmF0aW9uIGlzIGEgYnV0dG9uIHRvIGRpc3BsYXkuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGJ1dHRvbnM6IE1vZGFsQnV0dG9uQ29uZmlnW107XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSBidXR0b24gd2FzIGNsaWNrZWQgXG4gICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxGb290ZXJCdXR0b25DbGlja0V2ZW50Pn1cbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEZvb3RlckJ1dHRvbkNsaWNrRXZlbnQ+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBvbkNsaWNrKGJ0bjogYW55LCAkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrLmVtaXQoe2J0biwgJGV2ZW50fSk7XG4gICAgfVxufVxuIl19