
async function fetchProducts() {
  console.log("Init");

  const apiURL = "https://64f659ae2b07270f705e6753.mockapi.io/api/products";
  const apiResponse = await fetch(apiURL)
  const jsonData = await apiResponse.json();
  console.log(apiResponse.status);

  console.log(jsonData);
  return jsonData;
}




function createCard(product) {
    const {
    image =  'images/productos/DestacadosDesktop.png',
    desProducto ='Alt producto' ,
    title = 'Nombre del producto' ,
    identifier = 'identificador',    
    previousPrice = '$Precio Antiguo',
    price = '$Precio Actual'   
    } = product;

    const card = document.createElement('div');
    card.className = 'card'; 


    const cardBase = document.createElement('div');
    cardBase.className = 'card-base';
    card.appendChild(cardBase);
   

    const imgProductoI = document.createElement('img');
    imgProductoI.className =  'imgProducto';  
    imgProductoI.src = image; 
    image.alt = desProducto; 
    

    const cardTitleH = document.createElement('h3');
    cardTitleH.className = 'card-title';
    cardTitleH.textContent = title;
   

    const identifierP = document.createElement('p');
    identifierP.className = 'identifier';
    identifierP.textContent = identifier;
    

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
  

let cardContainer;

window.addEventListener("load", async (event) => {
    console.log("page is fully loaded");

    const products = await fetchProducts();

    cardContainer = document.getElementById('products');

    for (const data of products) {
        const card = createCard(data);
        cardContainer.appendChild(card);
      }
});