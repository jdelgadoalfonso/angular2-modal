import { DynamicComponentLoader, ViewContainerRef, AfterViewInit } from 'angular2/core';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
import { Modal } from '../providers/Modal';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class BootstrapModalContainer implements AfterViewInit {
    private modal;
    private componentLoader;
    dialogInstance: ModalDialogInstance;
    position: string;
    private _viewRef;
    constructor(dialogInstance: ModalDialogInstance, modal: Modal, componentLoader: DynamicComponentLoader);
    viewRef: ViewContainerRef;
    onContainerClick($event: any): void;
    onClick(): void;
    documentKeypress(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
}
