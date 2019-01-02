"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic alert template.
 */
const Alert = require("../source");
const JSX = require("@singleware/jsx");
const alert = (JSX.create(Alert.Component, null,
    JSX.create("div", { slot: "icon" }),
    JSX.create("div", { slot: "close" }),
    JSX.create("div", { slot: "message" }, "This is an alert example")));
// Shows the alert.
alert.show();
// Changes the alert message.
alert.message = 'This is a new message';
// Hides the alert.
alert.hide();
