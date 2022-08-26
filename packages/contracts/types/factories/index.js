"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletFactory__factory = exports.Wallet__factory = exports.Tag__factory = exports.Page__factory = exports.Ownable__factory = exports.Log__factory = exports.Initializable__factory = exports.Comment__factory = exports.deployRlogSSol = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.deployRlogSSol = __importStar(require("./deployRlog.s.sol"));
var Comment__factory_1 = require("./Comment__factory");
Object.defineProperty(exports, "Comment__factory", { enumerable: true, get: function () { return Comment__factory_1.Comment__factory; } });
var Initializable__factory_1 = require("./Initializable__factory");
Object.defineProperty(exports, "Initializable__factory", { enumerable: true, get: function () { return Initializable__factory_1.Initializable__factory; } });
var Log__factory_1 = require("./Log__factory");
Object.defineProperty(exports, "Log__factory", { enumerable: true, get: function () { return Log__factory_1.Log__factory; } });
var Ownable__factory_1 = require("./Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", { enumerable: true, get: function () { return Ownable__factory_1.Ownable__factory; } });
var Page__factory_1 = require("./Page__factory");
Object.defineProperty(exports, "Page__factory", { enumerable: true, get: function () { return Page__factory_1.Page__factory; } });
var Tag__factory_1 = require("./Tag__factory");
Object.defineProperty(exports, "Tag__factory", { enumerable: true, get: function () { return Tag__factory_1.Tag__factory; } });
var Wallet__factory_1 = require("./Wallet__factory");
Object.defineProperty(exports, "Wallet__factory", { enumerable: true, get: function () { return Wallet__factory_1.Wallet__factory; } });
var WalletFactory__factory_1 = require("./WalletFactory__factory");
Object.defineProperty(exports, "WalletFactory__factory", { enumerable: true, get: function () { return WalletFactory__factory_1.WalletFactory__factory; } });
