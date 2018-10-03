import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Alert template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Alert states.
     */
    private states;
    /**
     * Icon slot.
     */
    private iconSlot;
    /**
     * Message slot.
     */
    private messageSlot;
    /**
     * Hide slot.
     */
    private hideSlot;
    /**
     * Wrapper element.
     */
    private wrapper;
    /**
     * Alert styles.
     */
    private styles;
    /**
     * Alert skeleton.
     */
    private skeleton;
    /**
     * Element shadow.
     */
    private shadow;
    /**
     * Hide button, click handler.
     */
    private hideHandler;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all elements properties.
     */
    private assignProperties;
    /**
     * Default constructor.
     * @param properties Alert properties.
     * @param children Alert children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Gets the alert message element.
     */
    /**
    * Sets the alert message element.
    */
    message: JSX.Element;
    /**
     * Gets the hidden status.
     */
    readonly hidden: boolean;
    /**
     * Alert element.
     */
    readonly element: Element;
    /**
     * Shows the alert.
     */
    show(): void;
    /**
     * Hides the alert.
     */
    hide(): void;
}
