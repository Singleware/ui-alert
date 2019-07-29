/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Switch from '@singleware/ui-switch';
import * as Select from '@singleware/ui-select';
import * as Fieldset from '@singleware/ui-fieldset';
import * as Field from '@singleware/ui-field';
import * as Form from '@singleware/ui-form';

import * as Test from '@module/index';

/**
 * View class.
 */
@Class.Describe()
export class View extends Control.Component<Control.Properties> {
  /**
   * Test content.
   */
  @Class.Private()
  private content = (
    <Test.Component class="test" concealable open onHide={this.onHide.bind(this)}>
      <span slot="icon">👋</span>
      <span slot="hide" />
      <span slot="message">This is an alert example</span>
    </Test.Component>
  ) as Test.Element;

  /**
   * Conceal switch element.
   */
  @Class.Private()
  private concealSwitch = (
    <Switch.Template slot="center" name="concealable" checkedValue={true} uncheckedValue={false} value={true}>
      <span slot="yes">Yes</span>
      <span slot="no">No</span>
    </Switch.Template>
  ) as Switch.Element;

  /**
   * Open switch element.
   */
  @Class.Private()
  private openSwitch = (
    <Switch.Template slot="center" name="open" checkedValue={true} uncheckedValue={false} value={true}>
      <span slot="yes">Yes</span>
      <span slot="no">No</span>
    </Switch.Template>
  ) as Switch.Element;

  /**
   * Test control.
   */
  @Class.Private()
  private control = (
    <Form.Component onSubmit={this.onSubmit.bind(this)}>
      <Fieldset.Component slot="header">
        <h2>Controls</h2>
      </Fieldset.Component>
      <Field.Component slot="content">
        <label slot="label">Icon</label>
        <Select.Component slot="center" name="icon" options={['😍', '😋', '👋']}>
          <button slot="input"></button>
          <div slot="result" />
        </Select.Component>
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Message</label>
        <input slot="center" name="message" value="This is a new alert message" />
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Concealable</label>
        {this.concealSwitch}
      </Field.Component>
      <Field.Component slot="content">
        <label slot="label">Open</label>
        {this.openSwitch}
      </Field.Component>
      <Fieldset.Component slot="footer">
        <button type="submit" class="button">
          Apply
        </button>
      </Fieldset.Component>
    </Form.Component>
  ) as Form.Element;

  /**
   * View element.
   */
  @Class.Private()
  private skeleton = (
    <div class="experiment">
      <div class="content">{this.content}</div>
      <div class="control">{this.control}</div>
    </div>
  ) as HTMLElement;

  /**
   * Hide, event handler.
   */
  @Class.Private()
  private onHide(): void {
    this.openSwitch.value = false;
  }

  /**
   * Submit, event handler.
   */
  @Class.Private()
  private onSubmit(): void {
    const options = this.control.value;
    this.content.open = options.open;
    this.content.concealable = options.concealable;
    this.content.message = options.message;
    this.content.icon = options.icon;
  }

  /**
   * Default constructor.
   * @param properties Default properties.
   */
  constructor(properties: Control.Properties) {
    super(properties);
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
