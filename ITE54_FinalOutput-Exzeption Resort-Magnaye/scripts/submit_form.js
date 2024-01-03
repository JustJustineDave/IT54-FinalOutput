const btn = document.getElementById('button');

btn.addEventListener('click',() => {
    window.parent.postMessage('close', '*');
});