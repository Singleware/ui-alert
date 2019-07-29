"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
const Switch = require("@singleware/ui-switch");
const Select = require("@singleware/ui-select");
const Fieldset = require("@singleware/ui-fieldset");
const Field = require("@singleware/ui-field");
const Form = require("@singleware/ui-form");
const Test = require("@module/index");
/**
 * View class.
 */
let View = class View extends Control.Component {
    /**
     * Default constructor.
     * @param properties Default properties.
     */
    constructor(properties) {
        super(properties);
        /**
         * Test content.
         */
        this.content = (JSX.create(Test.Component, { class: "test", concealable: true, open: true, onHide: this.onHide.bind(this) },
            JSX.create("span", { slot: "icon" }, "\uD83D\uDC4B"),
            JSX.create("span", { slot: "hide" }),
            JSX.create("span", { slot: "message" }, "This is an alert example")));
        /**
         * Conceal switch element.
         */
        this.concealSwitch = (JSX.create(Switch.Template, { slot: "center", name: "concealable", checkedValue: true, uncheckedValue: false, value: true },
            JSX.create("span", { slot: "yes" }, "Yes"),
            JSX.create("span", { slot: "no" }, "No")));
        /**
         * Open switch element.
         */
        this.openSwitch = (JSX.create(Switch.Template, { slot: "center", name: "open", checkedValue: true, uncheckedValue: false, value: true },
            JSX.create("span", { slot: "yes" }, "Yes"),
            JSX.create("span", { slot: "no" }, "No")));
        /**
         * Test control.
         */
        this.control = (JSX.create(Form.Component, { onSubmit: this.onSubmit.bind(this) },
            JSX.create(Fieldset.Component, { slot: "header" },
                JSX.create("h2", null, "Controls")),
            JSX.create(Field.Component, { slot: "content" },
                JSX.create("label", { slot: "label" }, "Icon"),
                JSX.create(Select.Component, { slot: "center", name: "icon", options: ['😍', '😋', '👋'] },
                    JSX.create("button", { slot: "input" }),
                    JSX.create("div", { slot: "result" }))),
            JSX.create(Field.Component, { slot: "content" },
                JSX.create("label", { slot: "label" }, "Message"),
                JSX.create("input", { slot: "center", name: "message", value: "This is a new alert message" })),
            JSX.create(Field.Component, { slot: "content" },
                JSX.create("label", { slot: "label" }, "Concealable"),
                this.concealSwitch),
            JSX.create(Field.Component, { slot: "content" },
                JSX.create("label", { slot: "label" }, "Open"),
                this.openSwitch),
            JSX.create(Fieldset.Component, { slot: "footer" },
                JSX.create("button", { type: "submit", class: "button" }, "Apply"))));
        /**
         * View element.
         */
        this.skeleton = (JSX.create("div", { class: "experiment" },
            JSX.create("div", { class: "content" }, this.content),
            JSX.create("div", { class: "control" }, this.control)));
    }
    /**
     * Hide, event handler.
     */
    onHide() {
        this.openSwitch.value = false;
    }
    /**
     * Submit, event handler.
     */
    onSubmit() {
        const options = this.control.value;
        this.content.open = options.open;
        this.content.concealable = options.concealable;
        this.content.message = options.message;
        this.content.icon = options.icon;
    }
    /**
     * View element.
     */
    get element() {
        return this.skeleton;
    }
};
__decorate([
    Class.Private()
], View.prototype, "content", void 0);
__decorate([
    Class.Private()
], View.prototype, "concealSwitch", void 0);
__decorate([
    Class.Private()
], View.prototype, "openSwitch", void 0);
__decorate([
    Class.Private()
], View.prototype, "control", void 0);
__decorate([
    Class.Private()
], View.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], View.prototype, "onHide", null);
__decorate([
    Class.Private()
], View.prototype, "onSubmit", null);
__decorate([
    Class.Public()
], View.prototype, "element", null);
View = __decorate([
    Class.Describe()
], View);
exports.View = View;
