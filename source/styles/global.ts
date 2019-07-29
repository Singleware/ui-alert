/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Global alert, stylesheet class.
 */
@Class.Describe()
export class Global extends OSS.Stylesheet {
  /**
   * Opened alert styles.
   */
  @Class.Private()
  private openedAlert = this.select('swe-alert[open]');

  /**
   * Closed alert styles.
   */
  @Class.Private()
  private closedAlert = this.select('swe-alert:not([open])');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.openedAlert.display = 'block';
    this.openedAlert.color = 'var(--swe-alert-text-color, var(--swe-text-color, hsl(0, 0%, 20%)))';
    this.openedAlert.backgroundColor = 'var(--swe-alert-background-color, var(--swe-background-color, hsl(0, 0%, 90%)))';
    this.openedAlert.borderRadius = 'var(--swe-alert-border-radius, var(--swe-border-radius, .25rem))';
    this.openedAlert.borderWidth = 'var(--swe-alert-border-size, var(--swe-border-size, .0625rem))';
    this.openedAlert.borderColor = 'var(--swe-alert-border-color, var(--swe-border-color, hsl(0, 0%, 80%)))';
    this.openedAlert.borderStyle = 'solid';
    this.closedAlert.display = 'none';
  }
}
