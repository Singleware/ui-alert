/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic alert template.
 */
import * as Alert from '../source';
import * as DOM from '@singleware/jsx';

const alert = (
  <Alert.Template>
    <div slot="icon" />
    <div slot="close" />
    <div slot="message">This is an alert example</div>
  </Alert.Template>
) as Alert.Element;
