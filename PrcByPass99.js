const gui = document.createElement('div');
gui.style.position = 'fixed';
gui.style.top = '20px';
gui.style.right = '20px';
gui.style.width = '220px';
gui.style.padding = '15px';
gui.style.backgroundColor = '#444';
gui.style.color = '#fff';
gui.style.border = '2px solid #aaa';
gui.style.zIndex = 9999;
gui.style.cursor = 'move';
gui.style.borderRadius = '8px';
gui.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.6)';

const title = document.createElement('h3');
title.innerText = 'PRCEz999+';
title.style.margin = '0 0 10px 0';
title.style.fontSize = '18px';
title.style.textAlign = 'center';
gui.appendChild(title);

gui.onmousedown = function (e) {
    let offsetX = e.clientX - gui.getBoundingClientRect().left;
    let offsetY = e.clientY - gui.getBoundingClientRect().top;

    function onMouseMove(e) {
        gui.style.left = e.clientX - offsetX + 'px';
        gui.style.top = e.clientY - offsetY + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};

const bypassButton = document.createElement('button');
bypassButton.innerText = 'Bypass Data';
bypassButton.style.margin = '5px 0';
bypassButton.style.backgroundColor = '#007bff';
bypassButton.style.color = '#fff';
bypassButton.style.border = 'none';
bypassButton.style.padding = '8px 12px';
bypassButton.style.borderRadius = '5px';
bypassButton.style.width = '100%';
bypassButton.style.cursor = 'pointer';
bypassButton.onclick = function () {
    var allVueInstances = [];
    document.querySelectorAll('*').forEach(el => {
        if (el.__vue__) {
            allVueInstances.push(el.__vue__);
        }
    });
    allVueInstances.forEach(instance => {
        instance.$data.IsOpenDate = true;
    });
    console.log('Data bypassed for all Vue instances:', allVueInstances);
};

const disableButton = document.createElement('button');
disableButton.innerText = 'Disable Bypass';
disableButton.style.margin = '5px 0';
disableButton.style.backgroundColor = '#dc3545';
disableButton.style.color = '#fff';
disableButton.style.border = 'none';
disableButton.style.padding = '8px 12px';
disableButton.style.borderRadius = '5px';
disableButton.style.width = '100%';
disableButton.style.cursor = 'pointer';
disableButton.onclick = function () {
    document.querySelectorAll('*').forEach(el => {
        if (el.__vue__) {
            el.__vue__.$data.IsOpenDate = false;
        }
    });
    console.log('Bypass disabled for all Vue instances');
};

gui.appendChild(bypassButton);
gui.appendChild(disableButton);
document.body.appendChild(gui);
