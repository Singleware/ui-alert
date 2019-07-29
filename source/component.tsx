/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Alert template class.
 */
@Class.Describe()
export class Component<T extends Properties = Properties> extends Control.Component<T> {
  /**
   * Element instance.
   */
  @Class.Private()
  private skeleton = (
    <swe-alert
      class={this.properties.class}
      slot={this.properties.slot}
      icon={this.properties.icon}
      message={this.properties.message}
      concealable={this.properties.concealable}
      open={this.properties.open}
    >
      {this.children}
    </swe-alert>
  ) as Element;

  /**
   * Initializes the component.
   */
  @Class.Private()
  private initialize(): void {
    if (this.properties.onHide) {
      this.skeleton.addEventListener('hide', this.properties.onHide);
    }
  }

  /**
   * Default constructor.
   * @param properties Initial properties.
   * @param children Initial children.
   */
  constructor(properties?: T, children?: any[]) {
    super(properties, children);
    this.initialize();
  }

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Gets the alert icon.
   */
  @Class.Public()
  public get icon(): JSX.Element | undefined {
    return this.skeleton.icon;
  }

  /**
   * Sets the alert icon.
   */
  public set icon(icon: JSX.Element | undefined) {
    this.skeleton.icon = icon;
  }

  /**
   * Gets the alert message.
   */
  @Class.Public()
  public get message(): JSX.Element | undefined {
    return this.skeleton.message;
  }

  /**
   * Sets the alert message.
   */
  public set message(message: JSX.Element | undefined) {
    this.skeleton.message = message;
  }

  /**
   * Gets the concealable status.
   */
  @Class.Public()
  public get concealable(): boolean {
    return this.skeleton.concealable;
  }

  /**
   * Sets the concealable status.
   */
  public set concealable(state: boolean) {
    this.skeleton.concealable = state;
  }

  /**
   * Gets the open status.
   */
  @Class.Public()
  public get open(): boolean {
    return this.skeleton.open;
  }

  /**
   * Sets the open status.
   */
  public set open(state: boolean) {
    this.skeleton.open = state;
  }

  /**
   * Shows the alert.
   */
  @Class.Public()
  public show(): void {
    this.skeleton.show();
  }

  /**
   * Hides the alert.
   */
  @Class.Public()
  public hide(): void {
    this.skeleton.hide();
  }
}
