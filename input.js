let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

//Key codes for simulating key events
var LEFT_KEYCODE = 37; //Left cursor key
var RIGHT_KEYCODE = 39; //Right cursor key

var LEFT_KEY_PRESSED = false;
var RIGHT_KEY_PRESSED = false;
const top = document.querySelector('.top');
const right = document.querySelector('.right');
const bottom = document.querySelector('.bottom');
const left = document.querySelector('.left');

top.addEventListener('click', e => {
  // simKeyUp(e, LEFT_KEYCODE);
  if (lastInputDirection.y !== 0) return;
  inputDirection = { x: 0, y: -1 }
});

right.addEventListener('click', e => {
  // simKeyUp(e, LEFT_KEYCODE);
  if (lastInputDirection.x !== 0) return
  inputDirection = { x: 1, y: 0 }
});

bottom.addEventListener('click', e => {
  // simKeyUp(e, LEFT_KEYCODE);
  if (lastInputDirection.y !== 0) return
  inputDirection = { x: 0, y: 1 }
});

left.addEventListener('click', e => {
  // simKeyUp(e, LEFT_KEYCODE);
  if (lastInputDirection.x !== 0) return
  inputDirection = { x: -1, y: 0 }
});

//Simulate a key up event
function simKeyUp(e, keyCode) {
    //Suppress the default action
    e.preventDefault();

    //Send the event as a key up event
    queueKeyboardEvent('KeyUp', keyCode);
}

//Simulate a key down event
function simKeyDown(e, keyCode) {
    //Suppress the default action
    e.preventDefault();

    //Send the event as a key down event
    queueKeyboardEvent('KeyDown', keyCode);
}

function queueKeyboardEvent(eventType, keyCode) {
  if (eventType === 'KeyUp') {
    if (keyCode == LEFT_KEYCODE) {
      LEFT_KEY_PRESSED = true
    }
    
    if (keyCode == RIGHT_KEYCODE) {
      RIGHT_KEY_PRESSED = true
    }
  }

  if (eventType === 'KeyDown') {
    if (keyCode == LEFT_KEYCODE) {
      LEFT_KEY_PRESSED = false
    }
    
    if (keyCode == RIGHT_KEYCODE) {
      RIGHT_KEY_PRESSED = false
    }
  }

}

window.addEventListener('keyup', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft' || LEFT_KEY_PRESSED:
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}