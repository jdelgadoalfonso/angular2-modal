"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('angular2/core');
var MessageModal_1 = require('../modals/MessageModal');
var MessageModalPreset_1 = require('./base/MessageModalPreset');
var Utils_1 = require('../framework/Utils');
function createBindings(config) {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: function (modalComponent, $event) {
                return modalComponent.dialog.close(true);
            }
        }
    ];
    return core_1.ReflectiveInjector.resolve([
        core_1.provide(MessageModal_1.MessageModalContext, { useValue: config })
    ]);
}
/**
 * A Preset for a classic 1 button modal window.
 */
var OneButtonPreset = (function (_super) {
    __extends(OneButtonPreset, _super);
    function OneButtonPreset(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, Utils_1.extend({
            modal: modal,
            bindings: createBindings,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]);
    }
    return OneButtonPreset;
}(MessageModalPreset_1.MessageModalPreset));
exports.OneButtonPreset = OneButtonPreset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT25lQnV0dG9uUHJlc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYW5ndWxhcjItbW9kYWwvcHJlc2V0cy9PbmVCdXR0b25QcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXNFLGVBQWUsQ0FBQyxDQUFBO0FBR3RGLDZCQUFnRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3pFLG1DQUF5RCwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JGLHNCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBRzFDLHdCQUF3QixNQUEyQjtJQUMvQyxNQUFNLENBQUMsT0FBTyxHQUFHO1FBQ2I7WUFDSSxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3JCLE9BQU8sRUFBRSxVQUFDLGNBQTRCLEVBQUUsTUFBbUI7Z0JBQ3ZELE9BQUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQWpDLENBQWlDO1NBQ3hDO0tBQ0osQ0FBQztJQUVGLE1BQU0sQ0FBQyx5QkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFDOUIsY0FBTyxDQUFDLGtDQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO0tBQ25ELENBQUMsQ0FBQztBQUNQLENBQUM7QUFnQkQ7O0dBRUc7QUFDSDtJQUFxQyxtQ0FBdUM7SUFDeEUseUJBQVksS0FBWSxFQUFFLGFBQThDO1FBQTlDLDZCQUE4QyxHQUE5Qyx5QkFBOEM7UUFDcEUsa0JBQU0sY0FBTSxDQUFPO1lBQ2YsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsY0FBYztZQUN4QixLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRSxpQkFBaUI7U0FDaEMsRUFBRSxhQUFhLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDckIsT0FBTztZQUNQLFlBQVk7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBSUwsc0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBcUMsdUNBQWtCLEdBZXREO0FBZlksdUJBQWUsa0JBZTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZmxlY3RpdmVJbmplY3RvciwgcHJvdmlkZSwgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGbHVlbnRBc3NpZ25NZXRob2R9IGZyb20gJy4uL2ZyYW1ld29yay9GbHVlbnRBc3NpZ24nO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vcHJvdmlkZXJzL01vZGFsJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29udGV4dCwgTWVzc2FnZU1vZGFsfSBmcm9tICcuLi9tb2RhbHMvTWVzc2FnZU1vZGFsJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsUHJlc2V0LCBNZXNzYWdlTW9kYWxQcmVzZXREYXRhfSBmcm9tICcuL2Jhc2UvTWVzc2FnZU1vZGFsUHJlc2V0JztcbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9mcmFtZXdvcmsvVXRpbHMnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdzKGNvbmZpZzogT25lQnV0dG9uUHJlc2V0RGF0YSk6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10ge1xuICAgIGNvbmZpZy5idXR0b25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjc3NDbGFzczogY29uZmlnLm9rQnRuQ2xhc3MsXG4gICAgICAgICAgICBjYXB0aW9uOiBjb25maWcub2tCdG4sXG4gICAgICAgICAgICBvbkNsaWNrOiAobW9kYWxDb21wb25lbnQ6IE1lc3NhZ2VNb2RhbCwgJGV2ZW50PzogTW91c2VFdmVudCkgPT5cbiAgICAgICAgICAgICAgICBtb2RhbENvbXBvbmVudC5kaWFsb2cuY2xvc2UodHJ1ZSlcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW1xuICAgICAgICBwcm92aWRlKE1lc3NhZ2VNb2RhbENvbnRleHQsIHt1c2VWYWx1ZTogY29uZmlnfSlcbiAgICBdKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPbmVCdXR0b25QcmVzZXREYXRhIGV4dGVuZHMgTWVzc2FnZU1vZGFsUHJlc2V0RGF0YSB7XG4gICAgLyoqIFxuICAgICAqIENhcHRpb24gZm9yIHRoZSBPSyBidXR0b24uXG4gICAgICogRGVmYXVsdDogT0tcbiAgICAgKi9cbiAgICBva0J0bjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBDbGFzcyBmb3IgdGhlIE9LIGJ1dHRvbi5cbiAgICAgKiBEZWZhdWx0OiBidG4gYnRuLXByaW1hcnlcbiAgICAgKi9cbiAgICBva0J0bkNsYXNzOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBQcmVzZXQgZm9yIGEgY2xhc3NpYyAxIGJ1dHRvbiBtb2RhbCB3aW5kb3cuXG4gKi9cbmV4cG9ydCBjbGFzcyBPbmVCdXR0b25QcmVzZXQgZXh0ZW5kcyBNZXNzYWdlTW9kYWxQcmVzZXQ8T25lQnV0dG9uUHJlc2V0RGF0YT4ge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsOiBNb2RhbCwgZGVmYXVsdFZhbHVlczogT25lQnV0dG9uUHJlc2V0RGF0YSA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihleHRlbmQ8YW55Pigge1xuICAgICAgICAgICAgbW9kYWw6IG1vZGFsLFxuICAgICAgICAgICAgYmluZGluZ3M6IGNyZWF0ZUJpbmRpbmdzLFxuICAgICAgICAgICAgb2tCdG46ICdPSycsXG4gICAgICAgICAgICBva0J0bkNsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICB9LCBkZWZhdWx0VmFsdWVzIHx8IHt9KSwgW1xuICAgICAgICAgICAgJ29rQnRuJyxcbiAgICAgICAgICAgICdva0J0bkNsYXNzJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBva0J0bjogRmx1ZW50QXNzaWduTWV0aG9kPHN0cmluZywgdGhpcz47XG4gICAgb2tCdG5DbGFzczogRmx1ZW50QXNzaWduTWV0aG9kPHN0cmluZywgdGhpcz47XG59XG5cbiJdfQ==