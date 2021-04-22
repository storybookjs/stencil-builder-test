import './shims';
import { run } from './runtime';

const socket = new WebSocket('ws://localhost:3333');
socket.addEventListener('open', () => {
  console.log('open');
});
socket.addEventListener('message', e => {
  if (e.data.match('buildResults')) {
    console.log('Finished building');
    run();
  }
});
socket.addEventListener('close', () => {
  console.log('close');
});
