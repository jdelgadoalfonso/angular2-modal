"use strict";
var async_1 = require('angular2/src/facade/async');
/**
 * API to an open modal window.
 */
var ModalDialogInstance = (function () {
    function ModalDialogInstance(config) {
        this.config = config;
        this._resultDefered = async_1.PromiseWrapper.completer();
    }
    Object.defineProperty(ModalDialogInstance.prototype, "backdropRef", {
        set: function (value) {
            this._backdropRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "modalDataBindings", {
        get: function () {
            return this._modalDataBindings;
        },
        set: function (value) {
            this._modalDataBindings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "componentType", {
        get: function () {
            return this._componentType;
        },
        set: function (value) {
            this._componentType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "result", {
        /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
        get: function () {
            return this._resultDefered.promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Close the modal with a return value, i.e: result.
     */
    ModalDialogInstance.prototype.close = function (result) {
        if (result === void 0) { result = null; }
        if (this.contentRef.instance.beforeClose &&
            this.contentRef.instance.beforeClose() === true)
            return;
        this.destroy();
        this._resultDefered.resolve(result);
    };
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    ModalDialogInstance.prototype.dismiss = function () {
        if (this.contentRef.instance.beforeDismiss &&
            this.contentRef.instance.beforeDismiss() === true)
            return;
        this.destroy();
        this._resultDefered.reject();
    };
    ModalDialogInstance.prototype.destroy = function () {
        this._backdropRef.destroy();
        this.contentRef.destroy();
    };
    return ModalDialogInstance;
}());
exports.ModalDialogInstance = ModalDialogInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxEaWFsb2dJbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FuZ3VsYXIyLW1vZGFsL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBNkIsMkJBQTJCLENBQUMsQ0FBQTtBQUl6RDs7R0FFRztBQUNIO0lBUUksNkJBQW1CLE1BQW1CO1FBQW5CLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxzQkFBSSw0Q0FBVzthQUFmLFVBQWdCLEtBQW1CO1lBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksa0RBQWlCO2FBY3JCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO2FBaEJELFVBQXNCLEtBQW1DO1lBQ3JELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw4Q0FBYTthQWNqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFoQkQsVUFBa0IsS0FBMEI7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx1Q0FBTTtRQUpWOzs7V0FHRzthQUNIO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBUUQ7O09BRUc7SUFDSCxtQ0FBSyxHQUFMLFVBQU0sTUFBa0I7UUFBbEIsc0JBQWtCLEdBQWxCLGFBQWtCO1FBQ3BCLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxxQ0FBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxJQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8scUNBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBaEVELElBZ0VDO0FBaEVZLDJCQUFtQixzQkFnRS9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudFJlZiwgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gJy4uL21vZGVscy9Nb2RhbENvbmZpZyc7XG5cbi8qKlxuICogQVBJIHRvIGFuIG9wZW4gbW9kYWwgd2luZG93LlxuICovXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2dJbnN0YW5jZSB7XG4gICAgY29udGVudFJlZjogQ29tcG9uZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjtcbiAgICBwcml2YXRlIF9yZXN1bHREZWZlcmVkOiBhbnk7XG4gICAgcHJpdmF0ZSBfbW9kYWxEYXRhQmluZGluZ3M6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW107XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50VHlwZTogRnVuY3Rpb25Db25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IE1vZGFsQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQgPSBQcm9taXNlV3JhcHBlci5jb21wbGV0ZXIoKTtcbiAgICB9XG5cbiAgICBzZXQgYmFja2Ryb3BSZWYodmFsdWU6IENvbXBvbmVudFJlZikge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcFJlZiA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgbW9kYWxEYXRhQmluZGluZ3ModmFsdWU6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10pIHtcbiAgICAgICAgdGhpcy5fbW9kYWxEYXRhQmluZGluZ3MgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IGNvbXBvbmVudFR5cGUodmFsdWU6IEZ1bmN0aW9uQ29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50VHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIG9uIGEgY2xvc2UgZXZlbnQgYW5kIHJlamVjdGVkIG9uIGEgZGlzbWlzcyBldmVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPnxhbnl8KnxQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2V0IHJlc3VsdCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0RGVmZXJlZC5wcm9taXNlO1xuICAgIH1cbiAgICBnZXQgbW9kYWxEYXRhQmluZGluZ3MoKTogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RhbERhdGFCaW5kaW5ncztcbiAgICB9XG4gICAgZ2V0IGNvbXBvbmVudFR5cGUoKTogRnVuY3Rpb25Db25zdHJ1Y3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRUeXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDbG9zZSB0aGUgbW9kYWwgd2l0aCBhIHJldHVybiB2YWx1ZSwgaS5lOiByZXN1bHQuXG4gICAgICovXG4gICAgY2xvc2UocmVzdWx0OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICggdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlKCkgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2xvc2UgdGhlIG1vZGFsIHdpdGhvdXQgYSByZXR1cm4gdmFsdWUsIGkuZTogY2FuY2VsbGVkLlxuICAgICAqICBUaGlzIGNhbGwgaXMgYXV0b21hdGljYWxseSBpbnZva2VkIHdoZW4gYSB1c2VyIGVpdGhlcjpcbiAgICAgKiAgLSBQcmVzc2VzIGFuIGV4aXQga2V5Ym9hcmQga2V5IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgLSBDbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgVXN1YWxseSwgZGlzbWlzcyByZXByZXNlbnQgYSBDYW5jZWwgYnV0dG9uIG9yIGEgWCBidXR0b24uXG4gICAgICovXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKCB0aGlzLmNvbnRlbnRSZWYuaW5zdGFuY2UuYmVmb3JlRGlzbWlzcyAmJlxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZURpc21pc3MoKSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcFJlZi5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY29udGVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxufVxuIl19