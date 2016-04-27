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
var Modal_1 = require('../providers/Modal');
/**
 * A component that acts as a top level container for an open modal window.
 */
var BootstrapModalContainer = (function () {
    function BootstrapModalContainer(dialogInstance, modal, componentLoader) {
        this.modal = modal;
        this.componentLoader = componentLoader;
        this.dialogInstance = dialogInstance;
        this.position = 'absolute';
    }
    Object.defineProperty(BootstrapModalContainer.prototype, "viewRef", {
        get: function () { return this._viewRef; },
        enumerable: true,
        configurable: true
    });
    BootstrapModalContainer.prototype.onContainerClick = function ($event) {
        $event.stopPropagation();
    };
    BootstrapModalContainer.prototype.onClick = function () {
        return !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    };
    BootstrapModalContainer.prototype.documentKeypress = function (event) {
        // check that this modal is the last in the stack.
        if (this.modal.stackPosition(this.dialogInstance) !== this.modal.stackLength - 1)
            return;
        if (this.dialogInstance.config.supportsKey(event.keyCode)) {
            this.dialogInstance.dismiss();
        }
    };
    BootstrapModalContainer.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.componentLoader.loadNextToLocation(this.dialogInstance.componentType, this._viewRef, this.dialogInstance.modalDataBindings)
            .then(function (contentRef) {
            _this.dialogInstance.contentRef = contentRef;
        });
    };
    __decorate([
        core_1.ViewChild('modalDialog', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], BootstrapModalContainer.prototype, "_viewRef", void 0);
    BootstrapModalContainer = __decorate([
        core_1.Component({
            selector: 'bootstrap-modal',
            providers: [Modal_1.Modal],
            host: {
                'tabindex': '0',
                'role': 'dialog',
                'class': 'in modal',
                'style': 'display: block',
                '[style.position]': 'position',
                '(body:keydown)': 'documentKeypress($event)',
                '(click)': 'onClick()'
            },
            /* tslint:disable */
            template: "<div [ngClass]=\"dialogInstance.config.dialogClass\"\n          [class.modal-lg]=\"dialogInstance.config.size == 'lg'\"\n          [class.modal-sm]=\"dialogInstance.config.size == 'sm'\">\n         <div class=\"modal-content\" (click)=\"onContainerClick($event)\" style=\"display: block\">\n            <div>\n                <span #modalDialog></span>\n            </div>\n         </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, Modal_1.Modal, core_1.DynamicComponentLoader])
    ], BootstrapModalContainer);
    return BootstrapModalContainer;
}());
exports.BootstrapModalContainer = BootstrapModalContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9jb21wb25lbnRzL2Jvb3RzdHJhcE1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFHTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixvQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSxzQkFBb0Isb0JBQW9CLENBQUMsQ0FBQTtBQUV6Qzs7R0FFRztBQTZCSDtJQU1JLGlDQUFZLGNBQW1DLEVBQ3JDLEtBQVksRUFBVSxlQUF1QztRQUE3RCxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBSSw0Q0FBTzthQUFYLGNBQWtDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFekQsa0RBQWdCLEdBQWhCLFVBQWlCLE1BQVc7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5Q0FBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkYsQ0FBQztJQUVELGtEQUFnQixHQUFoQixVQUFpQixLQUFvQjtRQUNqQyxrREFBa0Q7UUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUV6RixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZGLElBQUksQ0FBQyxVQUFDLFVBQXdCO1lBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFqQ0Q7UUFBQyxnQkFBUyxDQUFDLGFBQWEsRUFBRSxFQUFDLElBQUksRUFBRSx1QkFBZ0IsRUFBQyxDQUFDOzs2REFBQTtJQWhDdkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxhQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFO2dCQUNGLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsa0JBQWtCLEVBQUUsVUFBVTtnQkFDOUIsZ0JBQWdCLEVBQUUsMEJBQTBCO2dCQUM1QyxTQUFTLEVBQUUsV0FBVzthQUN6QjtZQUNELG9CQUFvQjtZQUNwQixRQUFRLEVBQ1IsbVpBUU87U0FLVixDQUFDOzsrQkFBQTtJQXVDRiw4QkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksK0JBQXVCLDBCQXNDbkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByb3ZpZGUsIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLCBSZWZsZWN0aXZlSW5qZWN0b3IsIENvbXBvbmVudCxcbiAgRHluYW1pY0NvbXBvbmVudExvYWRlciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0LCBDb21wb25lbnRSZWZcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01vZGFsRGlhbG9nSW5zdGFuY2V9IGZyb20gJy4uL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJy4uL3Byb3ZpZGVycy9Nb2RhbCc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBhY3RzIGFzIGEgdG9wIGxldmVsIGNvbnRhaW5lciBmb3IgYW4gb3BlbiBtb2RhbCB3aW5kb3cuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYm9vdHN0cmFwLW1vZGFsJyxcbiAgICBwcm92aWRlcnM6IFtNb2RhbF0sXG4gICAgaG9zdDoge1xuICAgICAgICAndGFiaW5kZXgnOiAnMCcsXG4gICAgICAgICdyb2xlJzogJ2RpYWxvZycsXG4gICAgICAgICdjbGFzcyc6ICdpbiBtb2RhbCcsXG4gICAgICAgICdzdHlsZSc6ICdkaXNwbGF5OiBibG9jaycsXG4gICAgICAgICdbc3R5bGUucG9zaXRpb25dJzogJ3Bvc2l0aW9uJyxcbiAgICAgICAgJyhib2R5OmtleWRvd24pJzogJ2RvY3VtZW50S2V5cHJlc3MoJGV2ZW50KScsXG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soKSdcbiAgICB9LFxuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgW25nQ2xhc3NdPVwiZGlhbG9nSW5zdGFuY2UuY29uZmlnLmRpYWxvZ0NsYXNzXCJcbiAgICAgICAgICBbY2xhc3MubW9kYWwtbGddPVwiZGlhbG9nSW5zdGFuY2UuY29uZmlnLnNpemUgPT0gXFwnbGdcXCdcIlxuICAgICAgICAgIFtjbGFzcy5tb2RhbC1zbV09XCJkaWFsb2dJbnN0YW5jZS5jb25maWcuc2l6ZSA9PSBcXCdzbVxcJ1wiPlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiAoY2xpY2spPVwib25Db250YWluZXJDbGljaygkZXZlbnQpXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiAjbW9kYWxEaWFsb2c+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG4gICAgLy9UT0RPOiAjbW9kYWxEaWFsb2cgZWxlbWVudCBpcyBub3QgbmVlZGVkIGJ1dCBkeW5hbWljQ29tcG9uZW50TG9hZGVyIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGJlaGF2aW9yIHRvIGluamVjdCBhIGNvbXBvbmVudCB0aGUgd2F5IHdlIHdhbnQuXG4gICAgLy8gICAgICBXZSBuZWVkIHRvIHJlcGxhY2UgdGhlICNtb2RhbERpYWxvZyBlbGVtZW50IGJ1dCB0aGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvbmx5IGFkZHMgaXQgYXMgYSBzaWJsaW5nLlxuICAgIC8vICAgICAgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzYwNzFcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE1vZGFsQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgZGlhbG9nSW5zdGFuY2U6IE1vZGFsRGlhbG9nSW5zdGFuY2U7XG4gICAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgICBAVmlld0NoaWxkKCdtb2RhbERpYWxvZycsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgcHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZ0luc3RhbmNlOiBNb2RhbERpYWxvZ0luc3RhbmNlLFxuICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWwsIHByaXZhdGUgY29tcG9uZW50TG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nSW5zdGFuY2UgPSBkaWFsb2dJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgfVxuXG4gICAgZ2V0IHZpZXdSZWYoKTogVmlld0NvbnRhaW5lclJlZiB7IHJldHVybiB0aGlzLl92aWV3UmVmOyB9XG5cbiAgICBvbkNvbnRhaW5lckNsaWNrKCRldmVudDogYW55KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuZGlhbG9nSW5zdGFuY2UuY29uZmlnLmlzQmxvY2tpbmcgJiYgdGhpcy5kaWFsb2dJbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBjaGVjayB0aGF0IHRoaXMgbW9kYWwgaXMgdGhlIGxhc3QgaW4gdGhlIHN0YWNrLlxuICAgICAgICBpZiAodGhpcy5tb2RhbC5zdGFja1Bvc2l0aW9uKHRoaXMuZGlhbG9nSW5zdGFuY2UpICE9PSB0aGlzLm1vZGFsLnN0YWNrTGVuZ3RoIC0gMSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmRpYWxvZ0luc3RhbmNlLmNvbmZpZy5zdXBwb3J0c0tleShldmVudC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dJbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbihcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nSW5zdGFuY2UuY29tcG9uZW50VHlwZSwgdGhpcy5fdmlld1JlZiwgdGhpcy5kaWFsb2dJbnN0YW5jZS5tb2RhbERhdGFCaW5kaW5ncylcbiAgICAgICAgICAgIC50aGVuKChjb250ZW50UmVmOiBDb21wb25lbnRSZWYpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0luc3RhbmNlLmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19