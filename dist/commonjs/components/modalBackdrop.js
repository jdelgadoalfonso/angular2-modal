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
var bootstrapModalContainer_1 = require('./bootstrapModalContainer');
/**
 * Represents the modal backdrop.
 */
var ModalBackdrop = (function () {
    function ModalBackdrop(dialog) {
        this.position = 'absolute';
        this.height = '100%';
        this.width = '100%';
        this.top = this.left = this.right = this.bottom = '0';
    }
    ModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            host: {
                '[style.position]': 'position',
                '[style.height]': 'height',
                '[style.width]': 'width',
                '[style.top]': 'top',
                '[style.left]': 'left',
                '[style.right]': 'right',
                '[style.bottom]': 'bottom'
            },
            directives: [bootstrapModalContainer_1.BootstrapModalContainer],
            template: "<div [style.position]=\"position\" class=\"in modal-backdrop\"></div>\n     <bootstrap-modal></bootstrap-modal>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])
    ], ModalBackdrop);
    return ModalBackdrop;
}());
exports.ModalBackdrop = ModalBackdrop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxCYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FuZ3VsYXIyLW1vZGFsL2NvbXBvbmVudHMvbW9kYWxCYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBRWxFOztHQUVHO0FBaUJIO0lBU0ksdUJBQVksTUFBMkI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDMUQsQ0FBQztJQTlCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLElBQUksRUFBRTtnQkFDRixrQkFBa0IsRUFBRSxVQUFVO2dCQUM5QixnQkFBZ0IsRUFBRSxRQUFRO2dCQUMxQixlQUFlLEVBQUUsT0FBTztnQkFDeEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixlQUFlLEVBQUUsT0FBTztnQkFDeEIsZ0JBQWdCLEVBQUUsUUFBUTthQUM3QjtZQUNELFVBQVUsRUFBRSxDQUFFLGlEQUF1QixDQUFFO1lBQ3ZDLFFBQVEsRUFDUixpSEFDcUM7U0FDeEMsQ0FBQzs7cUJBQUE7SUFnQkYsb0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLHFCQUFhLGdCQWV6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XG5pbXBvcnQge0Jvb3RzdHJhcE1vZGFsQ29udGFpbmVyfSBmcm9tICcuL2Jvb3RzdHJhcE1vZGFsQ29udGFpbmVyJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBtb2RhbCBiYWNrZHJvcC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvbicsXG4gICAgICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnLFxuICAgICAgICAnW3N0eWxlLndpZHRoXSc6ICd3aWR0aCcsXG4gICAgICAgICdbc3R5bGUudG9wXSc6ICd0b3AnLFxuICAgICAgICAnW3N0eWxlLmxlZnRdJzogJ2xlZnQnLFxuICAgICAgICAnW3N0eWxlLnJpZ2h0XSc6ICdyaWdodCcsXG4gICAgICAgICdbc3R5bGUuYm90dG9tXSc6ICdib3R0b20nXG4gICAgfSxcbiAgICBkaXJlY3RpdmVzOiBbIEJvb3RzdHJhcE1vZGFsQ29udGFpbmVyIF0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgW3N0eWxlLnBvc2l0aW9uXT1cInBvc2l0aW9uXCIgY2xhc3M9XCJpbiBtb2RhbC1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICA8Ym9vdHN0cmFwLW1vZGFsPjwvYm9vdHN0cmFwLW1vZGFsPmBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcCB7XG4gICAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIGhlaWdodDogc3RyaW5nO1xuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuICAgIHB1YmxpYyB0b3A6IHN0cmluZztcbiAgICBwdWJsaWMgbGVmdDogc3RyaW5nO1xuICAgIHB1YmxpYyByaWdodDogc3RyaW5nO1xuICAgIHB1YmxpYyBib3R0b206IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZzogTW9kYWxEaWFsb2dJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IHRoaXMuYm90dG9tID0gJzAnO1xuICAgIH1cbn1cbiJdfQ==