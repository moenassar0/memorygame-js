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
    image.classList.add("width", "hidden");
    children[i].addEventListener("click", function(){flipCard(image, i)})
    children[i].appendChild(image);
}

function flipCard(image, i){

    //Increment and save the images flipped
    cardsShuffled += 1;
    cardsShuffledArray.push(i);
    
    //Remove hidden property on image
    image.classList.toggle("hidden");

    if(cardsShuffled >= 2){
        //check if match
        if(cardArray[cardsShuffledArray[0]].name == cardArray[cardsShuffledArray[1]].name){
            console.log("matchfound");
        }

        //Reinitializ Game
        cardsShuffled = 0;
        cardsShuffledArray = [];
        setTimeout(hideItems, 500);
    }
}

function hideItems(){
    for(let i = 0; i < children.length; i++){
        children[i].firstChild.classList.add("hidden");
    }
}


