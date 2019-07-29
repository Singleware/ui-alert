import * as Control from '@singleware/ui-control';
import * as JSX from '@singleware/jsx';
/**
 * Alert element.
 */
export declare class Element extends Control.Element {
    /**
     * Global element styles.
     */
    private static globalStyles;
    /**
     * Element styles.
     */
    private styles;
    /**
     * Current icon content.
     */
    private currentIcon;
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
