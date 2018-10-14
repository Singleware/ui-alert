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
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Alert template class.
 */
let Template = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Alert properties.
     * @param children Alert children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Alert states.
         */
        this.states = {
            message: ''
        };
        /**
         * Icon slot.
         */
        this.iconSlot = DOM.create("slot", { name: "icon", class: "icon" });
        /**
         * Message slot.
         */
        this.messageSlot = (DOM.create("slot", { name: "message", class: "message" },
            DOM.create("div", null)));
        /**
         * Hide slot.
         */
        this.hideSlot = DOM.create("slot", { name: "hide", class: "hide" });
        /**
         * Wrapper element.
         */
        this.wrapper = (DOM.create("div", { class: "wrapper" },
            this.iconSlot,
            this.messageSlot,
            this.hideSlot));
        /**
         * Alert styles.
         */
        this.styles = (DOM.create("style", null, `:host > .wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
:host > .wrapper > .icon,
:host > .wrapper > .hide {
  flex-shrink: 0;
  flex-grow: 0;
}
:host > .wrapper > .message > *,
:host > .wrapper > .message::slotted(*) {
  width: 100%;
}
:host > .wrapper > .hide::slotted(*) {
  width: 0.5rem;
  height: 0.5rem;
  cursor: pointer;
  position: relative;
  padding: 0.25rem;
}
:host > .wrapper > .hide::slotted(*)::before,
:host > .wrapper > .hide::slotted(*)::after {
  content: '';
  position: absolute;
  background-color: black;
  height: inherit;
  width: .0625rem;
  left: 50%;
  top: 0rem;
}
:host > .wrapper > .hide::slotted(*)::before {
  transform: rotate(45deg);
}
:host > .wrapper > .hide::slotted(*)::after {
  transform: rotate(-45deg);
}`));
        /**
         * Alert skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        /**
         * Element shadow.
         */
        this.shadow = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles);
        this.bindHandlers();
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Updates the current message into the active message element.
     */
    updateMessage() {
        if (this.activeMessage) {
            DOM.append(DOM.clear(this.activeMessage), this.states.message);
        }
    }
    /**
     * Hide button, click handler.
     */
    hideHandler() {
        this.hide();
        this.skeleton.dispatchEvent(new Event('hide', { bubbles: true, cancelable: false }));
    }
    /**
     * Bind event handlers to update the custom element.
     */
    bindHandlers() {
        this.hideSlot.addEventListener('click', this.hideHandler.bind(this), true);
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        this.bindComponentProperties(this.skeleton, ['message', 'show', 'hide']);
    }
    /**
     * Assign all elements properties.
     */
    assignProperties() {
        this.assignComponentProperties(this.properties, ['message']);
        if (!this.properties.hidden) {
            this.show();
        }
    }
    /**
     * Gets the alert message element.
     */
    get message() {
        return this.states.message;
    }
    /**
     * Sets the alert message element.
     */
    set message(message) {
        this.states.message = message;
        this.updateMessage();
    }
    /**
     * Gets the hidden status.
     */
    get hidden() {
        return this.wrapper.parentElement !== null;
    }
    /**
     * Alert element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Shows the alert.
     */
    show() {
        DOM.append(this.shadow, this.wrapper);
        this.activeMessage = this.messageSlot.assignedNodes({ flatten: true })[0];
        this.updateMessage();
        this.skeleton.dataset.open = 'on';
    }
    /**
     * Hides the alert.
     */
    hide() {
        this.wrapper.remove();
        this.activeMessage = void 0;
        delete this.skeleton.dataset.open;
    }
};
__decorate([
    Class.Private()
], Template.prototype, "activeMessage", void 0);
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "iconSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "messageSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "hideSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "wrapper", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "shadow", void 0);
__decorate([
    Class.Private()
], Template.prototype, "updateMessage", null);
__decorate([
    Class.Private()
], Template.prototype, "hideHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "message", null);
__decorate([
    Class.Public()
], Template.prototype, "hidden", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "show", null);
__decorate([
    Class.Public()
], Template.prototype, "hide", null);
Template = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
