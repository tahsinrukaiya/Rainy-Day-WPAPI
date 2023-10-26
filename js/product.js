//fetching data from rainydays API

const jacket_url = "https://rainyday.no/wc/store/products";
const products = document.querySelector(".products");


try {
  async function getJackets() {
    //Showing Loading Indication
    loadingIndicator();
    //fetch function in use 
    products.innerHTML = "";
    const response = await fetch(jacket_url); // fetching the url
    const results = await response.json(); // making the url readable that is in JSON format
    const jacket = results; // we got an array of objects, putting that array in a variable

    //to loop over that array
    //for button
    // <a href="productDetail.html?id=${jacket[i].id}&title=${jacket[i].title}" class="btn">Buy Now</a>

    for (let i = 0; i < jacket.length; i++) {
      console.log(jacket[i].title);
      products.innerHTML += `
        <div class="product">
        <a class="main" href="productDetail.html?id=${jacket[i].id}&title=${jacket[i].title}">
        <img src="${jacket[i].image}" class="product-image"/>
        <h4 class="product_title">${jacket[i].title}</h4>
        <p class="product_price">${jacket[i].price}kr</p>
        <a class="favourite" href="favourite.html"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        </div>
        </a>
      </div> `;
    }
  }

  //Function for Loading Indicator
  function loadingIndicator() {
    const products = document.querySelector(".products");
    products.innerHTML = "<li>Loading...</li>";
  }

  products.onclick = getJackets();
}

catch {
  error();
}





/*for learning
innerHTML is an HTML element property that has two uses for web developers:
 1) You can use it to get the internal HTML content of any HTML element as an HTML string.
  2) You can also use it to set or change elements' innerHTML content.
*/