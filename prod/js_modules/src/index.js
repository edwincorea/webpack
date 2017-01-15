import 'es6-promise/auto';

const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = () => {
    System.import("./image_viewer").then(module => {
        module.default();
    });
};

document.body.appendChild(button);