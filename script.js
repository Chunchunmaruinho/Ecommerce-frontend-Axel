
async function fetchProducts() {
  console.log("Init");
  const apiURL = "https://64f659ae2b07270f705e6753.mockapi.io/api/products";
  const apiResponse = await fetch(apiURL)
  const jsonData = await apiResponse.json();
  console.log(apiResponse.status);
  console.log(jsonData);
  return jsonData;
}


function createCard1(defaultCard) {
    const {
    image =  'images/productos/DestacadosDesktop.png',
    imgLabel = 'images/productos/label.png',
    desProducto ='Alt producto' ,
    title = 'Nombre del producto' ,
    previousPrice = '$Precio Antiguo',
    price = '$Precio Actual',
    id = 'identificador'
    } = defaultCard;


    const card = document.createElement('div');
    card.className = 'card'; 


    const cardBase = document.createElement('div');
    cardBase.className = 'card-base';
    card.appendChild(cardBase);
   

    const imgProductoI = document.createElement('img');
    imgProductoI.className =  'imgProducto';  
    imgProductoI.src = image; 
    imgProductoI.alt = desProducto; 
    

    const cardTitleH = document.createElement('h3');
    cardTitleH.className = 'card-title';
    cardTitleH.textContent = title;
   

    const identifierP = document.createElement('p');
    identifierP.className = 'identifier';
    identifierP.textContent =`Identifier number ${id}`;
    

    const oldPriceP = document.createElement('p');
    oldPriceP.className = 'old-price';
    oldPriceP.textContent = previousPrice;

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
    newPriceP.textContent = price;


    cardButtom.appendChild(imgBag);
    cardButtom.appendChild(imgPlus);
    cardPrice.appendChild(newPriceP);


    return card;
}
  
function createCard2(defaultCard) {
  const {
  image =  'images/productos/DestacadosDesktop.png',
  labelImg = 'images/productos/label.png',
  labelAlt = 'label image',
  ofertPercent = '10%',
  desProducto ='Alt producto' ,
  title = 'Nombre del producto' ,
  previousPrice = '$Precio Antiguo',
  price = '$Precio Actual',
  id = 'identificador'
  } = defaultCard;


  const card = document.createElement('div');
  card.className = 'card ofertaP'; 


  const cardBase = document.createElement('div');
  cardBase.className = 'card-base';
  card.appendChild(cardBase);
 

  const imgLabel = document.createElement('img') ;
  imgLabel.className = 'imgDescuento';
  imgLabel.src = labelImg;
  imgLabel.alt = labelAlt;


  const imgProductoI = document.createElement('img');
  imgProductoI.className =  'imgProducto';  
  imgProductoI.src = image; 
  imgProductoI.alt = desProducto; 
  

  const label = document.createElement ('p');
  label.className = 'ofertaLabel';
  label.textContent = ofertPercent;

  const cardTitleH = document.createElement('h3');
  cardTitleH.className = 'card-title';
  cardTitleH.textContent = title;
 

  const identifierP = document.createElement('p');
  identifierP.className = 'identifier';
  identifierP.textContent =`Identifier number ${id}`;
  

  const oldPriceP = document.createElement('p');
  oldPriceP.className = 'old-price';
  oldPriceP.textContent = previousPrice;

  const cardOrder = document.createElement('div');
  cardOrder.className = 'card-order';

  
  cardBase.appendChild(imgProductoI);
  cardBase.appendChild(imgLabel);
  cardBase.appendChild(label);
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
  newPriceP.textContent = price;


  cardButtom.appendChild(imgBag);
  cardButtom.appendChild(imgPlus);
  cardPrice.appendChild(newPriceP);


  return card;
}

window.addEventListener("load", async (event) => {
    console.log("page is fully loaded");    

    const products = await fetchProducts();

    const cardContainer1 = document.getElementById('productsDestacados');
    const cardContainer2 = document.getElementById('productsOferta');
    
    products.forEach ((jsonData) => {

        if (jsonData.featured == true){
          const card = createCard1(jsonData);
          cardContainer1.appendChild(card);
         }
       

        if (jsonData.onSale == true){
          const card = createCard2(jsonData);
          cardContainer2.appendChild(card);
      }
  });
});