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
var _defaultConfig;
/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
var ModalConfig = (function () {
    //TODO: Change size to defined type
    function ModalConfig(size, isBlocking, keyboard, dialogClass) {
        if (size === void 0) { size = undefined; }
        if (isBlocking === void 0) { isBlocking = null; }
        if (keyboard === void 0) { keyboard = undefined; }
        if (dialogClass === void 0) { dialogClass = undefined; }
        this.size = size;
        this.isBlocking = isBlocking;
        this.keyboard = keyboard;
        this.dialogClass = dialogClass;
    }
    /**
     * Makes a ModalConfig instance valdud.
     * @param config
     * @param defaultConfig A Default config to use as master, optional.
     * @returns {ModalConfig} The same config instance sent.
     */
    ModalConfig.makeValid = function (config, defaultConfig) {
        defaultConfig = (defaultConfig) ? defaultConfig : _defaultConfig;
        if (!config.size)
            config.size = defaultConfig.size;
        if (config.isBlocking !== false)
            config.isBlocking = true;
        if (config.keyboard === null) {
            config.keyboard = [];
        }
        else if (typeof config.keyboard === 'number') {
            config.keyboard = [config.keyboard];
        }
        else if (!Array.isArray(config.keyboard)) {
            config.keyboard = defaultConfig.keyboard;
        }
        if (!config.dialogClass) {
            config.dialogClass = defaultConfig.dialogClass;
        }
        return config;
    };
    /**
     * Returns true if the config instance supports a given key.
     * @param key
     * @returns {boolean}
     */
    ModalConfig.prototype.supportsKey = function (keyCode) {
        return this.keyboard.indexOf(keyCode) > -1;
    };
    ModalConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String, Boolean, Object, String])
    ], ModalConfig);
    return ModalConfig;
}());
exports.ModalConfig = ModalConfig;
_defaultConfig = new ModalConfig('lg', true, [27], 'modal-dialog');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9tb2RlbHMvTW9kYWxDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxJQUFJLGNBQTJCLENBQUM7QUFvQ2hDOzs7R0FHRztBQUVIO0lBOEJJLG1DQUFtQztJQUNuQyxxQkFBWSxJQUFvQyxFQUNwQyxVQUEwQixFQUMxQixRQUE0QyxFQUM1QyxXQUErQjtRQUgvQixvQkFBb0MsR0FBcEMsZ0JBQW9DO1FBQ3BDLDBCQUEwQixHQUExQixpQkFBMEI7UUFDMUIsd0JBQTRDLEdBQTVDLG9CQUE0QztRQUM1QywyQkFBK0IsR0FBL0IsdUJBQStCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHFCQUFTLEdBQWhCLFVBQWlCLE1BQW1CLEVBQUUsYUFBMkI7UUFDN0QsYUFBYSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsYUFBYSxHQUFHLGNBQWMsQ0FBQztRQUVqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixNQUFNLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFFckMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUM7WUFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFTLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBZ0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0MsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ25ELENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUNBQVcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsTUFBTSxDQUFpQixJQUFJLENBQUMsUUFBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBL0VMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFnRmIsa0JBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDO0FBL0VZLG1CQUFXLGNBK0V2QixDQUFBO0FBRUQsY0FBYyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5sZXQgX2RlZmF1bHRDb25maWc6IE1vZGFsQ29uZmlnO1xuXG5leHBvcnQgdHlwZSBCb290c3RyYXBNb2RhbFNpemUgPSAnc20nIHwgJ2xnJztcblxuLy8gVE9ETzogTW92ZSBib290c3RyYXAgc3BlY2lmaWMgc2V0dGluZ3MgKHNpemUpIHRvIGEgZGVyaXZlZCBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgSU1vZGFsQ29uZmlnIHtcbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBtb2RhbC5cbiAgICAgKiAnbGcnIG9yICdzbScgb25seS5cbiAgICAgKiBOT1RFOiBObyB2YWxpZGF0aW9uLlxuICAgICAqIERlZmF1bHQgdG8gJ2xnJ1xuICAgICAqL1xuICAgIHNpemU6IEJvb3RzdHJhcE1vZGFsU2l6ZTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaWJlcyBpZiB0aGUgbW9kYWwgaXMgYmxvY2tpbmcgbW9kYWwuXG4gICAgICogQSBCbG9ja2luZyBtb2RhbCBpcyBub3QgY2xvc2FibGUgYnkgY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93LlxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGlzQmxvY2tpbmc6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBLZXlib2FyZCB2YWx1ZS9zIHRoYXQgY2xvc2UgdGhlIG1vZGFsLlxuICAgICAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgb3IgYW4gYXJyYXkgb2YgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICogQSBtb2RhbCBjbG9zZWQgYnkgYSBrZXlib2FyZCBzdHJva2Ugd2lsbCByZXN1bHQgaW4gYSAncmVqZWN0JyBub3RpZmljYXRpb24gZnJvbSB0aGUgcHJvbWlzZS5cbiAgICAgKiBEZWZhdWx0cyB0byAyNywgc2V0IGBudWxsYCBpbXBsaWNpdGx5IHRvIGRpc2FibGUuXG4gICAgICovXG4gICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBBIENsYXNzIGZvciB0aGUgbW9kYWwgZGlhbG9nIGNvbnRhaW5lci5cbiAgICAgKiBEZWZhdWx0OiBtb2RhbC1kaWFsb2dcbiAgICAgKi9cbiAgICBkaWFsb2dDbGFzczogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBkZWZpbml0aW9uIG9iamVjdC5cbiAqIEluc3RydWN0aW9uIGZvciBob3cgdG8gc2hvdyBhIG1vZGFsLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWcgaW1wbGVtZW50cyBJTW9kYWxDb25maWcge1xuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIG1vZGFsLlxuICAgICAqICdsZycgb3IgJ3NtJyBvbmx5LlxuICAgICAqIE5PVEU6IE5vIHZhbGlkYXRpb24uXG4gICAgICogRGVmYXVsdCB0byAnbGcnXG4gICAgICovXG4gICAgc2l6ZTogQm9vdHN0cmFwTW9kYWxTaXplO1xuXG4gICAgLyoqXG4gICAgICogQSBDbGFzcyBmb3IgdGhlIG1vZGFsIGRpYWxvZyBjb250YWluZXIuXG4gICAgICogRGVmYXVsdDogbW9kYWwtZGlhbG9nXG4gICAgICovXG4gICAgZGlhbG9nQ2xhc3M6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIERlc2NyaWJlcyBpZiB0aGUgbW9kYWwgaXMgYmxvY2tpbmcgbW9kYWwuXG4gICAgICogQSBCbG9ja2luZyBtb2RhbCBpcyBub3QgY2xvc2FibGUgYnkgY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93LlxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGlzQmxvY2tpbmc6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBLZXlib2FyZCB2YWx1ZS9zIHRoYXQgY2xvc2UgdGhlIG1vZGFsLlxuICAgICAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgb3IgYW4gYXJyYXkgb2YgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICogQSBtb2RhbCBjbG9zZWQgYnkgYSBrZXlib2FyZCBzdHJva2Ugd2lsbCByZXN1bHQgaW4gYSAncmVqZWN0JyBub3RpZmljYXRpb24gZnJvbSB0aGUgcHJvbWlzZS5cbiAgICAgKiBEZWZhdWx0cyB0byAyNywgc2V0IGBudWxsYCBpbXBsaWNpdGx5IHRvIGRpc2FibGUuXG4gICAgICovXG4gICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXI7XG5cbiAgICAvL1RPRE86IENoYW5nZSBzaXplIHRvIGRlZmluZWQgdHlwZVxuICAgIGNvbnN0cnVjdG9yKHNpemU6IEJvb3RzdHJhcE1vZGFsU2l6ZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpc0Jsb2NraW5nOiBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogQXJyYXk8bnVtYmVyPiB8IG51bWJlciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkaWFsb2dDbGFzczogc3RyaW5nID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuaXNCbG9ja2luZyA9IGlzQmxvY2tpbmc7XG4gICAgICAgIHRoaXMua2V5Ym9hcmQgPSBrZXlib2FyZDtcbiAgICAgICAgdGhpcy5kaWFsb2dDbGFzcyA9IGRpYWxvZ0NsYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgTW9kYWxDb25maWcgaW5zdGFuY2UgdmFsZHVkLlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcGFyYW0gZGVmYXVsdENvbmZpZyBBIERlZmF1bHQgY29uZmlnIHRvIHVzZSBhcyBtYXN0ZXIsIG9wdGlvbmFsLlxuICAgICAqIEByZXR1cm5zIHtNb2RhbENvbmZpZ30gVGhlIHNhbWUgY29uZmlnIGluc3RhbmNlIHNlbnQuXG4gICAgICovXG4gICAgc3RhdGljIG1ha2VWYWxpZChjb25maWc6IE1vZGFsQ29uZmlnLCBkZWZhdWx0Q29uZmlnPzogTW9kYWxDb25maWcpIHtcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IChkZWZhdWx0Q29uZmlnKSA/IGRlZmF1bHRDb25maWcgOiBfZGVmYXVsdENvbmZpZztcblxuICAgICAgICBpZiAoIWNvbmZpZy5zaXplKVxuICAgICAgICAgICAgY29uZmlnLnNpemUgPSBkZWZhdWx0Q29uZmlnLnNpemU7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5pc0Jsb2NraW5nICE9PSBmYWxzZSlcbiAgICAgICAgICAgIGNvbmZpZy5pc0Jsb2NraW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoY29uZmlnLmtleWJvYXJkID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcua2V5Ym9hcmQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnLmtleWJvYXJkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uZmlnLmtleWJvYXJkID0gWzxudW1iZXI+Y29uZmlnLmtleWJvYXJkXTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSg8QXJyYXk8bnVtYmVyPj5jb25maWcua2V5Ym9hcmQpKSB7XG4gICAgICAgICAgICBjb25maWcua2V5Ym9hcmQgPSBkZWZhdWx0Q29uZmlnLmtleWJvYXJkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25maWcuZGlhbG9nQ2xhc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZy5kaWFsb2dDbGFzcyA9IGRlZmF1bHRDb25maWcuZGlhbG9nQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29uZmlnIGluc3RhbmNlIHN1cHBvcnRzIGEgZ2l2ZW4ga2V5LlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdXBwb3J0c0tleShrZXlDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICg8QXJyYXk8bnVtYmVyPj50aGlzLmtleWJvYXJkKS5pbmRleE9mKGtleUNvZGUpID4gLTE7XG4gICAgfVxufVxuXG5fZGVmYXVsdENvbmZpZyA9IG5ldyBNb2RhbENvbmZpZygnbGcnLCB0cnVlLCBbMjddLCAnbW9kYWwtZGlhbG9nJyk7XG4iXX0=