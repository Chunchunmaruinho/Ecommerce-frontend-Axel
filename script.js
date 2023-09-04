const PRODUCTO_DESTACADO = {
    imgProducto:  '1',
    cardTitle: 'Pala' ,
    identifier: '111',
    prices: {    
        oldPrice: '$10',
        newPrice: '$10'
    }
}


let productos = [
    PRODUCTO_DESTACADO
]


function createCard() {
    const card = document.createElement('div');
    card.className = 'card'; 


    const cardBase = document.createElement('div');
    cardBase.className = 'card-base';
    card.appendChild(cardBase);
   

    const imgProducto = document.createElement('img');
    imgProducto.className =  'imgProducto';  
    imgProducto.src = 'images/productos/DestacadosDesktop.png'; 
    imgProducto.alt = 'Description of the image';  
    

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Lorem Ipsum Dolor Sit asd Consectetur';
   

    const identifier = document.createElement('p');
    identifier.className = 'identifier';
    identifier.textContent = '1231234'
    

    const oldPrice = document.createElement('p');
    oldPrice.className = 'old-price';
    oldPrice.textContent = '$2';

    const cardOrder = document.createElement('div');
    cardOrder.className = 'card-order';


    cardBase.appendChild(imgProducto);
    cardBase.appendChild(cardTitle);
    cardBase.appendChild(identifier);
    cardBase.appendChild(oldPrice);
    cardBase.appendChild(cardOrder);


    const cardButtom = document.createElement('div');
    cardButtom.className = 'card-buttom';

    
    const cardPrice = document.createElement('div');
    cardPrice.className = 'card-price';


    cardOrder.appendChild(cardButtom);
    cardOrder.appendChild(cardPrice);


    const imgBag = document.createElement('img');
    imgBag.src = 'images/productos/shopping-bagDesktop.png';
    imgBag.alt = 'bag';

    const imgPlus = document.createElement('img');
    imgPlus.src = 'images/productos/plusDesktop.png';
    imgPlus.alt = 'plus';


    const newPrice = document.createElement('p');
    newPrice.className = 'new-price';
    newPrice.textContent = '$3924';


    cardButtom.appendChild(imgBag);
    cardButtom.appendChild(imgPlus);
    cardPrice.appendChild(newPrice);


    return card;
}


let cardContainer;

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    cardContainer = document.getElementById('products');

    const card = createCard(PRODUCTO_DESTACADO);
    cardContainer.appendChild(card);
});