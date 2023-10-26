//fetching data from rainydays API

const jacket_url = "https://api.noroff.dev/api/v1/rainy-days";
const products = document.querySelector(".menJacket");

try {
    async function getMenJackets() {
        //Showing Loading Indication
        loadingIndicator();
        //fetch function in use 
        products.innerHTML = "";
        const response = await fetch(jacket_url); // fetching the url
        const results = await response.json(); // making the url readable that is in JSON format
        const menJacket = results; // we got an array of objects, putting that array in a variable

        //TO FILTER OUT THE JACKETS WHICH HAS GENDER MALE
        const filteredJacket = menJacket.filter(filterJacket);
        function filterJacket(jacket) {
            if (jacket.gender === "Female") {
                return true;
            }
        }


        for (let i = 0; i < filteredJacket.length; i++) {
            products.innerHTML += `
            <div class="jacket">
            <a href="productDetail.html?id=${filteredJacket[i].id}&title=${filteredJacket[i].title}"> 
            <img src="${filteredJacket[i].image}" class="jacket-image"/>
            <h4 class="jacket_title">${filteredJacket[i].title}</h4></a>
            <p class="jacket_price">${filteredJacket[i].price}Kr</p>
            <a class="favourite" href="favourite.html"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            </div>
          </div> `;
        }
    };


    //Function for Loading Indicator
    function loadingIndicator() {
        const products = document.querySelector(".jacket");
        products.innerHTML = "<li>Loading...</li>";
    }

    getMenJackets();
}


catch {
    error();
}