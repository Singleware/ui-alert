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
        this.skeleton = (JSX.create("swe-alert", { class: this.properties.class, slot: this.properties.slot, message: this.properties.message }, this.children));
        if (this.properties.onHide) {
            this.skeleton.addEventListener('hide', this.properties.onHide);
        }
        if (this.properties.opened) {
            this.skeleton.show();
        }
    }
    /**
     * Gets the element.
     */
    get element() {
        return this.skeleton;
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
     * Gets the opened status.
     */
    get opened() {
        return this.skeleton.opened;
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
], Component.prototype, "message", null);
__decorate([
    Class.Public()
], Component.prototype, "opened", null);
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
