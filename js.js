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

let cardsShuffled = 0;
let cardsShuffledArray = [];

let menu = document.getElementById('grid-container');
let children = menu.children;
console.log(children.length);

for(let i = 0; i < children.length; i++){
    let image = document.createElement('img');
    image.src = cardArray[i].img;
    image.classList.add("width");
    children[i].addEventListener("click", function(){flipCard(image, i)})
    children[i].appendChild(image);
}

function flipCard(image, i){
    cardsShuffled += 1;
    cardsShuffledArray.push(image);
    console.log(cardsShuffledArray);
}


