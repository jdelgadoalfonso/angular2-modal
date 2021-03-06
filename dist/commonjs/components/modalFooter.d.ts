import { EventEmitter } from 'angular2/core';
import { ModalButtonConfig } from '../modals/MessageModal';
export interface FooterButtonClickEvent {
    btn: ModalButtonConfig;
    $event: MouseEvent;
}
/**
 * Represents the modal footer for storing buttons.
 */
export declare class ModalFooter {
    /**
     * Class name used for the footer container.
     */
    footerClass: string;
    /**
     * A collection of button configurations, each configuration is a button to display.
     */
    buttons: ModalButtonConfig[];
    /**
     * Emitted when a button was clicked
     * @type {EventEmitter<FooterButtonClickEvent>}
     */
    onButtonClick: EventEmitter<FooterButtonClickEvent>;
    constructor();
    onClick(btn: any, $event: MouseEvent): void;
}
