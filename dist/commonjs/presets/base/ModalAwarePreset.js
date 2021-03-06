"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Modal_1 = require('../../providers/Modal');
var ModalConfig_1 = require('../../models/ModalConfig');
var FluentAssign_1 = require('./../../framework/FluentAssign');
/**
 * A Preset that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the preset.
 * ModalAwarePreset occupy the following properties:
 * - ModalConfig (size, isBlocking, keyboard): You can set them, if not they will get the
 * default values defined in the Modal service.
 * - component, modal, bindings: Preset values needed to fire up the modal.
 * - open: A Method used to open the modal window.
 */
var ModalAwarePreset = (function (_super) {
    __extends(ModalAwarePreset, _super);
    function ModalAwarePreset(defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        _super.call(this, defaultValues, initialSetters);
        // this is not needed as we get them via defaults.
        // but it "protects" overwrites since we set writeOnce=true.
        FluentAssign_1.setAssignMethod(this, 'modal', true);
        FluentAssign_1.setAssignMethod(this, 'component', true);
        FluentAssign_1.setAssignMethod(this, 'bindings', true);
        FluentAssign_1.setAssignMethod(this, 'size');
        FluentAssign_1.setAssignMethod(this, 'isBlocking');
        FluentAssign_1.setAssignMethod(this, 'keyboard');
        FluentAssign_1.setAssignMethod(this, 'dialogClass');
    }
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param inside If set opens the modal inside the supplied elements ref at the specified anchor
     * @returns Promise<ModalDialogInstance>
     */
    ModalAwarePreset.prototype.open = function (viewRef) {
        var config = this.toJSON();
        if (!(config.modal instanceof Modal_1.Modal)) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        if (typeof config.bindings !== 'function') {
            return Promise.reject(new Error('Configuration Error: bindings not set.'));
        }
        // TODO: Validate inside?
        return config.modal.open(config.component, viewRef, config.bindings(config), new ModalConfig_1.ModalConfig(config.size, config.isBlocking, config.keyboard));
    };
    return ModalAwarePreset;
}(FluentAssign_1.FluentAssign));
exports.ModalAwarePreset = ModalAwarePreset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxBd2FyZVByZXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FuZ3VsYXIyLW1vZGFsL3ByZXNldHMvYmFzZS9Nb2RhbEF3YXJlUHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHNCQUFvQix1QkFBdUIsQ0FBQyxDQUFBO0FBQzVDLDRCQUE0RCwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZGLDZCQUFnRSxnQ0FBZ0MsQ0FBQyxDQUFBO0FBVWpHOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQXNFLG9DQUFlO0lBQ2pGLDBCQUFZLGFBQTRCLEVBQUUsY0FBb0M7UUFBbEUsNkJBQTRCLEdBQTVCLHlCQUE0QjtRQUFFLDhCQUFvQyxHQUFwQywwQkFBb0M7UUFDMUUsa0JBQU0sYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLGtEQUFrRDtRQUNsRCw0REFBNEQ7UUFDNUQsOEJBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLDhCQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6Qyw4QkFBZSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFeEMsOEJBQWUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsOEJBQWUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEMsOEJBQWUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsOEJBQWUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTRCRDs7OztPQUlHO0lBQ0gsK0JBQUksR0FBSixVQUFLLE9BQXlCO1FBQzFCLElBQUksTUFBTSxHQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU5QixFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssWUFBWSxhQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUVELHlCQUF5QjtRQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLE9BQU8sRUFDUCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUN2QixJQUFJLHlCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FDbkUsQ0FBQztJQUNOLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFqRUQsQ0FBc0UsMkJBQVksR0FpRWpGO0FBakVZLHdCQUFnQixtQkFpRTVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Jlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9Nb2RhbCc7XG5pbXBvcnQge0lNb2RhbENvbmZpZywgTW9kYWxDb25maWcsIEJvb3RzdHJhcE1vZGFsU2l6ZX0gZnJvbSAnLi4vLi4vbW9kZWxzL01vZGFsQ29uZmlnJztcbmltcG9ydCB7Rmx1ZW50QXNzaWduLCBGbHVlbnRBc3NpZ25NZXRob2QsIHNldEFzc2lnbk1ldGhvZH0gZnJvbSAnLi8uLi8uLi9mcmFtZXdvcmsvRmx1ZW50QXNzaWduJztcbmltcG9ydCB7TW9kYWxEaWFsb2dJbnN0YW5jZX0gZnJvbSAnLi4vLi4vbW9kZWxzL01vZGFsRGlhbG9nSW5zdGFuY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsQXdhcmVQcmVzZXREYXRhIGV4dGVuZHMgSU1vZGFsQ29uZmlnIHtcbiAgICBjb21wb25lbnQ6IGFueTtcbiAgICBtb2RhbDogTW9kYWw7XG4gICAgYmluZGluZ3M6IDxUPihjb25maWc6IFQpID0+IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW107XG59XG5cblxuLyoqXG4gKiBBIFByZXNldCB0aGF0IGtub3dzIGFib3V0IHRoZSBtb2RhbCBzZXJ2aWNlLCBhbmQgc28gY2FuIG9wZW4gYSBtb2RhbCB3aW5kb3cgb24gZGVtYW5kLlxuICogVXNlIHRoZSBmbHVlbnQgQVBJIHRvIGNvbmZpZ3VyZSB0aGUgcHJlc2V0IGFuZCB0aGVuIGludm9rZSB0aGUgJ29wZW4nIG1ldGhvZCB0byBvcGVuIGEgbW9kYWxcbiAqIGJhc2VkIG9uIHRoZSBwcmVzZXQuXG4gKiBNb2RhbEF3YXJlUHJlc2V0IG9jY3VweSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiAtIE1vZGFsQ29uZmlnIChzaXplLCBpc0Jsb2NraW5nLCBrZXlib2FyZCk6IFlvdSBjYW4gc2V0IHRoZW0sIGlmIG5vdCB0aGV5IHdpbGwgZ2V0IHRoZVxuICogZGVmYXVsdCB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgTW9kYWwgc2VydmljZS5cbiAqIC0gY29tcG9uZW50LCBtb2RhbCwgYmluZGluZ3M6IFByZXNldCB2YWx1ZXMgbmVlZGVkIHRvIGZpcmUgdXAgdGhlIG1vZGFsLlxuICogLSBvcGVuOiBBIE1ldGhvZCB1c2VkIHRvIG9wZW4gdGhlIG1vZGFsIHdpbmRvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGFsQXdhcmVQcmVzZXQ8VCBleHRlbmRzIE1vZGFsQXdhcmVQcmVzZXREYXRhPiBleHRlbmRzIEZsdWVudEFzc2lnbjxUPiB7XG4gICAgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlczogVCA9IHVuZGVmaW5lZCwgaW5pdGlhbFNldHRlcnM6IHN0cmluZ1tdID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKGRlZmF1bHRWYWx1ZXMsIGluaXRpYWxTZXR0ZXJzKTtcbiAgICAgICAgLy8gdGhpcyBpcyBub3QgbmVlZGVkIGFzIHdlIGdldCB0aGVtIHZpYSBkZWZhdWx0cy5cbiAgICAgICAgLy8gYnV0IGl0IFwicHJvdGVjdHNcIiBvdmVyd3JpdGVzIHNpbmNlIHdlIHNldCB3cml0ZU9uY2U9dHJ1ZS5cbiAgICAgICAgc2V0QXNzaWduTWV0aG9kKHRoaXMsICdtb2RhbCcsIHRydWUpO1xuICAgICAgICBzZXRBc3NpZ25NZXRob2QodGhpcywgJ2NvbXBvbmVudCcsIHRydWUpO1xuICAgICAgICBzZXRBc3NpZ25NZXRob2QodGhpcywgJ2JpbmRpbmdzJywgdHJ1ZSk7XG5cbiAgICAgICAgc2V0QXNzaWduTWV0aG9kKHRoaXMsICdzaXplJyk7XG4gICAgICAgIHNldEFzc2lnbk1ldGhvZCh0aGlzLCAnaXNCbG9ja2luZycpO1xuICAgICAgICBzZXRBc3NpZ25NZXRob2QodGhpcywgJ2tleWJvYXJkJyk7XG4gICAgICAgIHNldEFzc2lnbk1ldGhvZCh0aGlzLCAnZGlhbG9nQ2xhc3MnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBtb2RhbC5cbiAgICAgKiAnbGcnIG9yICdzbScgb25seS5cbiAgICAgKiBOT1RFOiBObyB2YWxpZGF0aW9uLlxuICAgICAqIERlZmF1bHQgdG8gJ2xnJ1xuICAgICAqL1xuICAgIHNpemU6IEZsdWVudEFzc2lnbk1ldGhvZDxzdHJpbmcsIHRoaXM+O1xuICAgIC8qKlxuICAgICAqIERlc2NyaWJlcyBpZiB0aGUgbW9kYWwgaXMgYmxvY2tpbmcgbW9kYWwuXG4gICAgICogQSBCbG9ja2luZyBtb2RhbCBpcyBub3QgY2xvc2FibGUgYnkgY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93LlxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGlzQmxvY2tpbmc6IEZsdWVudEFzc2lnbk1ldGhvZDxib29sZWFuLCB0aGlzPjtcbiAgICAvKipcbiAgICAgKiBLZXlib2FyZCB2YWx1ZS9zIHRoYXQgY2xvc2UgdGhlIG1vZGFsLlxuICAgICAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgb3IgYW4gYXJyYXkgb2YgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICogQSBtb2RhbCBjbG9zZWQgYnkgYSBrZXlib2FyZCBzdHJva2Ugd2lsbCByZXN1bHQgaW4gYSAncmVqZWN0JyBub3RpZmljYXRpb24gZnJvbSB0aGUgcHJvbWlzZS5cbiAgICAgKiBEZWZhdWx0cyB0byAyNywgc2V0IGBudWxsYCBpbXBsaWNpdGx5IHRvIGRpc2FibGUuXG4gICAgICovXG4gICAga2V5Ym9hcmQ6IEZsdWVudEFzc2lnbk1ldGhvZDxBcnJheTxudW1iZXI+IHwgbnVtYmVyLCB0aGlzPjtcbiAgICAvKipcbiAgICAgKiBBIENsYXNzIGZvciB0aGUgbW9kYWwgZGlhbG9nIGNvbnRhaW5lci5cbiAgICAgKiBEZWZhdWx0OiBtb2RhbC1kaWFsb2dcbiAgICAgKi9cbiAgICBkaWFsb2dDbGFzczogRmx1ZW50QXNzaWduTWV0aG9kPEJvb3RzdHJhcE1vZGFsU2l6ZSwgdGhpcz47XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGEgbW9kYWwgd2luZG93IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoaXMgY29uZmlnIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSBpbnNpZGUgSWYgc2V0IG9wZW5zIHRoZSBtb2RhbCBpbnNpZGUgdGhlIHN1cHBsaWVkIGVsZW1lbnRzIHJlZiBhdCB0aGUgc3BlY2lmaWVkIGFuY2hvclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TW9kYWxEaWFsb2dJbnN0YW5jZT5cbiAgICAgKi9cbiAgICBvcGVuKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpOiBQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+IHtcbiAgICAgICAgbGV0IGNvbmZpZzogVCA9IHRoaXMudG9KU09OKCk7XG5cbiAgICAgICAgaWYgKCEgKGNvbmZpZy5tb2RhbCBpbnN0YW5jZW9mIE1vZGFsKSApIHtcbiAgICAgICAgICAgIHJldHVybiA8YW55PlByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBFcnJvcjogbW9kYWwgc2VydmljZSBub3Qgc2V0LicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLmJpbmRpbmdzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gPGFueT5Qcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gRXJyb3I6IGJpbmRpbmdzIG5vdCBzZXQuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogVmFsaWRhdGUgaW5zaWRlP1xuICAgICAgICByZXR1cm4gY29uZmlnLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICBjb25maWcuY29tcG9uZW50LFxuICAgICAgICAgICAgdmlld1JlZixcbiAgICAgICAgICAgIGNvbmZpZy5iaW5kaW5ncyhjb25maWcpLFxuICAgICAgICAgICAgbmV3IE1vZGFsQ29uZmlnKGNvbmZpZy5zaXplLCBjb25maWcuaXNCbG9ja2luZywgY29uZmlnLmtleWJvYXJkKVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==