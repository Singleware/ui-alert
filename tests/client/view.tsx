/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Fieldset from '@singleware/ui-fieldset';
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
    <Test.Component concealable open>
      <span slot="icon">👋</span>
      <span slot="hide" />
      <span slot="message">This is an alert example</span>
    </Test.Component>
  ) as Test.Element;

  /**
   * Test control.
   */
  @Class.Private()
  private control = (
    <Form.Component onSubmit={this.onSubmit.bind(this)}>
      <Fieldset.Component slot="header">
        <h2>Controls</h2>
      </Fieldset.Component>
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
   * Submit, event handler.
   */
  @Class.Private()
  private onSubmit(): void {
    const options = this.control.value;
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
