import * as Control from '@singleware/ui-control';
/**
 * Alert element.
 */
export declare class Element extends Control.Element {
    /**
     * Element styles.
     */
    private styles;
    /**
     * Current message content.
     */
    private currentMessage;
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
     * Alert layout.
     */
    private alertLayout;
    /**
     * Alert styles.
     */
    private alertStyles;
    /**
     * Hide button, click handler.
     */
    private hideHandler;
    /**
     * Default constructor.
     */
    constructor();
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
