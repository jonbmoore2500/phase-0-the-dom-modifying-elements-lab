// Write your code here!

const mainRemoved = document.getElementById('main');
mainRemoved.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = '<p>YOUR-NAME is the champion</p>';

document.body.append(newHeader);
