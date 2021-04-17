import { html } from 'lit-html';
import './my-component';

export default {
  title: 'MyComponent',
  component: 'my-component',
};

export const Default = () => html`<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`;

export const Second = () => {
  return html`<my-component first="hohoho" last="FOOBAR"></my-component>`;
};
