import { Component } from "vue";
export default interface IWindowMaker {
    package: string,
    name: string,
    label: string,
    content: Component,
    title: string
}