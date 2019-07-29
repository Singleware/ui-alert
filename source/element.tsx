/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Control from '@singleware/ui-control';
import * as JSX from '@singleware/jsx';

import * as Styles from './styles';

/**
 * Alert element.
 */
@JSX.Describe('swe-alert')
@Class.Describe()
export class Element extends Control.Element {
  /**
   * Global element styles.
   */
  @Class.Private()
  private static globalStyles = <style type="text/css">{new Styles.Global().toString()}</style> as HTMLStyleElement;

  /**
   * Element styles.
   */
  @Class.Private()
  private styles = new Styles.Local();

  /**
   * Current icon content.
   */
  @Class.Private()
  private currentIcon: JSX.Element | undefined;

  /**
   * Current message content.
   */
  @Class.Private()
  private currentMessage: JSX.Element | undefined;

  /**
   * Icon slot.
   */
  @Class.Private()
  private iconSlot = <slot name="icon" /> as HTMLSlotElement;

  /**
   * Message slot.
   */
  @Class.Private()
  private messageSlot = <slot name="message" /> as HTMLSlotElement;

  /**
   * Hide slot.
   */
  @Class.Private()
  private hideSlot = <slot name="hide" onClick={this.hideHandler.bind(this)} /> as HTMLSlotElement;

  /**
   * Alert layout.
   */
  @Class.Private()
  private alertLayout = (
    <label>
      {this.iconSlot}
      {this.messageSlot}
      {this.hideSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Alert styles.
   */
  @Class.Private()
  private alertStyles = <style type="text/css">{this.styles.toString()}</style> as HTMLStyleElement;

  /**
   * Hide button, click handler.
   */
  @Class.Private()
  private hideHandler(): void {
    const event = new Event('hide', { bubbles: true, cancelable: false });
    if (this.dispatchEvent(event)) {
      this.hide();
    }
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    JSX.append(this.attachShadow({ mode: 'closed' }), this.alertStyles, this.alertLayout);
    if (!globalThis.document.head.contains(Element.globalStyles)) {
      JSX.append(globalThis.document.head, Element.globalStyles);
    }
  }

  /**
   * Gets the alert icon.
   */
  @Class.Public()
  public get icon(): JSX.Element | undefined {
    return this.currentIcon;
  }

  /**
   * Sets the alert icon.
   */
  public set icon(icon: JSX.Element | undefined) {
    JSX.append(JSX.clear(this.getRequiredChildElement(this.iconSlot)), (this.currentIcon = icon));
  }

  /**
   * Gets the alert message.
   */
  @Class.Public()
  public get message(): JSX.Element | undefined {
    return this.currentMessage;
  }

  /**
   * Sets the alert message.
   */
  public set message(message: JSX.Element | undefined) {
    JSX.append(JSX.clear(this.getRequiredChildElement(this.messageSlot)), (this.currentMessage = message));
  }

  /**
   * Gets the concealable status.
   */
  @Class.Public()
  public get concealable(): boolean {
    return this.hasAttribute('concealable');
  }

  /**
   * Sets the concealable status.
   */
  public set concealable(state: boolean) {
    this.updatePropertyState('concealable', state);
  }

  /**
   * Gets the open status.
   */
  @Class.Public()
  public get open(): boolean {
    return this.hasAttribute('open');
  }

  /**
   * Sets the open status.
   */
  public set open(state: boolean) {
    this.updatePropertyState('open', state);
  }

  /**
   * Shows the alert.
   */
  @Class.Public()
  public show(): void {
    this.open = true;
  }

  /**
   * Hides the alert.
   */
  @Class.Public()
  public hide(): void {
    this.open = false;
  }
}
