/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Alert properties interface.
 */
export interface Properties {
  /**
   * Alert classes.
   */
  class?: string;
  /**
   * Alert slot.
   */
  slot?: string;
  /**
   * Alert icon.
   */
  icon?: string;
  /**
   * Alert message.
   */
  message?: string;
  /**
   * Determines whether the alert can be concealed or not.
   */
  concealable?: boolean;
  /**
   * Determines whether the alert starts open or not.
   */
  open?: boolean;
  /**
   * Alert children.
   */
  children?: {};
  /**
   * Hide event.
   */
  onHide?: (event: Event) => void;
}
