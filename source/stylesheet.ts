/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Alert stylesheet class.
 */
@Class.Describe()
export class Stylesheet extends OSS.Stylesheet {
  /**
   * Alert styles.
   */
  @Class.Private()
  private alert = this.select(':host>.alert');

  /**
   * Icons styles.
   */
  @Class.Private()
  private icons = this.select(':host>.alert>.icon', ':host>.alert>.hide');

  /**
   * Slotted message styles.
   */
  @Class.Private()
  private slottedMessage = this.select(':host>.alert>.message::slotted(*)');

  /**
   * Slotted hide styles.
   */
  @Class.Private()
  private slottedHide = this.select(':host>.alert>.hide::slotted(*)');

  /**
   * Slotted hide cross styles.
   */
  @Class.Private()
  private slottedHideCross = this.select(':host>.alert>.hide::slotted(*)::before', ':host>.alert>.hide::slotted(*)::after');

  /**
   * Slotted hide cross before styles.
   */
  @Class.Private()
  private slottedHideCrossBefore = this.select(':host>.alert>.hide::slotted(*)::before');

  /**
   * Slotted hide cross after styles.
   */
  @Class.Private()
  private slottedHideCrossAfter = this.select(':host>.alert>.hide::slotted(*)::after');

  /**
   * Hidden styles.
   */
  @Class.Private()
  private hidden = this.select(':host(:not([opened]))>.alert');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.alert.display = 'flex';
    this.alert.flexDirection = 'row';
    this.alert.alignItems = 'center';
    this.icons.flexShrink = 0;
    this.icons.flexGrow = 0;
    this.slottedMessage.width = '100%';
    this.slottedHide.position = 'relative';
    this.slottedHide.padding = '0.5rem';
    this.slottedHide.width = '1rem';
    this.slottedHide.height = '1rem';
    this.slottedHide.cursor = 'pointer';
    this.slottedHideCross.content = "''";
    this.slottedHideCross.position = 'absolute';
    this.slottedHideCross.backgroundColor = 'black';
    this.slottedHideCross.width = '.0625rem';
    this.slottedHideCross.height = '50%';
    this.slottedHideCross.left = '50%';
    this.slottedHideCross.top = '25%';
    this.slottedHideCrossBefore.transform = 'rotate(45deg)';
    this.slottedHideCrossAfter.transform = 'rotate(-45deg)';
    this.hidden.display = 'none';
  }
}
