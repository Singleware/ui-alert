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
 * Local alert stylesheet class.
 */
let Local = class Local extends OSS.Stylesheet {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        /**
         * Alert styles.
         */
        this.alert = this.select(':host>label');
        /**
         * Icons styles.
         */
        this.icons = this.select(':host slot[name="icon"]', ':host slot[name="hide"]');
        /**
         * Conceal hide slot styles.
         */
        this.concealHideSlot = this.select(':host(:not([concealable])) slot[name="hide"]');
        /**
         * Slotted icon styles.
         */
        this.slottedIcon = this.select(':host slot[name="icon"]::slotted(*)');
        /**
         * Slotted message styles.
         */
        this.slottedMessage = this.select(':host slot[name="message"]::slotted(*)');
        /**
         * Slotted hide styles.
         */
        this.slottedHide = this.select(':host slot[name="hide"]::slotted(*)');
        /**
         * Slotted hide, cross styles.
         */
        this.slottedHideCross = this.select(':host slot[name="hide"]::slotted(*)::before', ':host slot[name="hide"]::slotted(*)::after');
        /**
         * Slotted hide, cross before styles.
         */
        this.slottedHideCrossBefore = this.select(':host slot[name="hide"]::slotted(*)::before');
        /**
         * Slotted hide, cross after styles.
         */
        this.slottedHideCrossAfter = this.select(':host slot[name="hide"]::slotted(*)::after');
        this.alert.display = 'flex';
        this.alert.width = '100%';
        this.alert.height = '100%';
        this.alert.flexDirection = 'row';
        this.alert.alignItems = 'center';
        this.icons.flexShrink = 0;
        this.icons.flexGrow = 0;
        this.concealHideSlot.display = 'none';
        this.slottedIcon.marginTop = 'var(--swe-alert-icon-margin-top, var(--swe-alert-icon-margin, .5rem))';
        this.slottedIcon.marginRight = 'var(--swe-alert-icon-margin-right, var(--swe-alert-icon-margin, 0rem))';
        this.slottedIcon.marginBottom = 'var(--swe-alert-icon-margin-bottom, var(--swe-alert-icon-margin, .5rem))';
        this.slottedIcon.marginLeft = 'var(--swe-alert-icon-margin-left, var(--swe-alert-icon-margin, .5rem))';
        this.slottedMessage.width = '100%';
        this.slottedMessage.overflow = 'hidden';
        this.slottedMessage.textOverflow = 'ellipsis';
        this.slottedMessage.marginTop = 'var(--swe-alert-message-margin-top, var(--swe-alert-message-margin, .5rem))';
        this.slottedMessage.marginRight = 'var(--swe-alert-message-margin-right, var(--swe-alert-message-margin, .5rem))';
        this.slottedMessage.marginBottom = 'var(--swe-alert-message-margin-bottom, var(--swe-alert-message-margin, .5rem))';
        this.slottedMessage.marginLeft = 'var(--swe-alert-message-margin-left, var(--swe-alert-message-margin, .5rem))';
        this.slottedHide.position = 'relative';
        this.slottedHide.marginTop = 'var(--swe-alert-hide-margin-top, var(--swe-alert-hide-margin, .5rem))';
        this.slottedHide.marginRight = 'var(--swe-alert-hide-margin-right, var(--swe-alert-hide-margin, .5rem))';
        this.slottedHide.marginBottom = 'var(--swe-alert-hide-margin-bottom, var(--swe-alert-hide-margin, .5rem))';
        this.slottedHide.marginLeft = 'var(--swe-alert-hide-margin-left, var(--swe-alert-hide-margin, 0rem))';
        this.slottedHide.width = '1rem';
        this.slottedHide.height = '1rem';
        this.slottedHide.cursor = 'pointer';
        this.slottedHideCross.content = "''";
        this.slottedHideCross.position = 'absolute';
        this.slottedHideCross.backgroundColor = 'var(--swe-alert-hide-cross-color, var(--swe-text-color, hsl(0, 0%, 20%)))';
        this.slottedHideCross.width = 'var(--swe-alert-hide-cross-size, var(--swe-border-size, .0625rem))';
        this.slottedHideCross.height = '50%';
        this.slottedHideCross.left = '50%';
        this.slottedHideCross.top = '25%';
        this.slottedHideCrossBefore.transform = 'rotate(45deg)';
        this.slottedHideCrossAfter.transform = 'rotate(-45deg)';
    }
};
__decorate([
    Class.Private()
], Local.prototype, "alert", void 0);
__decorate([
    Class.Private()
], Local.prototype, "icons", void 0);
__decorate([
    Class.Private()
], Local.prototype, "concealHideSlot", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedIcon", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedMessage", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedHide", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedHideCross", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedHideCrossBefore", void 0);
__decorate([
    Class.Private()
], Local.prototype, "slottedHideCrossAfter", void 0);
Local = __decorate([
    Class.Describe()
], Local);
exports.Local = Local;
