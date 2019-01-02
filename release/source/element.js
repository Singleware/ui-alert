"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Control = require("@singleware/ui-control");
const JSX = require("@singleware/jsx");
const stylesheet_1 = require("./stylesheet");
/**
 * Alert element.
 */
let Element = class Element extends Control.Element {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Element styles.
         */
        this.styles = new stylesheet_1.Stylesheet();
        /**
         * Icon slot.
         */
        this.iconSlot = JSX.create("slot", { name: "icon", class: "icon" });
        /**
         * Message slot.
         */
        this.messageSlot = JSX.create("slot", { name: "message", class: "message" });
        /**
         * Hide slot.
         */
        this.hideSlot = JSX.create("slot", { name: "hide", class: "hide", onClick: this.hideHandler.bind(this) });
        /**
         * Alert layout.
         */
        this.alertLayout = (JSX.create("div", { class: "alert" },
            this.iconSlot,
            this.messageSlot,
            this.hideSlot));
        /**
         * Alert styles.
         */
        this.alertStyles = JSX.create("style", { type: "text/css" }, this.styles.toString());
        JSX.append(this.attachShadow({ mode: 'closed' }), this.alertStyles, this.alertLayout);
    }
    /**
     * Hide button, click handler.
     */
    hideHandler() {
        const event = new Event('hide', { bubbles: true, cancelable: false });
        if (this.dispatchEvent(event)) {
            this.hide();
        }
    }
    /**
     * Gets the alert message.
     */
    get message() {
        return this.currentMessage;
    }
    /**
     * Sets the alert message.
     */
    set message(message) {
        JSX.append(JSX.clear(this.getRequiredChildElement(this.messageSlot)), (this.currentMessage = message));
    }
    /**
     * Gets the opened status.
     */
    get opened() {
        return this.hasAttribute('opened');
    }
    /**
     * Shows the alert.
     */
    show() {
        this.updatePropertyState('opened', true);
    }
    /**
     * Hides the alert.
     */
    hide() {
        this.updatePropertyState('opened', false);
    }
};
__decorate([
    Class.Private()
], Element.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "currentMessage", void 0);
__decorate([
    Class.Private()
], Element.prototype, "iconSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "messageSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "hideSlot", void 0);
__decorate([
    Class.Private()
], Element.prototype, "alertLayout", void 0);
__decorate([
    Class.Private()
], Element.prototype, "alertStyles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "hideHandler", null);
__decorate([
    Class.Public()
], Element.prototype, "message", null);
__decorate([
    Class.Public()
], Element.prototype, "opened", null);
__decorate([
    Class.Public()
], Element.prototype, "show", null);
__decorate([
    Class.Public()
], Element.prototype, "hide", null);
Element = __decorate([
    JSX.Describe('swe-alert'),
    Class.Describe()
], Element);
exports.Element = Element;
