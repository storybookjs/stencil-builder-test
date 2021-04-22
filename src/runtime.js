import { configure } from '@storybook/web-components';
import * as DemoMyComponent from './components/my-component/my-component.stories';

export const run = () => configure(() => [DemoMyComponent], module);

run();

