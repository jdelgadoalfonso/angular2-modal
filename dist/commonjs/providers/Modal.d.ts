import { DynamicComponentLoader, ViewContainerRef, ResolvedReflectiveProvider } from 'angular2/core';
import { ModalConfig } from '../models/ModalConfig';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
import { OneButtonPreset, TwoButtonPreset } from '../presets';
export declare class Modal {
    private componentLoader;
    private config;
    constructor(componentLoader: DynamicComponentLoader, defaultConfig: ModalConfig);
    alert(): OneButtonPreset;
    prompt(): OneButtonPreset;
    confirm(): TwoButtonPreset;
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param viewRef The element to block using the modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    open(componentType: FunctionConstructor, viewRef: ViewContainerRef, bindings: ResolvedReflectiveProvider[], config?: ModalConfig): Promise<ModalDialogInstance>;
    stackPosition(mInstande: ModalDialogInstance): number;
    stackLength: number;
    /**
     * Creates backdrop element.
     * @param {ViewContainerRef} The element to block using the modal.
     * @param {ResolvedReflectiveProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @returns {Promise<ComponentRef>}
     */
    private createBackdrop(viewRef, bindings);
}
