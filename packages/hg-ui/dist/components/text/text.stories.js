"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = void 0;
const text_1 = __importDefault(require("./text"));
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
exports.default = {
    title: "Example/Text",
    component: text_1.default,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: { control: "color" },
    },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
exports.Primary = {
    args: {
        color: "red",
    },
};
exports.Secondary = {
    args: {
        color: "blue",
    },
};
