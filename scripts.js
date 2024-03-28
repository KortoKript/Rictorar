const text = document.getElementById('text');
const name = document.getElementById('name');

function Send(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://catfact.ninja/fact', true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            name.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}