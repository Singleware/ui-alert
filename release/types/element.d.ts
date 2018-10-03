/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Alert element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Alert message.
   */
  message: string;
  /**
   * Determines whether the alert is hidden or not.
   */
  readonly hidden: boolean;
  /**
   * Show the alert.
   */
  show(): void;
  /**
   * Hides the alert.
   */
  hide(): void;
}
