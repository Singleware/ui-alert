/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as OSS from '@singleware/oss';

/**
 * Local alert stylesheet class.
 */
@Class.Describe()
export class Local extends OSS.Stylesheet {
  /**
   * Alert styles.
   */
  @Class.Private()
  private alert = this.select(':host>label');

  /**
   * Icons styles.
   */
  @Class.Private()
  private icons = this.select(':host slot[name="icon"]', ':host slot[name="hide"]');

  /**
   * Conceal hide slot styles.
   */
  @Class.Private()
  private concealHideSlot = this.select(':host(:not([concealable])) slot[name="hide"]');

  /**
   * Slotted icon styles.
   */
  @Class.Private()
  private slottedIcon = this.select(':host slot[name="icon"]::slotted(*)');

  /**
   * Slotted message styles.
   */
  @Class.Private()
  private slottedMessage = this.select(':host slot[name="message"]::slotted(*)');

  /**
   * Slotted empty hide styles.
   */
  @Class.Private()
  private slottedHide = this.select(':host slot[name="hide"]::slotted(*)');

  /**
   * Slotted empty hide styles.
   */
  @Class.Private()
  private slottedEmptyHide = this.select(':host slot[name="hide"]::slotted(*:empty)');

  /**
   * Slotted hide, cross styles.
   */
  @Class.Private()
  private slottedEmptyHideCross = this.select(
    ':host slot[name="hide"]::slotted(*:empty)::before',
    ':host slot[name="hide"]::slotted(*:empty)::after'
  );

  /**
   * Slotted hide, cross before styles.
   */
  @Class.Private()
  private slottedEmptyHideCrossBefore = this.select(':host slot[name="hide"]::slotted(*:empty)::before');

  /**
   * Slotted hide, cross after styles.
   */
  @Class.Private()
  private slottedEmptyHideCrossAfter = this.select(':host slot[name="hide"]::slotted(*:empty)::after');

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.alert.display = 'flex';
    this.alert.width = '100%';
    this.alert.height = '100%';
    this.alert.flexDirection = 'row';
    this.alert.alignItems = 'center';
    this.icons.flexShrink = 0;
    this.icons.flexGrow = 0;
    this.concealHideSlot.display = 'none';
    this.slottedIcon.marginTop = 'var(--swe-alert-icon-margin-top, var(--swe-alert-icon-margin, .5rem))';
    this.slottedIcon.marginRight = 'var(--swe-alert-icon-margin-right, var(--swe-alert-icon-margin, 0rem))';
    this.slottedIcon.marginBottom = 'var(--swe-alert-icon-margin-bottom, var(--swe-alert-icon-margin, .5rem))';
    this.slottedIcon.marginLeft = 'var(--swe-alert-icon-margin-left, var(--swe-alert-icon-margin, .5rem))';
    this.slottedMessage.width = '100%';
    this.slottedMessage.overflow = 'hidden';
    this.slottedMessage.textOverflow = 'ellipsis';
    this.slottedMessage.marginTop = 'var(--swe-alert-message-margin-top, var(--swe-alert-message-margin, .5rem))';
    this.slottedMessage.marginRight = 'var(--swe-alert-message-margin-right, var(--swe-alert-message-margin, .5rem))';
    this.slottedMessage.marginBottom = 'var(--swe-alert-message-margin-bottom, var(--swe-alert-message-margin, .5rem))';
    this.slottedMessage.marginLeft = 'var(--swe-alert-message-margin-left, var(--swe-alert-message-margin, .5rem))';
    this.slottedHide.cursor = 'pointer';
    this.slottedHide.marginTop = 'var(--swe-alert-hide-margin-top, var(--swe-alert-hide-margin, .5rem))';
    this.slottedHide.marginRight = 'var(--swe-alert-hide-margin-right, var(--swe-alert-hide-margin, .5rem))';
    this.slottedHide.marginBottom = 'var(--swe-alert-hide-margin-bottom, var(--swe-alert-hide-margin, .5rem))';
    this.slottedHide.marginLeft = 'var(--swe-alert-hide-margin-left, var(--swe-alert-hide-margin, 0rem))';
    this.slottedEmptyHide.position = 'relative';
    this.slottedEmptyHide.width = '1rem';
    this.slottedEmptyHide.height = '1rem';
    this.slottedEmptyHideCross.content = "''";
    this.slottedEmptyHideCross.position = 'absolute';
    this.slottedEmptyHideCross.backgroundColor = 'var(--swe-alert-hide-cross-color, var(--swe-text-color, hsl(0, 0%, 20%)))';
    this.slottedEmptyHideCross.width = 'var(--swe-alert-hide-cross-size, var(--swe-border-size, .0625rem))';
    this.slottedEmptyHideCross.height = '50%';
    this.slottedEmptyHideCross.left = '50%';
    this.slottedEmptyHideCross.top = '25%';
    this.slottedEmptyHideCrossBefore.transform = 'rotate(45deg)';
    this.slottedEmptyHideCrossAfter.transform = 'rotate(-45deg)';
  }
}
