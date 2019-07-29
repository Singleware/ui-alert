"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Alert template class.
 */
let Component = class Component extends Control.Component {
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Element instance.
         */
        this.skeleton = (JSX.create("swe-alert", { class: this.properties.class, slot: this.properties.slot, icon: this.properties.icon, message: this.properties.message, concealable: this.properties.concealable, open: this.properties.open }, this.children));
        if (this.properties.onHide) {
            this.skeleton.addEventListener('hide', this.properties.onHide);
        }
    }
    /**
     * Gets the element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Gets the alert icon.
     */
    get icon() {
        return this.skeleton.icon;
    }
    /**
     * Sets the alert icon.
     */
    set icon(icon) {
        this.skeleton.icon = icon;
    }
    /**
     * Gets the alert message.
     */
    get message() {
        return this.skeleton.message;
    }
    /**
     * Sets the alert message.
     */
    set message(message) {
        this.skeleton.message = message;
    }
    /**
     * Gets the concealable status.
     */
    get concealable() {
        return this.skeleton.concealable;
    }
    /**
     * Sets the concealable status.
     */
    set concealable(state) {
        this.skeleton.concealable = state;
    }
    /**
     * Gets the open status.
     */
    get open() {
        return this.skeleton.open;
    }
    /**
     * Sets the open status.
     */
    set open(state) {
        this.skeleton.open = state;
    }
    /**
     * Shows the alert.
     */
    show() {
        this.skeleton.show();
    }
    /**
     * Hides the alert.
     */
    hide() {
        this.skeleton.hide();
    }
};
__decorate([
    Class.Private()
], Component.prototype, "skeleton", void 0);
__decorate([
    Class.Public()
], Component.prototype, "element", null);
__decorate([
    Class.Public()
], Component.prototype, "icon", null);
__decorate([
    Class.Public()
], Component.prototype, "message", null);
__decorate([
    Class.Public()
], Component.prototype, "concealable", null);
__decorate([
    Class.Public()
], Component.prototype, "open", null);
__decorate([
    Class.Public()
], Component.prototype, "show", null);
__decorate([
    Class.Public()
], Component.prototype, "hide", null);
Component = __decorate([
    Class.Describe()
], Component);
exports.Component = Component;
