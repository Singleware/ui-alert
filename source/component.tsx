/**
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
    <swe-alert class={this.properties.class} slot={this.properties.slot} message={this.properties.message}>
      {this.children}
    </swe-alert>
  ) as Element;

  /**
   * Default constructor.
   * @param properties Initial properties.
   * @param children Initial children.
   */
  constructor(properties?: T, children?: any[]) {
    super(properties, children);
    if (this.properties.onHide) {
      this.skeleton.addEventListener('hide', this.properties.onHide);
    }
    if (this.properties.opened) {
      this.skeleton.show();
    }
  }

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Gets the alert message.
   */
  @Class.Public()
  public get message(): any {
    return this.skeleton.message;
  }

  /**
   * Sets the alert message.
   */
  public set message(message: any) {
    this.skeleton.message = message;
  }

  /**
   * Gets the opened status.
   */
  @Class.Public()
  public get opened(): boolean {
    return this.skeleton.opened;
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
