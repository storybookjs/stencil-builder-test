import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'another-component',
  shadow: true,
})
export class AnotherComponent {
  @Prop() foo: string;

  render() {
    return <div>{this.foo}</div>;
  }
}
