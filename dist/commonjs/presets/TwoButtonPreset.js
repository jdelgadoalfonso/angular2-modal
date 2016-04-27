"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('angular2/core');
var Utils_1 = require('../framework/Utils');
var MessageModal_1 = require('../modals/MessageModal');
var MessageModalPreset_1 = require('./base/MessageModalPreset');
function createBindings(config) {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: function (modalComponent, $event) {
                return modalComponent.dialog.close(true);
            }
        },
        {
            cssClass: config.cancelBtnClass,
            caption: config.cancelBtn,
            onClick: function (modalComponent, $event) {
                return modalComponent.dialog.dismiss();
            }
        }
    ];
    return core_1.ReflectiveInjector.resolve([
        core_1.provide(MessageModal_1.MessageModalContext, { useValue: config })
    ]);
}
/**
 * A Preset for a classic 2 button modal window.
 */
var TwoButtonPreset = (function (_super) {
    __extends(TwoButtonPreset, _super);
    function TwoButtonPreset(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, Utils_1.extend({
            modal: modal,
            bindings: createBindings,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary',
            cancelBtn: 'Cancel',
            cancelBtnClass: 'btn btn-default'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass',
            'cancelBtn',
            'cancelBtnClass'
        ]);
    }
    return TwoButtonPreset;
}(MessageModalPreset_1.MessageModalPreset));
exports.TwoButtonPreset = TwoButtonPreset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHdvQnV0dG9uUHJlc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYW5ndWxhcjItbW9kYWwvcHJlc2V0cy9Ud29CdXR0b25QcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXNFLGVBQWUsQ0FBQyxDQUFBO0FBRXRGLHNCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBRTFDLDZCQUFnRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3pFLG1DQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBSTdELHdCQUF3QixNQUEyQjtJQUMvQyxNQUFNLENBQUMsT0FBTyxHQUFHO1FBQ2I7WUFDSSxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3JCLE9BQU8sRUFBRSxVQUFDLGNBQTRCLEVBQUUsTUFBa0I7Z0JBQ3RELE9BQUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQWpDLENBQWlDO1NBQ3hDO1FBQ0Q7WUFDSSxRQUFRLEVBQUUsTUFBTSxDQUFDLGNBQWM7WUFDL0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxVQUFDLGNBQTRCLEVBQUUsTUFBa0I7Z0JBQ3RELE9BQUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFBL0IsQ0FBK0I7U0FDdEM7S0FDSixDQUFDO0lBRUYsTUFBTSxDQUFDLHlCQUFrQixDQUFDLE9BQU8sQ0FBQztRQUM5QixjQUFPLENBQUMsa0NBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWdCRDs7R0FFRztBQUNIO0lBQXFDLG1DQUF1QztJQUN4RSx5QkFBWSxLQUFZLEVBQUUsYUFBOEM7UUFBOUMsNkJBQThDLEdBQTlDLHlCQUE4QztRQUNwRSxrQkFBTSxjQUFNLENBQU87WUFDZixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixTQUFTLEVBQUUsUUFBUTtZQUNuQixjQUFjLEVBQUUsaUJBQWlCO1NBQ3BDLEVBQUUsYUFBYSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLE9BQU87WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQjtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUwsc0JBQUM7QUFBRCxDQUFDLEFBckJELENBQXFDLHVDQUFrQixHQXFCdEQ7QUFyQlksdUJBQWUsa0JBcUIzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWZsZWN0aXZlSW5qZWN0b3IsIHByb3ZpZGUsIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rmx1ZW50QXNzaWduTWV0aG9kfSBmcm9tICcuLi9mcmFtZXdvcmsvRmx1ZW50QXNzaWduJztcbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9mcmFtZXdvcmsvVXRpbHMnO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vcHJvdmlkZXJzL01vZGFsJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29udGV4dCwgTWVzc2FnZU1vZGFsfSBmcm9tICcuLi9tb2RhbHMvTWVzc2FnZU1vZGFsJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsUHJlc2V0fSBmcm9tICcuL2Jhc2UvTWVzc2FnZU1vZGFsUHJlc2V0JztcbmltcG9ydCB7T25lQnV0dG9uUHJlc2V0RGF0YX0gZnJvbSAnLi9PbmVCdXR0b25QcmVzZXQnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdzKGNvbmZpZzogVHdvQnV0dG9uUHJlc2V0RGF0YSk6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10ge1xuICAgIGNvbmZpZy5idXR0b25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjc3NDbGFzczogY29uZmlnLm9rQnRuQ2xhc3MsXG4gICAgICAgICAgICBjYXB0aW9uOiBjb25maWcub2tCdG4sXG4gICAgICAgICAgICBvbkNsaWNrOiAobW9kYWxDb21wb25lbnQ6IE1lc3NhZ2VNb2RhbCwgJGV2ZW50OiBNb3VzZUV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIG1vZGFsQ29tcG9uZW50LmRpYWxvZy5jbG9zZSh0cnVlKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjc3NDbGFzczogY29uZmlnLmNhbmNlbEJ0bkNsYXNzLFxuICAgICAgICAgICAgY2FwdGlvbjogY29uZmlnLmNhbmNlbEJ0bixcbiAgICAgICAgICAgIG9uQ2xpY2s6IChtb2RhbENvbXBvbmVudDogTWVzc2FnZU1vZGFsLCAkZXZlbnQ6IE1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgbW9kYWxDb21wb25lbnQuZGlhbG9nLmRpc21pc3MoKVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShbXG4gICAgICAgIHByb3ZpZGUoTWVzc2FnZU1vZGFsQ29udGV4dCwge3VzZVZhbHVlOiBjb25maWd9KVxuICAgIF0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR3b0J1dHRvblByZXNldERhdGEgZXh0ZW5kcyBPbmVCdXR0b25QcmVzZXREYXRhIHtcbiAgICAvKiogXG4gICAgICogQ2FwdGlvbiBmb3IgdGhlIENhbmNlbCBidXR0b24uXG4gICAgICogRGVmYXVsdDogQ2FuY2VsXG4gICAgICovXG4gICAgY2FuY2VsQnRuOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBIENsYXNzIGZvciB0aGUgQ2FuY2VsIGJ1dHRvbi5cbiAgICAgKiBEZWZhdWx0OiBidG4gYnRuLWRlZmF1bHRcbiAgICAgKi9cbiAgICBjYW5jZWxCdG5DbGFzczogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUHJlc2V0IGZvciBhIGNsYXNzaWMgMiBidXR0b24gbW9kYWwgd2luZG93LlxuICovXG5leHBvcnQgY2xhc3MgVHdvQnV0dG9uUHJlc2V0IGV4dGVuZHMgTWVzc2FnZU1vZGFsUHJlc2V0PFR3b0J1dHRvblByZXNldERhdGE+IHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbDogTW9kYWwsIGRlZmF1bHRWYWx1ZXM6IFR3b0J1dHRvblByZXNldERhdGEgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoZXh0ZW5kPGFueT4oIHtcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbCxcbiAgICAgICAgICAgIGJpbmRpbmdzOiBjcmVhdGVCaW5kaW5ncyxcbiAgICAgICAgICAgIG9rQnRuOiAnT0snLFxuICAgICAgICAgICAgb2tCdG5DbGFzczogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICBjYW5jZWxCdG46ICdDYW5jZWwnLFxuICAgICAgICAgICAgY2FuY2VsQnRuQ2xhc3M6ICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICAgIH0sIGRlZmF1bHRWYWx1ZXMgfHwge30pLCBbXG4gICAgICAgICAgICAnb2tCdG4nLFxuICAgICAgICAgICAgJ29rQnRuQ2xhc3MnLFxuICAgICAgICAgICAgJ2NhbmNlbEJ0bicsXG4gICAgICAgICAgICAnY2FuY2VsQnRuQ2xhc3MnXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIG9rQnRuOiBGbHVlbnRBc3NpZ25NZXRob2Q8c3RyaW5nLCB0aGlzPjtcbiAgICBva0J0bkNsYXNzOiBGbHVlbnRBc3NpZ25NZXRob2Q8c3RyaW5nLCB0aGlzPjtcbiAgICBjYW5jZWxCdG46IEZsdWVudEFzc2lnbk1ldGhvZDxzdHJpbmcsIHRoaXM+O1xuICAgIGNhbmNlbEJ0bkNsYXNzOiBGbHVlbnRBc3NpZ25NZXRob2Q8c3RyaW5nLCB0aGlzPjtcbn1cblxuIl19