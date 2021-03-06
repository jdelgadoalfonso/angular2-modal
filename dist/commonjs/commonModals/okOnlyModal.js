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
var ICustomModal_1 = require('../models/ICustomModal');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * @deprecated
 */
var OKOnlyContent = (function () {
    function OKOnlyContent(title, body, okText) {
        if (title === void 0) { title = 'Hello World Title'; }
        if (body === void 0) { body = 'Hello World Body!'; }
        if (okText === void 0) { okText = 'OK'; }
        this.title = title;
        this.body = body;
        this.okText = okText;
    }
    return OKOnlyContent;
}());
exports.OKOnlyContent = OKOnlyContent;
/**
 * @deprecated
 */
var OKOnlyModal = (function () {
    function OKOnlyModal(dialog, modelContentData) {
        this.dialog = dialog;
        this.context = modelContentData;
        console.warn('DEPRECATED: OKOnlyModal will not be available in next version of ' +
            'angular2-modal, please move to the preset API.');
    }
    OKOnlyModal.prototype.ok = function () {
        this.dialog.close(true);
    };
    OKOnlyModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok()\">{{context.okText}}</button>\n        </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])
    ], OKOnlyModal);
    return OKOnlyModal;
}());
exports.OKOnlyModal = OKOnlyModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tPbmx5TW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9jb21tb25Nb2RhbHMvb2tPbmx5TW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUV2RSw2QkFBa0Qsd0JBQXdCLENBQUMsQ0FBQTtBQUMzRSxvQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUVsRTs7R0FFRztBQUNIO0lBQ0ksdUJBQ1csS0FBbUMsRUFDbkMsSUFBa0MsRUFDbEMsTUFBcUI7UUFGNUIscUJBQTBDLEdBQTFDLDJCQUEwQztRQUMxQyxvQkFBeUMsR0FBekMsMEJBQXlDO1FBQ3pDLHNCQUE0QixHQUE1QixhQUE0QjtRQUZyQixVQUFLLEdBQUwsS0FBSyxDQUE4QjtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUE4QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzdCLENBQUM7SUFDUixvQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlkscUJBQWEsZ0JBTXpCLENBQUE7QUFFRDs7R0FFRztBQVlIO0lBSUkscUJBQVksTUFBMkIsRUFBRSxnQkFBOEI7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBa0IsZ0JBQWdCLENBQUM7UUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxtRUFBbUU7WUFDNUUsZ0RBQWdELENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsd0JBQUUsR0FBRjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUF4Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUNSLG9UQU1XO1NBQ2QsQ0FBQzs7bUJBQUE7SUFlRixrQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksbUJBQVcsY0FjdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBwcm92aWRlLCBFbGVtZW50UmVmLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7SUN1c3RvbU1vZGFsLCBJQ3VzdG9tTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL21vZGVscy9JQ3VzdG9tTW9kYWwnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIE9LT25seUNvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBUaXRsZScsXG4gICAgICAgIHB1YmxpYyBib2R5OiBzdHJpbmcgPSAnSGVsbG8gV29ybGQgQm9keSEnLFxuICAgICAgICBwdWJsaWMgb2tUZXh0OiBzdHJpbmcgPSAnT0snXG4gICAgKSB7fVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2NvbnRleHQudGl0bGV9fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPnt7Y29udGV4dC5ib2R5fX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvaygpXCI+e3tjb250ZXh0Lm9rVGV4dH19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgT0tPbmx5TW9kYWwgaW1wbGVtZW50cyBJQ3VzdG9tTW9kYWxDb21wb25lbnQge1xuICAgIGRpYWxvZzogTW9kYWxEaWFsb2dJbnN0YW5jZTtcbiAgICBjb250ZXh0OiBPS09ubHlDb250ZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGlhbG9nOiBNb2RhbERpYWxvZ0luc3RhbmNlLCBtb2RlbENvbnRlbnREYXRhOiBJQ3VzdG9tTW9kYWwpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBkaWFsb2c7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IDxPS09ubHlDb250ZW50Pm1vZGVsQ29udGVudERhdGE7XG4gICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRFRDogT0tPbmx5TW9kYWwgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluIG5leHQgdmVyc2lvbiBvZiAnICtcbiAgICAgICAgICAgICdhbmd1bGFyMi1tb2RhbCwgcGxlYXNlIG1vdmUgdG8gdGhlIHByZXNldCBBUEkuJyk7XG4gICAgfVxuXG4gICAgb2soKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKHRydWUpO1xuICAgIH1cbn1cbiJdfQ==