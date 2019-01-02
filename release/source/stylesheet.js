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
const OSS = require("@singleware/oss");
/**
 * Alert stylesheet class.
 */
let Stylesheet = class Stylesheet extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Alert styles.
         */
        this.alert = this.select(':host>.alert');
        /**
         * Icons styles.
         */
        this.icons = this.select(':host>.alert>.icon', ':host>.alert>.hide');
        /**
         * Slotted message styles.
         */
        this.slottedMessage = this.select(':host>.alert>.message::slotted(*)');
        /**
         * Slotted hide styles.
         */
        this.slottedHide = this.select(':host>.alert>.hide::slotted(*)');
        /**
         * Slotted hide cross styles.
         */
        this.slottedHideCross = this.select(':host>.alert>.hide::slotted(*)::before', ':host>.alert>.hide::slotted(*)::after');
        /**
         * Slotted hide cross before styles.
         */
        this.slottedHideCrossBefore = this.select(':host>.alert>.hide::slotted(*)::before');
        /**
         * Slotted hide cross after styles.
         */
        this.slottedHideCrossAfter = this.select(':host>.alert>.hide::slotted(*)::after');
        /**
         * Hidden styles.
         */
        this.hidden = this.select(':host(:not([opened]))>.alert');
        this.alert.display = 'flex';
        this.alert.flexDirection = 'row';
        this.alert.alignItems = 'center';
        this.icons.flexShrink = 0;
        this.icons.flexGrow = 0;
        this.slottedMessage.width = '100%';
        this.slottedHide.position = 'relative';
        this.slottedHide.padding = '0.5rem';
        this.slottedHide.width = '1rem';
        this.slottedHide.height = '1rem';
        this.slottedHide.cursor = 'pointer';
        this.slottedHideCross.content = "''";
        this.slottedHideCross.position = 'absolute';
        this.slottedHideCross.backgroundColor = 'black';
        this.slottedHideCross.width = '.0625rem';
        this.slottedHideCross.height = '50%';
        this.slottedHideCross.left = '50%';
        this.slottedHideCross.top = '25%';
        this.slottedHideCrossBefore.transform = 'rotate(45deg)';
        this.slottedHideCrossAfter.transform = 'rotate(-45deg)';
        this.hidden.display = 'none';
    }
};
__decorate([
    Class.Private()
], Stylesheet.prototype, "alert", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "icons", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "slottedMessage", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "slottedHide", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "slottedHideCross", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "slottedHideCrossBefore", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "slottedHideCrossAfter", void 0);
__decorate([
    Class.Private()
], Stylesheet.prototype, "hidden", void 0);
Stylesheet = __decorate([
    Class.Describe()
], Stylesheet);
exports.Stylesheet = Stylesheet;
