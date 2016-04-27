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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var ModalInstanceStack_1 = require('../framework/ModalInstanceStack');
var ModalConfig_1 = require('../models/ModalConfig');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
var modalBackdrop_1 = require('../components/modalBackdrop');
var presets_1 = require('../presets');
var _stack = new ModalInstanceStack_1.ModalInstanceStack();
var Modal = (function () {
    function Modal(componentLoader, defaultConfig) {
        // The Modal class should be an application wide service (i.e: singleton).
        // This will run once in most applications...
        // If the user provides a ModalConfig instance to the DI,
        // the custom config will be the default one.
        this.componentLoader = componentLoader;
        Object.defineProperty(this, 'config', {
            configurable: false,
            enumerable: true,
            value: (defaultConfig)
                ? ModalConfig_1.ModalConfig.makeValid(defaultConfig) : ModalConfig_1.ModalConfig.makeValid(new ModalConfig_1.ModalConfig()),
            writable: false
        });
    }
    Modal.prototype.alert = function () {
        return new presets_1.OneButtonPreset(this, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new presets_1.OneButtonPreset(this, { isBlocking: true, keyboard: null });
    };
    Modal.prototype.confirm = function () {
        return new presets_1.TwoButtonPreset(this, { isBlocking: true, keyboard: null });
    };
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param viewRef The element to block using the modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    Modal.prototype.open = function (componentType, viewRef, bindings, config) {
        config = (config) ? ModalConfig_1.ModalConfig.makeValid(config, this.config) : this.config;
        var dialog = new ModalDialogInstance_1.ModalDialogInstance(config);
        var dialogBindings = core_1.ReflectiveInjector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })
        ]);
        return this.createBackdrop(viewRef, dialogBindings)
            .then(function (backdropRef) {
            var modalDataBindings = core_1.ReflectiveInjector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]).concat(bindings);
            dialog.modalDataBindings = modalDataBindings;
            dialog.componentType = componentType;
            dialog.backdropRef = backdropRef;
            _stack.pushManaged(dialog);
            return dialog;
            /*
                            return this.componentLoader.loadNextToLocation(
                                BootstrapModalContainer, backdropRef.instance.viewRef, dialogBindings)
                                .then((bootstrapRef: ComponentRef) => {
                                    dialog.bootstrapRef = bootstrapRef;
                                    return this.componentLoader.loadNextToLocation(
                                        componentType, bootstrapRef.instance.viewRef, modalDataBindings)
                                        .then((contentRef: ComponentRef) => {
                                            dialog.contentRef = contentRef;
                                            _stack.pushManaged(dialog);
                                            return dialog;
                                        });
                                    }
                                );
            */
        });
    };
    Modal.prototype.stackPosition = function (mInstande) {
        return _stack.indexOf(mInstande);
    };
    Object.defineProperty(Modal.prototype, "stackLength", {
        get: function () {
            return _stack.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates backdrop element.
     * @param {ViewContainerRef} The element to block using the modal.
     * @param {ResolvedReflectiveProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @returns {Promise<ComponentRef>}
     */
    Modal.prototype.createBackdrop = function (viewRef, bindings) {
        return this.componentLoader.loadNextToLocation(modalBackdrop_1.ModalBackdrop, viewRef, bindings);
    };
    Modal = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, ModalConfig_1.ModalConfig])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9wcm92aWRlcnMvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQVdPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLG1DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLDRCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELHdCQUErQyxZQUFZLENBQUMsQ0FBQTtBQUU1RCxJQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7QUFJeEM7SUFHSSxlQUFvQixlQUF1QyxFQUNuQyxhQUEwQjtRQUM5QywwRUFBMEU7UUFDMUUsNkNBQTZDO1FBQzdDLHlEQUF5RDtRQUN6RCw2Q0FBNkM7UUFMN0Isb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBT3ZELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBTztZQUN2QyxZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUUsSUFBSTtZQUNoQixLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUM7a0JBQ2hCLHlCQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLHlCQUFXLENBQUMsU0FBUyxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ3JGLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLElBQUkseUJBQWUsQ0FBQyxJQUFJLEVBQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLHlCQUFlLENBQUMsSUFBSSxFQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLHlCQUFlLENBQUMsSUFBSSxFQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLG9CQUFJLEdBQVgsVUFBWSxhQUFrQyxFQUFFLE9BQXlCLEVBQzdELFFBQXNDLEVBQUUsTUFBb0I7UUFHcEUsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTdFLElBQUksTUFBTSxHQUFHLElBQUkseUNBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0MsSUFBSSxjQUFjLEdBQUcseUJBQWtCLENBQUMsT0FBTyxDQUMzQyxDQUFFLGNBQU8sQ0FBQyx5Q0FBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO2FBQzlDLElBQUksQ0FBRSxVQUFDLFdBQXlCO1lBQzdCLElBQUksaUJBQWlCLEdBQUcseUJBQWtCLENBQUMsT0FBTyxDQUM5QyxDQUFDLGNBQU8sQ0FBQyx5Q0FBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1lBQzdDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Y0FjRTtRQUNVLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDZCQUFhLEdBQWIsVUFBYyxTQUE4QjtRQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQUksOEJBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssOEJBQWMsR0FBdEIsVUFBdUIsT0FBeUIsRUFDekIsUUFBc0M7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsNkJBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQWhHTDtRQUFDLGlCQUFVLEVBQUU7bUJBS0ksZUFBUSxFQUFFOzthQUxkO0lBaUdiLFlBQUM7QUFBRCxDQUFDLEFBaEdELElBZ0dDO0FBaEdZLGFBQUssUUFnR2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgICBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBJbmplY3RhYmxlLFxuICAgIHByb3ZpZGUsXG4gICAgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7TW9kYWxJbnN0YW5jZVN0YWNrfSBmcm9tICcuLi9mcmFtZXdvcmsvTW9kYWxJbnN0YW5jZVN0YWNrJztcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gJy4uL21vZGVscy9Nb2RhbENvbmZpZyc7XG5pbXBvcnQge01vZGFsRGlhbG9nSW5zdGFuY2V9IGZyb20gJy4uL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlJztcbmltcG9ydCB7TW9kYWxCYWNrZHJvcH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbEJhY2tkcm9wJztcbmltcG9ydCB7Qm9vdHN0cmFwTW9kYWxDb250YWluZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvYm9vdHN0cmFwTW9kYWxDb250YWluZXInO1xuaW1wb3J0IHtPbmVCdXR0b25QcmVzZXQsIFR3b0J1dHRvblByZXNldH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbmNvbnN0IF9zdGFjayA9IG5ldyBNb2RhbEluc3RhbmNlU3RhY2soKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIHByaXZhdGUgY29uZmlnOiBNb2RhbENvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50TG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIGRlZmF1bHRDb25maWc6IE1vZGFsQ29uZmlnKSB7XG4gICAgICAgIC8vIFRoZSBNb2RhbCBjbGFzcyBzaG91bGQgYmUgYW4gYXBwbGljYXRpb24gd2lkZSBzZXJ2aWNlIChpLmU6IHNpbmdsZXRvbikuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBydW4gb25jZSBpbiBtb3N0IGFwcGxpY2F0aW9ucy4uLlxuICAgICAgICAvLyBJZiB0aGUgdXNlciBwcm92aWRlcyBhIE1vZGFsQ29uZmlnIGluc3RhbmNlIHRvIHRoZSBESSxcbiAgICAgICAgLy8gdGhlIGN1c3RvbSBjb25maWcgd2lsbCBiZSB0aGUgZGVmYXVsdCBvbmUuXG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb25maWcnLCA8YW55PntcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IChkZWZhdWx0Q29uZmlnKVxuICAgICAgICAgICAgICAgID8gTW9kYWxDb25maWcubWFrZVZhbGlkKGRlZmF1bHRDb25maWcpIDogTW9kYWxDb25maWcubWFrZVZhbGlkKG5ldyBNb2RhbENvbmZpZygpKSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbGVydCgpOiBPbmVCdXR0b25QcmVzZXQge1xuICAgICAgICByZXR1cm4gbmV3IE9uZUJ1dHRvblByZXNldCh0aGlzLCA8YW55PnsgaXNCbG9ja2luZzogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcHJvbXB0KCk6IE9uZUJ1dHRvblByZXNldCB7XG4gICAgICAgIHJldHVybiBuZXcgT25lQnV0dG9uUHJlc2V0KHRoaXMsIDxhbnk+eyBpc0Jsb2NraW5nOiB0cnVlLCBrZXlib2FyZDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBjb25maXJtKCk6IFR3b0J1dHRvblByZXNldCB7XG4gICAgICAgIHJldHVybiBuZXcgVHdvQnV0dG9uUHJlc2V0KHRoaXMsIDxhbnk+eyBpc0Jsb2NraW5nOiB0cnVlLCBrZXlib2FyZDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhIG1vZGFsIHdpbmRvdyBpbnNpZGUgYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRUeXBlIFRoZSBhbmd1bGFyIENvbXBvbmVudCB0byByZW5kZXIgYXMgbW9kYWwuXG4gICAgICogQHBhcmFtIHZpZXdSZWYgVGhlIGVsZW1lbnQgdG8gYmxvY2sgdXNpbmcgdGhlIG1vZGFsLlxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZyBBIE1vZGFsIENvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+fVxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKGNvbXBvbmVudFR5cGU6IEZ1bmN0aW9uQ29uc3RydWN0b3IsIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgYmluZGluZ3M6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10sIGNvbmZpZz86IE1vZGFsQ29uZmlnXG4gICAgICAgICAgICAgICApOiBQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+IHtcblxuICAgICAgICBjb25maWcgPSAoY29uZmlnKSA/IE1vZGFsQ29uZmlnLm1ha2VWYWxpZChjb25maWcsIHRoaXMuY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuXG4gICAgICAgIGxldCBkaWFsb2cgPSBuZXcgTW9kYWxEaWFsb2dJbnN0YW5jZShjb25maWcpO1xuXG4gICAgICAgIGxldCBkaWFsb2dCaW5kaW5ncyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKFxuICAgICAgICAgICAgWyBwcm92aWRlKE1vZGFsRGlhbG9nSW5zdGFuY2UsIHt1c2VWYWx1ZTogZGlhbG9nfSlcbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUJhY2tkcm9wKHZpZXdSZWYsIGRpYWxvZ0JpbmRpbmdzKVxuICAgICAgICAgICAgLnRoZW4oIChiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsRGF0YUJpbmRpbmdzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIFtwcm92aWRlKE1vZGFsRGlhbG9nSW5zdGFuY2UsIHt1c2VWYWx1ZTogZGlhbG9nfSldKS5jb25jYXQoYmluZGluZ3MpO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5tb2RhbERhdGFCaW5kaW5ncyA9IG1vZGFsRGF0YUJpbmRpbmdzO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5jb21wb25lbnRUeXBlID0gY29tcG9uZW50VHlwZTtcbiAgICAgICAgICAgICAgICBkaWFsb2cuYmFja2Ryb3BSZWYgPSBiYWNrZHJvcFJlZjtcbiAgICAgICAgICAgICAgICBfc3RhY2sucHVzaE1hbmFnZWQoZGlhbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlhbG9nO1xuLypcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZE5leHRUb0xvY2F0aW9uKFxuICAgICAgICAgICAgICAgICAgICBCb290c3RyYXBNb2RhbENvbnRhaW5lciwgYmFja2Ryb3BSZWYuaW5zdGFuY2Uudmlld1JlZiwgZGlhbG9nQmluZGluZ3MpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChib290c3RyYXBSZWY6IENvbXBvbmVudFJlZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmJvb3RzdHJhcFJlZiA9IGJvb3RzdHJhcFJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSwgYm9vdHN0cmFwUmVmLmluc3RhbmNlLnZpZXdSZWYsIG1vZGFsRGF0YUJpbmRpbmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChjb250ZW50UmVmOiBDb21wb25lbnRSZWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhY2sucHVzaE1hbmFnZWQoZGlhbG9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpYWxvZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiovXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFja1Bvc2l0aW9uKG1JbnN0YW5kZTogTW9kYWxEaWFsb2dJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gX3N0YWNrLmluZGV4T2YobUluc3RhbmRlKTtcbiAgICB9XG5cbiAgICBnZXQgc3RhY2tMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIF9zdGFjay5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBiYWNrZHJvcCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7Vmlld0NvbnRhaW5lclJlZn0gVGhlIGVsZW1lbnQgdG8gYmxvY2sgdXNpbmcgdGhlIG1vZGFsLlxuICAgICAqIEBwYXJhbSB7UmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXX0gUmVzb2x2ZWQgcHJvdmlkZXJzLFxuICAgICAqICAgICBtdXN0IGNvbnRhaW4gdGhlIE1vZGFsRGlhbG9nSW5zdGFuY2UgaW5zdGFuY2UgZm9yIHRoaXMgYmFja2Ryb3AuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q29tcG9uZW50UmVmPn1cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUJhY2tkcm9wKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nczogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXSk6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24oTW9kYWxCYWNrZHJvcCwgdmlld1JlZiwgYmluZGluZ3MpO1xuICAgIH1cbn1cbiJdfQ==