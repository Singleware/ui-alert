import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Alert template class.
 */
export declare class Component<T extends Properties = Properties> extends Control.Component<T> {
    /**
     * Element instance.
     */
    private skeleton;
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties?: T, children?: any[]);
    /**
     * Gets the element.
     */
    readonly element: Element;
    /**
     * Gets the alert message.
     */
    /**
    * Sets the alert message.
    */
    message: any;
    /**
     * Gets the opened status.
     */
    readonly opened: boolean;
    /**
     * Shows the alert.
     */
    show(): void;
    /**
     * Hides the alert.
     */
    hide(): void;
}
