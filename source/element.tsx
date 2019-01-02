/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Control from '@singleware/ui-control';
import * as JSX from '@singleware/jsx';

import { Stylesheet } from './stylesheet';

/**
 * Alert element.
 */
@JSX.Describe('swe-alert')
@Class.Describe()
export class Element extends Control.Element {
  /**
   * Element styles.
   */
  @Class.Private()
  private styles = new Stylesheet();

  /**
   * Current message content.
   */
  @Class.Private()
  private currentMessage: any;

  /**
   * Icon slot.
   */
  @Class.Private()
  private iconSlot = <slot name="icon" class="icon" /> as HTMLSlotElement;

  /**
   * Message slot.
   */
  @Class.Private()
  private messageSlot = <slot name="message" class="message" /> as HTMLSlotElement;

  /**
   * Hide slot.
   */
  @Class.Private()
  private hideSlot = <slot name="hide" class="hide" onClick={this.hideHandler.bind(this)} /> as HTMLSlotElement;

  /**
   * Alert layout.
   */
  @Class.Private()
  private alertLayout = (
    <div class="alert">
      {this.iconSlot}
      {this.messageSlot}
      {this.hideSlot}
    </div>
  ) as HTMLDivElement;

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
  }

  /**
   * Gets the alert message.
   */
  @Class.Public()
  public get message(): any {
    return this.currentMessage;
  }

  /**
   * Sets the alert message.
   */
  public set message(message: any) {
    JSX.append(JSX.clear(this.getRequiredChildElement(this.messageSlot)), (this.currentMessage = message));
  }

  /**
   * Gets the opened status.
   */
  @Class.Public()
  public get opened(): boolean {
    return this.hasAttribute('opened');
  }

  /**
   * Shows the alert.
   */
  @Class.Public()
  public show(): void {
    this.updatePropertyState('opened', true);
  }

  /**
   * Hides the alert.
   */
  @Class.Public()
  public hide(): void {
    this.updatePropertyState('opened', false);
  }
}
