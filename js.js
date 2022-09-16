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
let cardsShutffledImage = [];
let wonCards = [];

let menu = document.getElementById('grid-container');
let children = menu.children;
console.log(children.length);

for(let i = 0; i < cardArray.length; i++){
    let image = document.createElement('img');
    image.src = cardArray[i].img;
    image.classList.add("width", "hidden");
    children[i].setAttribute("id", i);
    children[i].addEventListener("click", flipCard)
    children[i].appendChild(image);
}

function flipCard(){
    let i = this.getAttribute("id");
    let image = this.firstChild;
    console.log()
    //Increment and save the images flipped
    cardsShuffled += 1;
    cardsShuffledArray.push(i);
    cardsShutffledImage.push(image);
    
    //Remove hidden property on image
    image.classList.toggle("hidden");

    if(cardsShuffled >= 2){
        setTimeout(checkMatch, 500);
        //check if match


    }
}

function checkMatch(){
    let fImgIndex = cardsShuffledArray[0];
    let sImgIndex = cardsShuffledArray[1];
    wonCards.push(fImgIndex);
    wonCards.push(sImgIndex);
    console.log(fImgIndex, sImgIndex);
    if(cardArray[fImgIndex].name == cardArray[sImgIndex].name){
        cardsShutffledImage[0].setAttribute("src", "./images/check.png");
        cardsShutffledImage[1].setAttribute("src", "./images/check.png");
        children[sImgIndex].removeEventListener("click", flipCard);
        children[fImgIndex].removeEventListener("click", flipCard);
    }
    else{
        cardsShutffledImage[0].classList.add("hidden");
        cardsShutffledImage[1].classList.add("hidden");
    }
    //Reinitializ Game
    cardsShuffled = 0;
    cardsShuffledArray = [];
    cardsShutffledImage = [];
}



