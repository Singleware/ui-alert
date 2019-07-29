import * as JSX from '@singleware/jsx';
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
     * Gets the alert icon.
     */
    /**
    * Sets the alert icon.
    */
    icon: JSX.Element | undefined;
    /**
     * Gets the alert message.
     */
    /**
    * Sets the alert message.
    */
    message: JSX.Element | undefined;
    /**
     * Gets the concealable status.
     */
    /**
    * Sets the concealable status.
    */
    concealable: boolean;
    /**
     * Gets the open status.
     */
    /**
    * Sets the open status.
    */
    open: boolean;
    /**
     * Shows the alert.
     */
    show(): void;
    /**
     * Hides the alert.
     */
    hide(): void;
}
