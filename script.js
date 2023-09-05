function createCard(PRODUCTO_DESTACADO) {
    const {
    imgProducto =  'images/productos/DestacadosDesktop.png',
    desProducto ='Alt producto' ,
    cardTitle = 'Nombre del producto' ,
    identifier = 'identificador',    
    oldPrice = '$Precio Antiguo',
    newPrice = '$Precio Actual'   
    } = PRODUCTO_DESTACADO;

    const card = document.createElement('div');
    card.className = 'card'; 


    const cardBase = document.createElement('div');
    cardBase.className = 'card-base';
    card.appendChild(cardBase);
   

    const imgProductoI = document.createElement('img');
    imgProductoI.className =  'imgProducto';  
    imgProductoI.src = imgProducto; 
    imgProducto.alt = desProducto; 
    

    const cardTitleH = document.createElement('h3');
    cardTitleH.className = 'card-title';
    cardTitleH.textContent = cardTitle;
   

    const identifierP = document.createElement('p');
    identifierP.className = 'identifier';
    identifierP.textContent = identifier;
    

    const oldPriceP = document.createElement('p');
    oldPriceP.className = 'old-price';
    oldPriceP.textContent = oldPrice;

    const cardOrder = document.createElement('div');
    cardOrder.className = 'card-order';


    cardBase.appendChild(imgProductoI);
    cardBase.appendChild(cardTitleH);
    cardBase.appendChild(identifierP);
    cardBase.appendChild(oldPriceP);
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


    const newPriceP = document.createElement('p');
    newPriceP.className = 'new-price';
    newPriceP.textContent = newPrice;


    cardButtom.appendChild(imgBag);
    cardButtom.appendChild(imgPlus);
    cardPrice.appendChild(newPriceP);


    return card;
}

const cardData = [
    {
      imgProducto: 'images/productos/DestacadosDesktop.png',
      desProducto: 'This is the content of Card 1.',
      cardTitle: 'Titulo del primer producto',
      identifier:'111',
      oldPrice:'$10',
      newPrice:'$234',
    },
    {
        imgProducto: 'images/productos/DestacadosDesktop.png',
        desProducto: 'This is the content of Card 1.',
        identifier:'111',
        oldPrice:'$10',
        newPrice:'$23423',
      },
      {
        imgProducto: 'images/productos/DestacadosDesktop.png',
        desProducto: 'This is the content of Card 1.',
        cardTitle: 'Titulo del tercer producto',
        identifier:'111',
        oldPrice:'$10',
        newPrice:'$234',
      },
  ];
  

let cardContainer;

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    cardContainer = document.getElementById('products');

    for (const data of cardData) {
        const card = createCard(data);
        cardContainer.appendChild(card);
      }
});