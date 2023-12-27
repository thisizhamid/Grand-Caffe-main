// let loginRegProfile = document.getElementById("loginRegProfileIcon");

// if (localStorage.getItem("logedUserId")) {
 
//   loginRegProfile.href = "/src/profile/profile.html";
//   loginRegProfile.innerHTML = `<i class="fa-regular fa-user"></i>`;
// } else {
//   loginRegProfile.href = "/src/loginReg/loginReg.html";
//   loginRegProfile.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i>`;
// }



// coffe
let xhr=new XMLHttpRequest()
xhr.open("get","../../../assets/data/simpleCoffee.json")
xhr.send()
let search=document.getElementById("search")
let product=document.getElementById("product")


    let processData=function(){
        if(xhr.status == 200){
            let coffe=JSON.parse(xhr.response)
            let searchTerm = search.value.toLowerCase();
            // console.log(searchTerm)
            if (searchTerm.trim() !== ""){
                for (const type in coffe) {
                    let coffeType=coffe[type].name.toLowerCase()
                    // console.log(coffeType)
                    if(coffeType.includes(searchTerm)){
                        product.innerHTML +=`
                        <div class="search-item" id=${coffe[type].id}>
                       <img src=${coffe[type].images} id="search-image"/>
                       <h3> ${coffe[type].name}</h3>
                       <span>price $ ${coffe[type].price}</span>
                        </div>
                        `
                        
                    }
                    
                 }
            }
           
        }
    }
   
    // hot choclate
    let xhr2=new XMLHttpRequest()
xhr2.open("get","../../../assets/data/simpleHotChock.json")
xhr2.send()
// let search=document.getElementById("search")
// let product=document.getElementById("product")


    let processData2=function(){
        if(xhr2.status == 200){
            let hotchoclate=JSON.parse(xhr2.response)
            let searchTerm = search.value.toLowerCase();
            // console.log(searchTerm)
            if (searchTerm.trim() !== ""){
                for (const type in hotchoclate) {
                    let hotchoclateType=hotchoclate[type].name.toLowerCase()
                    // console.log(coffeType)
                    if(hotchoclateType.includes(searchTerm)){
                        product.innerHTML +=`
                        <div class="search-item" id=${hotchoclate[type].id}>
                       <img src=${hotchoclate[type].images} id="search-image"/>
                       <h3> ${hotchoclate[type].name}</h3>
                       <span id="price">price $ ${hotchoclate[type].price}</span>
                        </div>
                        `
                        
                    }
                    
                 }
            }
           
        }
    }


    xhr.addEventListener("load",processData)
    // search.addEventListener('input', function () {
    //     xhr.abort();
    //     product.innerHTML = "";
    //     xhr.open("get","../../../assets/data/simpleCoffee.json")
    //     xhr.send();
    // });
    xhr2.addEventListener("load",processData2)
    search.addEventListener('input', function () {
        xhr.abort();
        product.innerHTML = "";
        xhr.open("get","../../../assets/data/simpleCoffee.json")
        xhr.send();
        xhr2.abort();
        product.innerHTML = "";
        xhr2.open("get","../../../assets/data/simpleHotChock.json")
        xhr2.send();

        // let searchItem=document.querySelectorAll(".search-item")
        // searchItem.onclick = function() {
        // console.log(searchItem);
        // console.log("Search")
        // let productId = this.id;
        // localStorage.setItem("coffeeTypeId", productId);
        // window.location.href = "../../product/product.html";
    // }

    });

    // mostPopPorducts.addEventListener("click", (e) => {
    //     const productCard = e.target.closest(".product-card");
    //     if (productCard) {
    //       const productId = productCard.dataset.productId;
    //       localStorage.setItem("coffeeTypeId", productId);
    //       window.location.href = "../../product/product.html";
    //     }
    //   });
    //open the item out of the search results
  
    product.addEventListener("click", (e) => {
        let productCard = e.target.closest(".search-item");
        if (productCard) {
            console.log(productCard);
            const productId = productCard.id;
            console.log(productId);
            localStorage.setItem("coffeeTypeId", productId);
            window.location.href = "../product/product.html";
          }
    })

    // let product = document.getElementById("product");
    // console.log(product);