const input = document.getElementsByTagName('input')[0];
const boxes = document.getElementById('boxes');
const startWidth = 30;
const startHeight = 30;
const growthStep = 10;

document.addEventListener('click', (e) => {
  const action = e.target.getAttribute('data-action');
  if (action) {
    if (action === 'create') {
      input.value > 100 ? limitGuard() : createBoxes(input.value);
    }
    if (action === 'destroy') {
      destroyBoxes();
    }
  }
});

function createBoxes(amount) {
  for (let i=0; i<amount; i++) {
    const div = document.createElement('div');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    div.classList.add('box');
    div.style.width = `${growthStep * i + startWidth}px`;
    div.style.height = `${growthStep * i + startHeight}px`;
    div.style.backgroundColor = `#${randomColor}`;

    boxes.appendChild(div);
  }
}

function limitGuard() {
  input.value = 100;
  createBoxes(100);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}