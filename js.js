const cardArray = [
    {
        name: 'csharp',
        img: 'images/csharp.png'
    },
    {
        name: 'javascript',
        img: 'images/js.png'
    },
    {
        name: 'java',
        img: 'images/java.png'
    },
    {
        name: 'csharp',
        img: 'images/csharp.png'
    },
    {
        name: 'javascript',
        img: 'images/js.png'
    },
    {
        name: 'java',
        img: 'images/java.png'
    }
]

let menu = document.getElementById('grid-container');
let children = menu.children;
console.log(children.length);

for(let i = 0; i < children.length; i++){
    let image = document.createElement('img');
    image.src = cardArray[i].img;
    image.classList.add("width");
    children[i].append(image);
}


