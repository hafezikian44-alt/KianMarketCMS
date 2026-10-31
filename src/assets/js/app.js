//* Cms -> Content Management System

let data = {
  users: [
    {
      id: 1,
      name: "پیمان احمدی",
      username: "peyman",
      email: "peyman@gmail.com",
      password: "peyman1212",
    },
    {
      id: 2,
      name: "علی حسینی",
      username: "alii123",
      email: "alii@gmail.com",
      password: "ali45645",
    },
    {
      id: 3,
      name: "حسین نعیمی",
      username: "hosein-naiimi",
      email: "hossein@gmail.com",
      password: "hoseinnaiimi34",
    },
    {
      id: 4,
      name: "آرش کیایی",
      username: "arash-kiyayi",
      email: "arashh2@gmail.com",
      password: "arash5130@9",
    },
    {
      id: 5,
      name: "محمد امین سعیدی راد",
      username: "amin-saedii",
      email: "mohammadamiin@gmail.com",
      password: "mohammadamin1212",
    },
    {
      id: 6,
      name: "حمیدرضا عبادی",
      username: "hamidrezaa",
      email: "hamidreza@gmail.com",
      password: "ebadi.dev12",
    },
    {
      id: 7,
      name: "محمد بیگی",
      username: "mohammad-beygi",
      email: "beygi34@gmail.com",
      password: "mbeygi3445",
    },
    {
      id: 8,
      name: "مهدی کرمی",
      username: "mehdi-karami4",
      email: "mehdikarami@gmail.com",
      password: "mehdikarami23%93",
    },
  ],

  products: [
    {
      id: 1,
      title: "کفش آدیداس",
      price: 2000000,
      slug: "addidas-sport-shoes",
    },
    {
      id: 2,
      title: "توپ بسکتبال",
      price: 400000,
      slug: "basketball-ball",
    },
    {
      id: 3,
      title: "دنبل 5 کیلویی",
      price: 20000,
      slug: "5kg-weight",
    },
    {
      id: 4,
      title: "دنبل 10 کیلویی",
      price: 50000,
      slug: "10kg-weight",
    },
    {
      id: 5,
      title: "دنبل 20 کیلویی",
      price: 80000,
      slug: "20kg-weight",
    },
    {
      id: 6,
      title: "شلوارک نایکی",
      price: 150000,
      slug: "nike-short",
    },
    {
      id: 7,
      title: "جوراب پوما",
      price: 2000,
      slug: "puma-sucks",
    },
    {
      id: 8,
      title: "توپ والیبال",
      price: 30000,
      slug: "vallyball-ball",
    },
    {
      id: 9,
      title: "راکت تنیس",
      price: 100000,
      slug: "tennis",
    },
    {
      id: 10,
      title: "ست غواصی",
      price: 40000000,
      slug: "diving-packege",
    },
  ],
};

const toggleMenu = document.querySelector(".toggle-sidebar");
const latestUsersElem = document.querySelector(".latest-users")
const tableBodyElem = document.querySelector(".table-body")
const allUsersTableElem = document.querySelector(".all-users-table")
const allProductsTableElem = document.querySelector(".all-products-table")
const productsDataElem = document.querySelector(".products-data");
const productsNumbersElem = document.querySelector(".products-numbers");
const usersDataElem = document.querySelector(".users-data");
const modalScreen = document.querySelector(".modal-screen");
const toastContent = document.querySelector(".toast-content")
const toastBox = document.querySelector(".toast")
const processToastBox = document.querySelector(".process")
const RemoveModal = document.querySelector(".remove-modal")
const editModal = document.querySelector(".edit-modal")
const closeRemoveModal = document.querySelector(".close-remove-modal");
const cancelRemoveModal = document.querySelector(".cancel-remove-modal");
const submitRemoveBtn = document.querySelector(".submit-remove");
const closeEditModal = document.querySelector(".close-edit-modal");
const cancelEditModal = document.querySelector(".cancel-edit-modal");
const submitEditBtn = document.querySelector(".submit-edit");
const titleInput = document.querySelector(".title-input")
const priceInput = document.querySelector(".price-input")
const slugInput = document.querySelector(".slug-input")
const createProductModal = document.querySelector(".create-product-modal")
const createProductBtn = document.querySelector("#create-product")
const closeCreateModalBtn = document.querySelector(".close-create-modal")
const cancelCreateModalBtn = document.querySelector(".cancel-create-modal")
const submitCreateModalBtn = document.querySelector(".submit-create-modal")
const newProductTitleInput = document.querySelector(".new-product-title-input")
const newProductPriceInput = document.querySelector(".new-product-price-input")
const newProductSlugInput = document.querySelector(".new-product-slug-input")

const usersModal = document.querySelector(".users-modal");
const editUserModal = document.querySelector(".edit-user-modal");
const closeEditUsersModal = document.querySelector(".close-edit-users-modal");
const cancelEditUsersModal = document.querySelector(".cancel-edit-users-modal");
const submitEditUsersModal = document.querySelector(".submit-edit-users-modal");
const createNewUserModal = document.querySelector(".create-new-user-modal");
const closeCreateUserModal = document.querySelector(".close-create-user-modal");
const cancelCreateUserModal = document.querySelector(".cancel-create-user-modal");
const submitCreateUserModal = document.querySelector(".submit-create-user-modal");
const removeUserModal = document.querySelector(".remove-user-modal");
const closeRemoveUserModal = document.querySelector(".close-remove-user-modal");
const cancelRemoveUserModal = document.querySelector(".cancel-remove-user-modal");
const submitRemoveUserModal = document.querySelector(".submit-remove-user-modal");
const createUserBtn = document.querySelector("#create-user");
const allUsersTable = document.querySelector(".all-users-table");






toggleMenu.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("open");
});

function setDataToLocalStorage () {
  localStorage.setItem("users", JSON.stringify(data.users))
  localStorage.setItem("products", JSON.stringify(data.products))
}
// localStorage.clear()

function getDataFromLocalStorage () {
  let localStorageUsers = JSON.parse(localStorage.getItem("users"))
  let localStorageProducts = JSON.parse(localStorage.getItem("products"))

  if(localStorageUsers) {
    data.users = localStorageUsers;
  }
  if(localStorageProducts) {
    data.products = localStorageProducts;
  }

}


function showUsers() {
  let lastFiveUsers = data.users.slice(-5)
  latestUsersElem.innerHTML = ""
  usersDataElem.innerHTML = data.users.length
lastFiveUsers.forEach(function(user) {
  latestUsersElem.insertAdjacentHTML("beforeend", `
    <article>
              <!-- user icon -->
              <span class="icon-card">
                <i class="fa-solid fa-user"></i>
              </span>
              <!-- user data -->
              <div>
                <p class="user-name">${user.name}</p>
                <p class="user-email">${user.email}</p>
              </div>
            </article>
    `)
})



}


function showAllUsers () {
  usersDataElem.innerHTML = data.users.length
  data.users.forEach(function(user) {
  allUsersTableElem.insertAdjacentHTML("beforeend", `
    <div class="tableRow">
              <p class="user-fullName">${user.name}</p>
              <p class="user-username">${user.username}</p>
              <p class="user-email">${user.email}</p>
              <p class="user-password">${user.password}</p>
              <div class="product-manage">
                <button onclick="editUsers(${user.id})" class="edit-btn">
                  <!-- Edit icon -->
                  <i class="fas fa-edit"></i>
                </button>
                <button onclick="removeUsers(${user.id})" class="remove-btn">
                  <!-- Ban icon -->
                  <i class="fas fa-ban"></i>
                </button>
              </div>
            </div>
    `)
})

}

function showProducts () {
tableBodyElem.innerHTML = ""
productsDataElem.innerHTML = data.products.length
productsNumbersElem.innerHTML = data.products.length

  data.products.forEach(function (product) {
    
tableBodyElem.insertAdjacentHTML("beforeend", `
   <div class="tableRow">
                <p class="product-title">${product.title}</p>
                <p class="product-price">${product.price.toLocaleString()} تومان</p>
                <p class="product-shortName">${product.slug}</p>
                <div class="product-manage">
                  <button onclick="editProduct(${product.id})" class="edit-btn">
                    <!-- Edit icon -->
                    <i class="fas fa-edit"></i>
                  </button>
                  <button onclick="removeProduct(${product.id})" class="remove-btn">
                    <!-- Delete fas icon -->
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
  `)
  })
}

function showAllProducts () {
  allProductsTableElem.innerHTML = ""
  productsDataElem.innerHTML = data.products.length
data.products.forEach(function (product) {
  allProductsTableElem.insertAdjacentHTML("beforeend", `
    <div class="tableRow">
              <p class="product-title">${product.title}</p>
              <p class="product-price">${product.price.toLocaleString()} تومان</p>
              <p class="product-shortName">${product.slug}</p>
              <div class="product-manage">
                <button onclick="editProduct(${product.id})" class="edit-btn">
                  <!-- Edit icon -->
                  <i class="fas fa-edit"></i>
                </button>
                <button onclick="removeProduct(${product.id})" class="remove-btn">
                  <!-- Delete fas icon -->
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
    `)
})
}

function editUsers (event) {
let userId = event
showEditUserModal()
let currentUser = data.users.find(function (user) {
  return user.id === userId 
})
let currentUserIndex = data.user.findIndex(function (user) {
  return user === userId
})
console.log(currentUser);

} 


function removeUsers (event) {
  let userId = event
  showRemoveUserModal()
  submitRemoveUserModal.onclick = function() {
    allUsersTable.innerHTML = ""
    const newUsersList = data.users.filter(function (user) {
      return user.id !== userId
    })
    data.users = newUsersList
    setDataToLocalStorage()
    hideUsersModal()

    if (usersModal){
      showAllUsers()
    }
    if (latestUsersElem){
      showUsers()
    }
  }
} 


function createNewUser () {
  createUserBtn.addEventListener("click", showCreateUserModal)
  
}


function editProduct (event) {
showEditModal()
  let newTitle;
  let newPrice;
  let newSlug;
const productId = event; 
let currentEditProduct = data.products.find(function(product) {
  return product.id === productId
})
const currentProductIndex = data.products.findIndex(function(product){
  return product === currentEditProduct
})

submitEditBtn.onclick =  function () {
  if (titleInput.value.trim() === "") {
    newTitle = currentEditProduct.title
  } else {
    newTitle = titleInput.value
  }
  if (priceInput.value.trim() === "") {
    newPrice = currentEditProduct.price
  } else {
    newPrice = +priceInput.value
  }
  if (slugInput.value.trim() === "") {
    newSlug = currentEditProduct.slug
  } else {
    newSlug = slugInput.value
  }

  data.products[currentProductIndex].title = newTitle
  data.products[currentProductIndex].price = newPrice
  data.products[currentProductIndex].slug = newSlug

  titleInput.value = ""
  priceInput.value = ""
  slugInput.value = ""

  if (allProductsTableElem) {
    showAllProducts();
  }
  if (latestUsersElem) {
    showProducts();
  }
  hideEditModal()
  setDataToLocalStorage()
  toastBoxHandler()
  toastContent.innerHTML = "تغییر مد نظر با موفقیت اعمال شد"
    toastBox.classList.add("success")
    toastBox.classList.remove("failed")
}


} 


function removeProduct (event) {
  showRemoveModal()
  const productId = event;
  submitRemoveBtn.onclick =  function () {
    const newProductList = data.products.filter(function(product) {
      return product.id !== productId
    })
    data.products = newProductList

    // if the element exist in document the specific function of document get active  
  if (allProductsTableElem) {
  showAllProducts();
}

if (latestUsersElem) {
  showProducts();
}
  setDataToLocalStorage()
  hideRemoveModal()
  toastBoxHandler()
  toastContent.innerHTML = "محصول با موفقیت حذف شد "
    toastBox.classList.add("success")
    toastBox.classList.remove("failed")
}
} 



function creatNewProduct () {
  createProductBtn.addEventListener("click", showCreatProductModal)
  submitCreateModalBtn.addEventListener("click", function() {    
    if (newProductTitleInput.value.trim() === "" || newProductPriceInput.value.trim() === "" || newProductSlugInput.value.trim() === "") {
      toastBoxHandler()
      toastContent.innerHTML = "عملیات با شکست مواجه شد !"
      toastBox.classList.remove("success")
      toastBox.classList.add("failed")
    } else {
      let productTitle = newProductTitleInput.value
      let productPrice = +newProductPriceInput.value
      let productSlug  = newProductSlugInput.value
      let productId = Math.floor(Math.random() * 10000)
      const newProduct = {
        id: productId,
        title: productTitle,
        price: productPrice,
        slug: productSlug
      }  
      data.products.push(newProduct) 
    }

  newProductTitleInput.value = ""
  newProductPriceInput.value = ""
  newProductSlugInput.value = ""
  hideCreatProductModal()
  if (allProductsTableElem) {
    showAllProducts();
  }
  if (latestUsersElem) {
    showProducts();
  }
  setDataToLocalStorage()
  })


}

// modal & toast box=================================================
function toastBoxHandler () {
  let toastProsess = 0
  toastBox.classList.remove("hidden")
  toastContent.innerHTML = ""
  const toastBoxInterval = setInterval(function () {
    toastProsess ++; 
    processToastBox.style.width = `${toastProsess}%`

    if(toastProsess === 115) {
      toastProsess = 0; 
      toastBox.classList.add("hidden")
      processToastBox.style.width = "1%"
      clearInterval(toastBoxInterval);
    }
  },50)
}

function showRemoveModal (){
  modalScreen.classList.remove("hidden")
  RemoveModal.classList.remove("hidden")
  editModal.classList.add("hidden")
}

function hideRemoveModal (){
  modalScreen.classList.add("hidden")
  RemoveModal.classList.add("hidden")
}

function showEditModal () {
modalScreen.classList.remove("hidden")
editModal.classList.remove("hidden")
RemoveModal.classList.add("hidden")
}

function hideEditModal () {
modalScreen.classList.add("hidden")
  editModal.classList.add("hidden")
}

function showCreatProductModal () {
  createProductModal.classList.remove("hidden")
}

function hideCreatProductModal () {
  createProductModal.classList.add("hidden")
}

//modal for users =====================================================
function showRemoveUserModal () {
  usersModal.classList.remove("hidden")
  editUserModal.classList.add("hidden")
  createNewUserModal.classList.add("hidden")
  removeUserModal.classList.remove("hidden")
}

function showEditUserModal () {
  usersModal.classList.remove("hidden")
  editUserModal.classList.remove("hidden")
  createNewUserModal.classList.add("hidden")
  removeUserModal.classList.add("hidden")
}

function showCreateUserModal () {
  usersModal.classList.remove("hidden")
  editUserModal.classList.add("hidden")
  createNewUserModal.classList.remove("hidden")
  removeUserModal.classList.add("hidden")
}

function hideUsersModal () {
usersModal.classList.add("hidden")
}

//========================================================================



//for products page============================================================
if (latestUsersElem) {
   closeRemoveModal.addEventListener("click", hideRemoveModal)
cancelRemoveModal.addEventListener("click", hideRemoveModal)
closeEditModal.addEventListener("click", hideEditModal)
cancelEditModal.addEventListener("click", hideEditModal)
}

//for home page================================================================
if (allProductsTableElem){
  cancelCreateModalBtn.addEventListener("click", hideCreatProductModal)
  closeCreateModalBtn.addEventListener("click", hideCreatProductModal)

}

  //for users===================================================================
if (usersModal) {
closeEditUsersModal.addEventListener("click" , hideUsersModal)
cancelEditUsersModal.addEventListener("click" , hideUsersModal)
closeCreateUserModal.addEventListener("click" , hideUsersModal)
cancelCreateUserModal.addEventListener("click" , hideUsersModal)
closeRemoveUserModal.addEventListener("click" , hideUsersModal)
cancelRemoveUserModal.addEventListener("click" , hideUsersModal)

}
