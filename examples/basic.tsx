/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic alert template.
 */
import * as Alert from '../source';
import * as JSX from '@singleware/jsx';

const alert = (
  <Alert.Component>
    <div slot="icon" />
    <div slot="close" />
    <div slot="message">This is an alert example</div>
  </Alert.Component>
) as Alert.Element;

// Shows the alert.
alert.show();

// Changes the alert message.
alert.message = 'This is a new message';

// Hides the alert.
alert.hide();
