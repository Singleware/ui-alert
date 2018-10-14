/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';
import { States } from './states';

/**
 * Alert template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Current active message element.
   */
  @Class.Private()
  private activeMessage?: HTMLElement;

  /**
   * Alert states.
   */
  @Class.Private()
  private states = {
    message: ''
  } as States;

  /**
   * Icon slot.
   */
  @Class.Private()
  private iconSlot = <slot name="icon" class="icon" /> as HTMLSlotElement;

  /**
   * Message slot.
   */
  @Class.Private()
  private messageSlot = (
    <slot name="message" class="message">
      <div />
    </slot>
  ) as HTMLSlotElement;

  /**
   * Hide slot.
   */
  @Class.Private()
  private hideSlot = <slot name="hide" class="hide" /> as HTMLSlotElement;

  /**
   * Wrapper element.
   */
  @Class.Private()
  private wrapper = (
    <div class="wrapper">
      {this.iconSlot}
      {this.messageSlot}
      {this.hideSlot}
    </div>
  ) as HTMLDivElement;

  /**
   * Alert styles.
   */
  @Class.Private()
  private styles = (
    <style>
      {`:host > .wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
:host > .wrapper > .icon,
:host > .wrapper > .hide {
  flex-shrink: 0;
  flex-grow: 0;
}
:host > .wrapper > .message > *,
:host > .wrapper > .message::slotted(*) {
  width: 100%;
}
:host > .wrapper > .hide::slotted(*) {
  width: 0.5rem;
  height: 0.5rem;
  cursor: pointer;
  position: relative;
  padding: 0.25rem;
}
:host > .wrapper > .hide::slotted(*)::before,
:host > .wrapper > .hide::slotted(*)::after {
  content: '';
  position: absolute;
  background-color: black;
  height: inherit;
  width: .0625rem;
  left: 50%;
  top: 0rem;
}
:host > .wrapper > .hide::slotted(*)::before {
  transform: rotate(45deg);
}
:host > .wrapper > .hide::slotted(*)::after {
  transform: rotate(-45deg);
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Alert skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Element shadow.
   */
  @Class.Private()
  private shadow = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles);

  /**
   * Updates the current message into the active message element.
   */
  @Class.Private()
  private updateMessage(): void {
    if (this.activeMessage) {
      DOM.append(DOM.clear(this.activeMessage), this.states.message);
    }
  }

  /**
   * Hide button, click handler.
   */
  @Class.Private()
  private hideHandler(): void {
    this.hide();
    this.skeleton.dispatchEvent(new Event('hide', { bubbles: true, cancelable: false }));
  }

  /**
   * Bind event handlers to update the custom element.
   */
  @Class.Private()
  private bindHandlers(): void {
    this.hideSlot.addEventListener('click', this.hideHandler.bind(this), true);
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    this.bindComponentProperties(this.skeleton, ['message', 'show', 'hide']);
  }

  /**
   * Assign all elements properties.
   */
  @Class.Private()
  private assignProperties(): void {
    this.assignComponentProperties(this.properties, ['message']);
    if (!this.properties.hidden) {
      this.show();
    }
  }

  /**
   * Default constructor.
   * @param properties Alert properties.
   * @param children Alert children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindHandlers();
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Gets the alert message element.
   */
  @Class.Public()
  public get message(): JSX.Element {
    return this.states.message;
  }

  /**
   * Sets the alert message element.
   */
  public set message(message: JSX.Element) {
    this.states.message = message;
    this.updateMessage();
  }

  /**
   * Gets the hidden status.
   */
  @Class.Public()
  public get hidden(): boolean {
    return this.wrapper.parentElement !== null;
  }

  /**
   * Alert element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Shows the alert.
   */
  @Class.Public()
  public show(): void {
    DOM.append(this.shadow, this.wrapper);
    this.activeMessage = this.messageSlot.assignedNodes({ flatten: true })[0] as HTMLElement;
    this.updateMessage();
    this.skeleton.dataset.open = 'on';
  }

  /**
   * Hides the alert.
   */
  @Class.Public()
  public hide(): void {
    this.wrapper.remove();
    this.activeMessage = void 0;
    delete this.skeleton.dataset.open;
  }
}
