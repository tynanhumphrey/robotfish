import messages from './data/messages';
import p5 from 'p5';

import sketch from './sketch';
var fish = new p5(sketch);

function onReceiveMessage(snap) {
    const id = snap.key;
    const message = snap.val();
    const body = message.body.trim();

    console.log('Received New Message:', message);

    // If not up, down, left, or right, return
    if (!/^(up|down|left|right)$/i.test(body)) {
        return;
    }

    // Do your thing
    switch (body.toUpperCase()) {
        case 'UP':
            fish.change('W');
            console.log('go up');
            break;
        case 'DOWN':
            fish.change('S');
            console.log('go down');
            break;
        case 'LEFT':
            fish.change('A');
            console.log('go left');
            break;
        case 'RIGHT':
            fish.change('D');
            console.log('go right');
            break;
    }
}


// Query all incoming messages
messages.on('child_added', onReceiveMessage);
