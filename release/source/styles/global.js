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
const OSS = require("@singleware/oss");
/**
 * Global alert, stylesheet class.
 */
let Global = class Global extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Opened alert styles.
         */
        this.openedAlert = this.select('swe-alert[open]');
        /**
         * Closed alert styles.
         */
        this.closedAlert = this.select('swe-alert:not([open])');
        this.openedAlert.display = 'block';
        this.openedAlert.color = 'var(--swe-alert-text-color, var(--swe-text-color, hsl(0, 0%, 20%)))';
        this.openedAlert.backgroundColor = 'var(--swe-alert-background-color, var(--swe-background-color, hsl(0, 0%, 90%)))';
        this.openedAlert.borderRadius = 'var(--swe-alert-border-radius, var(--swe-border-radius, .25rem))';
        this.openedAlert.borderWidth = 'var(--swe-alert-border-size, var(--swe-border-size, .0625rem))';
        this.openedAlert.borderColor = 'var(--swe-alert-border-color, var(--swe-border-color, hsl(0, 0%, 80%)))';
        this.openedAlert.borderStyle = 'solid';
        this.closedAlert.display = 'none';
    }
};
__decorate([
    Class.Private()
], Global.prototype, "openedAlert", void 0);
__decorate([
    Class.Private()
], Global.prototype, "closedAlert", void 0);
Global = __decorate([
    Class.Describe()
], Global);
exports.Global = Global;
