"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Element_1;
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";
/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Control = require("@singleware/ui-control");
const JSX = require("@singleware/jsx");
const Styles = require("./styles");
/**
 * Alert element.
 */
let Element = Element_1 = class Element extends Control.Element {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Element styles.
         */
        this.styles = new Styles.Local();
        /**
         * Icon slot.
         */
        this.iconSlot = JSX.create("slot", { name: "icon" });
        /**
         * Message slot.
         */
        this.messageSlot = JSX.create("slot", { name: "message" });
        /**
         * Hide slot.
         */
        this.hideSlot = JSX.create("slot", { name: "hide", onClick: this.hideHandler.bind(this) });
        /**
         * Alert layout.
         */
        this.alertLayout = (JSX.create("label", null,
            this.iconSlot,
            this.messageSlot,
            this.hideSlot));
        /**
         * Alert styles.
         */
        this.alertStyles = JSX.create("style", { type: "text/css" }, this.styles.toString());
        Element_1.globalInitialization();
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
     * Initializes all global settings.
     */
    static globalInitialization() {
        if (!globalThis.document.head.contains(Element_1.globalStyles)) {
            JSX.append(globalThis.document.head, Element_1.globalStyles);
        }
    }
    /**
     * Gets the alert icon.
     */
    get icon() {
        return this.currentIcon;
    }
    /**
     * Sets the alert icon.
     */
    set icon(icon) {
        JSX.append(JSX.clear(this.getRequiredChildElement(this.iconSlot)), (this.currentIcon = icon));
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
     * Gets the concealable status.
     */
    get concealable() {
        return this.hasAttribute('concealable');
    }
    /**
     * Sets the concealable status.
     */
    set concealable(state) {
        this.updatePropertyState('concealable', state);
    }
    /**
     * Gets the open status.
     */
    get open() {
        return this.hasAttribute('open');
    }
    /**
     * Sets the open status.
     */
    set open(state) {
        this.updatePropertyState('open', state);
    }
    /**
     * Shows the alert.
     */
    show() {
        this.open = true;
    }
    /**
     * Hides the alert.
     */
    hide() {
        this.open = false;
    }
};
/**
 * Global element styles.
 */
Element.globalStyles = JSX.create("style", { type: "text/css" }, new Styles.Global().toString());
__decorate([
    Class.Private()
], Element.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Element.prototype, "currentIcon", void 0);
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
], Element.prototype, "icon", null);
__decorate([
    Class.Public()
], Element.prototype, "message", null);
__decorate([
    Class.Public()
], Element.prototype, "concealable", null);
__decorate([
    Class.Public()
], Element.prototype, "open", null);
__decorate([
    Class.Public()
], Element.prototype, "show", null);
__decorate([
    Class.Public()
], Element.prototype, "hide", null);
__decorate([
    Class.Private()
], Element, "globalStyles", void 0);
__decorate([
    Class.Private()
], Element, "globalInitialization", null);
Element = Element_1 = __decorate([
    JSX.Describe('swe-alert'),
    Class.Describe()
], Element);
exports.Element = Element;
