// Product data
const products = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: 1299,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "new",
      size: "m",
      image: "https://www.alexmill.com/cdn/shop/products/206-MJ003-2191_VINTAGE-WASH_18541_1600x2133_crop_center.jpg?v=1597356654",
      isNew: true,
      description: "A classic vintage denim jacket in excellent condition. Perfect for layering in any season.",
      brand: "Levi's",
      material: "Cotton blend fabric, medium weight. Classic denim construction with metal buttons and rivets.",
      care: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low if needed.",
      era: "1990s",
      color: "Medium blue wash",
      style: "Classic trucker jacket",
    },
    
    {
      id: 2,
      name: "Wool Sweater",
      price: 850,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "excellent",
      size: "l",
      image:
        "https://imgs.search.brave.com/g5YS0VJ2VBNisyV5ZJU3W4CdvJU8hXjYF14-1Wk0Bkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1yN2lo/bS9pbWFnZXMvc3Rl/bmNpbC81MDB4NjU5/L3Byb2R1Y3RzLzEx/NjgvMzg2NC9BNzk0/LWNsYXJldF9fNTkw/MjRfXzI2OTcxLjE1/NjQwNzI3NzIuanBn/P2M9Mg",
      description: "Warm and cozy wool sweater perfect for winter. Features a classic design with ribbed cuffs and hem.",
      brand: "Gap",
      material: "100% wool, heavy weight for warmth",
      care: "Hand wash cold. Lay flat to dry. Do not bleach.",
      era: "2010s",
      color: "Navy blue",
      style: "Crew neck",
    },
    {
      id: 3,
      name: "Vintage Band T-Shirt",
      price: 599,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "good",
      size: "m",
      image:
        "https://imgs.search.brave.com/mqCNc0GI8yCqKU3VhbI-ZiVmvyutYHXqDa-Zc7CX71c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2xp/ZHRocmVhZHMuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL21lbnNf/YnJ1dXVjZV92aW50/YWdlX2luc3BpcmVk/X3RydWVfYmxhY2tf/dGVlX3NoaXJ0X3dp/dGhfY29vbF9mdW5u/eV9yZXRyb19zcHJp/bmdzdGVlbl9ncmFw/aGljLmpwZz92PTE1/OTgyODU0NjMmd2lk/dGg9MTYwMA",
      description:
        "Authentic vintage band t-shirt with classic rock graphics. Soft, worn-in fabric with a comfortable fit.",
      brand: "Unknown",
      material: "100% cotton, lightweight and soft",
      care: "Machine wash cold. Tumble dry low.",
      era: "1980s",
      color: "Black",
      style: "Graphic tee",
    },
    {
      id: 4,
      name: "Casual Button-Up Shirt",
      price: 450,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "good",
      size: "s",
      image:
        "https://imgs.search.brave.com/v9MvSogDDKWaYzkJoUsymbxwMvN45nCL6ZvVs-XzXVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaW1n/LmRpbGxhcmRzLmNv/bS9pcy9pbWFnZS9E/aWxsYXJkc1pvb20v/bmF2Mi9jYXJpYmJl/YW4tYmlyZC1vZi1w/YXJhZGlzZS10ZXh0/dXJlZC1zaG9ydC1z/bGVldmUtd292ZW4t/c2hpcnQvMDAwMDAw/MDBfemlfNDUwNTRm/ZWUtYThkMS00ZTlj/LWFkMDktN2I2MjFi/YTc2YzQ3LmpwZw",
      description: "Versatile button-up shirt that can be dressed up or down. Comfortable fit with a modern cut.",
      brand: "H&M",
      material: "Cotton blend, lightweight",
      care: "Machine wash cold. Iron on medium heat if needed.",
      era: "2010s",
      color: "Light blue with subtle pattern",
      style: "Casual button-up",
    },
    {
      id: 5,
      name: "Floral Summer Dress",
      price: 699,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "like-new",
      size: "s",
      image:
        "https://imgs.search.brave.com/GSmRE0UFWPSIcgYa85uhLIkTqkpAV3WvUtIemakmoRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dG9iaS5jb20vcHJv/ZHVjdF9pbWFnZXMv/bWQvMS9yZWQtYWRl/bGxhLWRpdHN5LWZs/b3JhbC1taW5pLWRy/ZXNzLmpwZw",
      description: "Beautiful floral summer dress perfect for warm weather. Flowy fabric with a flattering cut.",
      brand: "Zara",
      material: "Lightweight polyester blend with floral print",
      care: "Hand wash cold. Line dry.",
      era: "2020s",
      color: "White with multicolor floral pattern",
      style: "A-line summer dress",
    },
    {
      id: 6,
      name: "Girls' Cotton Saree",
      price: 799,
      category: "women",
      categoryDisplay: "Girls' Ethnic Wear",
      condition: "fair",
      size: "14-16",
      image: "https://imgs.search.brave.com/UKuFwmqz0xsT-n7a9lA10Ln-AOgkeK_LetFkRclbXbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGlk/aXlhYS5jb20vY2Ru/L3Nob3AvcHJvZHVj/dHMvaW1nXzcyNjYu/anBnP3Y9MTc0MDk4/NTY2NyZ3aWR0aD05/NjA",
      description: "Simple cotton saree for young girls with printed border.",
      brand: "Biba",
      material: "Cotton",
      care: "Machine wash gentle",
      era: "2010s",
      color: "Black",
      style: "Traditional"
    },
    {
      id: 7,
      name: "Kids' Colorful Sweater",
      price: 450,
      category: "kids",
      categoryDisplay: "Kids' Clothing",
      condition: "good",
      size: "xs",
      image: "https://imgs.search.brave.com/wXiCXv5pssZvv6536qIPBjg2DKzAgVkakgMymb12QEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFxV24rT2Jod0wu/anBn",
      description: "Bright and colorful kids' sweater that's perfect for play. Soft material keeps children warm.",
      brand: "Gap Kids",
      material: "Cotton blend, medium weight",
      care: "Machine wash cold. Tumble dry low.",
      era: "2010s",
      color: "Multicolor stripes",
      style: "Pullover sweater",
    },
    {
      id: 8,
      name: "Winter Parka Jacket",
      price: 2100,
      category: "winter",
      categoryDisplay: "Winter Wear",
      condition: "new",
      size: "xl",
      image:
        "https://imgs.search.brave.com/4m_wDnnZ0WFqukZriZPWj96Zy34eukKC7IWDlSN2Czw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFpQkpHcFNTVkwu/anBn",
      isNew: true,
      description: "Heavy-duty winter parka that provides excellent protection against cold weather.",
      brand: "North Face",
      material: "Water-resistant outer shell with down filling",
      care: "Machine wash cold on gentle cycle. Tumble dry low.",
      era: "2020s",
      color: "Olive green",
      style: "Hooded parka",
    },
    {
      id: 9,
      name: "Wool Beanie Hat",
      price: 250,
      category: "winter",
      categoryDisplay: "Winter Wear",
      condition: "excellent",
      size: "s",
      image:
        "https://imgs.search.brave.com/DOUJkpLnIaL7LC8TTq-cKjP66khCAxV-CrlqA8yEjVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFVMS1GS3Zmckwu/anBn",
      description: "Warm wool beanie hat perfect for winter days. Simple design that goes with everything.",
      brand: "H&M",
      material: "Wool blend, thick knit",
      care: "Hand wash cold. Lay flat to dry.",
      era: "2010s",
      color: "Gray",
      style: "Knit beanie",
    },
    {
      id: 10,
      name: "Women's Leather Jacket",
      price: 1499,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "like-new",
      size: "l",
      image: "https://imgs.search.brave.com/M7CLe1QMuWrQZeffFdhaOSPe-uO00x-z5jTgN9nV9gg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/Lm1hbmdvLmNvbS9h/c3NldHMvcmNzL3Bp/Y3Mvc3RhdGljL1Q4/L2ZvdG9zL1MvODcw/NjQwNjRfOTkuanBn/P3RzPTE3Mzc3MjIw/NTUxMDQmaW09U21h/cnRDcm9wLHdpZHRo/PTIwNDgsaGVpZ2h0/PTI4NjcmaW1kZW5z/aXR5PTE",
      description: "Stylish women's leather jacket in a classic moto style. Barely worn and in like-new condition.",
      brand: "Mango",
      material: "Genuine leather with polyester lining",
      care: "Professional leather cleaning only",
      era: "2010s",
      color: "Black",
      style: "Moto jacket",
    },
    {
      id: 11,
      name: "Casual Polo Shirt",
      price: 350,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "good",
      size: "m",
      image:
        "https://imgs.search.brave.com/QcrgAhcAo7V5rx8D0IzkT7wvdz_mIi0XjTwfy_341-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91c3Bv/bG9hc3NuLmluL2Nk/bi9zaG9wL2ZpbGVz/LzFfZmY1ZThkZGQt/OGU5OC00ODA2LWJj/YmMtZDQzNzg4Njg5/ZjhlXzUwMHguanBn/P3Y9MTczNzUzMDcx/NA",
      description: "Classic polo shirt that's perfect for casual wear. Comfortable fit with a traditional design.",
      brand: "Ralph Lauren",
      material: "100% cotton pique",
      care: "Machine wash cold. Tumble dry low.",
      era: "2010s",
      color: "Navy blue",
      style: "Classic polo",
    },
    {
      id: 12,
      name: "Summer Top",
      price: 299,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "fair",
      size: "s",
      image: "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,w_800,c_scale/v1/NA/Style/ECOMM/W5GH0LWH5L2-G1L7",
      description: "Light and breezy summer top perfect for hot days. Simple design that's easy to style.",
      brand: "Forever 21",
      material: "Lightweight cotton blend",
      care: "Machine wash cold. Line dry.",
      era: "2010s",
      color: "White",
      style: "Sleeveless top",
    },
    {
      id: 12,
      name: "Floral Sundress",
      price: 599,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "good",
      size: "m",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
      description: "Beautiful floral print sundress with adjustable straps.",
      brand: "H&M",
      material: "Rayon",
      care: "Hand wash recommended",
      era: "2020s",
      color: "Multi-color",
      style: "Summer dress"
    },
    {
      id: 13,
      name: "Skinny Jeans",
      price: 799,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "excellent",
      size: "28",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      description: "Classic blue skinny jeans with stretch for comfort.",
      brand: "Levi's",
      material: "Denim with elastane",
      care: "Machine wash",
      era: "2010s",
      color: "Blue",
      style: "Jeans"
    },
    {
      id: 14,
      name: "Blazer",
      price: 1299,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "like new",
      size: "l",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      description: "Professional women's blazer with notched lapels.",
      brand: "Zara",
      material: "Wool blend",
      care: "Dry clean only",
      era: "2020s",
      color: "Black",
      style: "Business casual"
    },
    {
      id: 21,
      name: "Oxford Shirt",
      price: 499,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "good",
      size: "m",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
      description: "Classic button-down oxford shirt for work or casual wear.",
      brand: "Uniqlo",
      material: "100% cotton",
      care: "Machine wash",
      era: "2010s",
      color: "Light blue",
      style: "Dress shirt"
    },
    {
      id: 22,
      name: "Chino Pants",
      price: 699,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "excellent",
      size: "34",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      description: "Versatile khaki chinos suitable for multiple occasions.",
      brand: "Banana Republic",
      material: "Cotton twill",
      care: "Machine wash",
      era: "2020s",
      color: "Khaki",
      style: "Casual pants"
    },
    {
      id: 23,
      name: "Graphic Tee",
      price: 299,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "fair",
      size: "l",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      description: "Vintage band graphic tee with distressed details.",
      brand: "Urban Outfitters",
      material: "Cotton",
      care: "Machine wash cold",
      era: "1990s",
      color: "Black",
      style: "Casual"
    },
    {
      id: 24,
      name: "Bomber Jacket",
      price: 1499,
      category: "men",
      categoryDisplay: "Men's Clothing",
      condition: "like new",
      size: "xl",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      description: "Stylish bomber jacket with ribbed cuffs and hem.",
      brand: "Alpha Industries",
      material: "Nylon",
      care: "Spot clean",
      era: "2020s",
      color: "Olive green",
      style: "Outerwear"
    },{
      id: 31,
      name: " Hoodie",
      price: 399,
      category: "kids",
      categoryDisplay: "Kids' Clothing",
      condition: "good",
      size: "5-6",
      image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77",
      description: "Adorable hoodie with  print for young children.",
      brand: "Carter's",
      material: "Cotton blend",
      care: "Machine wash",
      era: "2020s",
      color: "white",
      style: "Casual"
    },
    {
      id: 32,
      name: "Princess Dress",
      price: 599,
      category: "kids",
      categoryDisplay: "Kids' Clothing",
      condition: "excellent",
      size: "4-5",
      image: "https://imgs.search.brave.com/i8cYvHLPF-_NG7yUgYSdI6dfZSv4a5QCwBPLEWeGHEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmlz/aHNjdWxseS5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvMTY0XzJm/ZjVjMzJmLWY2NDct/NDJjYS04OGI4LTMx/YTYyODIxMjhiZS5q/cGc_dj0xNjY4Njgy/MzcwJndpZHRoPTE0/Njc",
      description: "Sparkly princess dress for special occasions.",
      brand: "Disney",
      material: "Polyester",
      care: "Hand wash",
      era: "2020s",
      color: "Pink",
      style: "Dress-up"
    },
    {
      id: 33,
      name: "Cargo Pants",
      price: 349,
      category: "kids",
      categoryDisplay: "Kids' Clothing",
      condition: "good",
      size: "7-8",
      image: "https://imgs.search.brave.com/nzUo8jigD4qHzfZlCqdFZhsOG3Rwd6d9qv6BM6zdZuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWVkaWEuYW1wbGll/bmNlLm5ldC9pL3By/aW1hcmsvOTkxMTA2/NDIxNDE2XzAx",
      description: "Durable cargo pants with multiple pockets.",
      brand: "OshKosh",
      material: "Cotton twill",
      care: "Machine wash",
      era: "2010s",
      color: "Khaki",
      style: "Casual"
    },
    {
      id: 34,
      name: "Rainbow Leggings",
      price: 249,
      category: "kids",
      categoryDisplay: "Kids' Clothing",
      condition: "fair",
      size: "3-4",
      image: "https://static.wixstatic.com/media/ede6e1_9bb54d627c1d496fa340a0352a86025f~mv2.jpg/v1/fill/w_689,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ede6e1_9bb54d627c1d496fa340a0352a86025f~mv2.jpg",
      description: "Colorful leggings with rainbow stripes.",
      brand: "Gap Kids",
      material: "Cotton/spandex",
      care: "Machine wash cold",
      era: "2020s",
      color: "Multi-color",
      style: "Activewear"
    },
    {
      id: 36,
      
      name: "Women's Blazer",
      price: 1250,
      category: "women",
      categoryDisplay: "Women's Clothing",
      condition: "excellent",
      size: "m",
      image:
        "https://imgs.search.brave.com/wQvtlkZ7nHtffBDKS12JAmCPP9tXDNWIXCI2TvzE_vw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF0VkFhNTRvK0wu/anBn",
      description: "Professional women's blazer in a classic cut. Perfect for office wear or to dress up casual outfits.",
      brand: "Mango",
      material: "Polyester blend with light stretch",
      care: "Dry clean only",
      era: "2010s",
      color: "Black",
      style: "Fitted blazer",
     
    }
    
    
  ]
  
  // Global variables
  let currentPage = 1
  const productsPerPage = 9
  let filteredProducts = [...products]
  let activeFilters = {
    category: null,
    minPrice: 0,
    maxPrice: 3000,
    conditions: [],
    sizes: [],
  }
  
  // DOM elements
  const productsGrid = document.getElementById("products-grid")
  const paginationContainer = document.getElementById("pagination")
  const filterFeedback = document.getElementById("filter-feedback")
  const applyFiltersBtn = document.querySelector(".apply-filters-btn")
  const clearFiltersBtn = document.getElementById("clear-filters-btn")
  const categoryFilters = document.querySelectorAll(".category-filter")
  const conditionCheckboxes = document.querySelectorAll('input[name="condition"]')
  const sizeCheckboxes = document.querySelectorAll('input[name="size"]')
  const minPriceInput = document.getElementById("min-price-input")
  const maxPriceInput = document.getElementById("max-price-input")
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize cart for all pages
    initializeCart()
  
    if (window.location.pathname.includes("product-detail.html")) {
      loadProductDetail()
      return
    }
  
    if (window.location.pathname.includes("cart.html")) {
      renderCartPage()
      return
    }
  
   
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get("category")
  
    if (categoryParam) {
      activeFilters.category = categoryParam
    
      categoryFilters.forEach((filter) => {
        if (filter.dataset.category === categoryParam) {
          filter.classList.add("active")
        }
      })
    }
  
   
    applyFilters()
  
    setupEventListeners()
  })
  
  
  function setupEventListeners() {
   
    categoryFilters.forEach((filter) => {
      filter.addEventListener("click", function (e) {
        e.preventDefault()
  
       
        categoryFilters.forEach((f) => f.classList.remove("active"))
        this.classList.add("active")
  
  
        activeFilters.category = this.dataset.category
  
      
        currentPage = 1
        applyFilters()
  
      
        window.scrollTo(0, 0)
      })
    })
  
    // Apply filters button
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", () => {
      
        activeFilters.conditions = []
        conditionCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            activeFilters.conditions.push(checkbox.value)
          }
        })
  
       
        activeFilters.sizes = []
        sizeCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            activeFilters.sizes.push(checkbox.value)
          }
        })
  
        // Get price range
        activeFilters.minPrice = Number.parseInt(minPriceInput.value) || 0
        activeFilters.maxPrice = Number.parseInt(maxPriceInput.value) || 3000
  
      
        currentPage = 1
        applyFilters()
      })
    }
  
    // Clear filters button
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => {
    
        activeFilters = {
          category: null,
          minPrice: 0,
          maxPrice: 3000,
          conditions: [],
          sizes: [],
        }
  
        categoryFilters.forEach((f) => f.classList.remove("active"))
        conditionCheckboxes.forEach((checkbox) => (checkbox.checked = false))
        sizeCheckboxes.forEach((checkbox) => (checkbox.checked = false))
        if (minPriceInput) minPriceInput.value = 0
        if (maxPriceInput) maxPriceInput.value = 3000
  
        
        currentPage = 1
        applyFilters()
      })
    }
  
    // Add to cart functionality for all pages
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("quick-add-btn") || e.target.id === "add-to-cart-btn") {
        e.preventDefault()
  
        let productCard, productName, productPrice, productImage, productSize, productCategory
  
       
        if (e.target.id === "add-to-cart-btn") {
          productName = document.querySelector(".product-title").textContent
          productPrice = document.querySelector(".price").textContent
          productImage = document.getElementById("main-product-image").src
  
          
          productSize = "One Size"
          const sizeElement = document.querySelector(".attribute strong")
          if (sizeElement && sizeElement.textContent.includes("Size:")) {
            productSize = sizeElement.nextElementSibling.textContent.trim()
          }
  
          productCategory = document.querySelector(".category-badge").textContent
        }
        // Handle product grid add to cart
        else {
          productCard = e.target.closest(".product-card")
          productName = productCard.querySelector("h3 a").textContent
          productPrice = productCard.querySelector(".product-price").textContent
          productImage = productCard.querySelector("img").src
          productSize = productCard.getAttribute("data-size").toUpperCase()
          productCategory = productCard.querySelector(".product-category").textContent
        }
  
       
        const cartItem = {
          id: generateUniqueId(),
          name: productName,
          price: productPrice,
          size: productSize,
          quantity: 1,
          image: productImage,
          category: productCategory,
        }
  
     
        addItemToCart(cartItem)
  
        
        const originalText = e.target.textContent
        e.target.textContent = "Added to Cart!"
        e.target.style.backgroundColor = "#4caf50"
        e.target.style.color = "white"
  
        // Reset button after 2 seconds
        setTimeout(() => {
          e.target.textContent = originalText
          e.target.style.backgroundColor = ""
          e.target.style.color = ""
        }, 2000)
  
     
        showAddedToCartMessage(productName)
      }
    })
  
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", function () {
        const mainNav = document.querySelector(".main-nav")
        if (mainNav) {
          mainNav.classList.toggle("active")
          this.classList.toggle("active")
        }
      })
    }
  
   
    const filterSections = document.querySelectorAll(".filter-section h3")
    filterSections.forEach((section) => {
      section.addEventListener("click", function () {
      
        if (window.innerWidth < 768) {
          const parent = this.parentElement
          parent.classList.toggle("collapsed")
        }
      })
    })
  }
  
  
  function showAddedToCartMessage(productName) {
    const message = document.createElement("div")
    message.className = "added-to-cart-message"
    message.textContent = '${productName} added to cart';
    document.body.appendChild(message)
  
  
    setTimeout(() => {
      message.classList.add("fade-out")
      setTimeout(() => {
        document.body.removeChild(message)
      }, 500)
    }, 2500)
  }
  
  
  function applyFilters() {
  
    filteredProducts = products.filter((product) => {
      // Category filter
      if (activeFilters.category && product.category !== activeFilters.category) {
        return false
      }
  
      // Price range filter
      if (product.price < activeFilters.minPrice || product.price > activeFilters.maxPrice) {
        return false
      }
  
      // Condition filter
      if (activeFilters.conditions.length > 0 && !activeFilters.conditions.includes(product.condition)) {
        return false
      }
  
      // Size filter
      if (activeFilters.sizes.length > 0 && !activeFilters.sizes.includes(product.size)) {
        return false
      }
  
      return true
    })
  
    
    updateFilterFeedback()
  
    
    renderProducts()
  
    
    renderPagination()
  }
  
  
  function updateFilterFeedback() {
    if (!filterFeedback) return
  
    if (filteredProducts.length === 0) {
      filterFeedback.innerHTML = `
        <div class="no-products-message">
          <p>No products match your selected filters. Try adjusting your criteria.</p>
        </div>
      `
      
    } else {
      let feedbackText = `Showing ${filteredProducts.length} products`
  
      if (activeFilters.category) {
        const categoryName = getCategoryDisplayName(activeFilters.category)
        feedbackText += ` in ${categoryName}`
      }
  
      filterFeedback.innerHTML = `
        <div class="filter-results-count">
          <p>${feedbackText}</p>
        </div>
      `
    }
  }
  
  // Get category display name
  function getCategoryDisplayName(categoryCode) {
    const categoryMap = {
      men: "Men's Clothing",
      women: "Women's Clothing",
      kids: "Kids' Clothing",
      winter: "Winter Wear",
    }
  
    return categoryMap[categoryCode] || categoryCode
  }
  
  
  function renderProducts() {
    if (!productsGrid) return
  
    // Clear the products grid
    productsGrid.innerHTML = ""
  
  
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length)
  
    // Get current page products
    const currentProducts = filteredProducts.slice(startIndex, endIndex)
  
  
    if (currentProducts.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-products-message">
          <p>No products found. Try adjusting your filters.</p>
        </div>
      `
      return
    }
  
   
    currentProducts.forEach((product) => {
      const productCard = createProductCard(product)
      productsGrid.appendChild(productCard)
    })
  }
  
  function createProductCard(product) {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.dataset.condition = product.condition
    productCard.dataset.size = product.size
    productCard.dataset.price = product.price
    productCard.dataset.category = product.category
  
    // Create product card HTML
    productCard.innerHTML = `
      <div class="product-image">
        <a href="product-detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <button class="wishlist-btn"><i class="far fa-heart"></i></button>
        ${product.isNew ? '<span class="product-badge">New</span>' : ""}
      </div>
      <div class="product-details">
        <span class="product-category">${product.categoryDisplay}</span>
        <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
        <span class="product-price">NRs ${product.price}</span>
        <span class="product-size">Size: ${product.size.toUpperCase()}</span>
        <button class="quick-add-btn">Add to Cart</button>
      </div>
    `
  
    return productCard
  }
  
  function renderPagination() {
    if (!paginationContainer) return
  
    paginationContainer.innerHTML = ""
  
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  
    if (totalPages <= 1) {
      paginationContainer.style.display = "none"
      return
    }
  
   
    paginationContainer.style.display = "flex"
  
  
    if (currentPage > 1) {
      const prevBtn = document.createElement("button")
      prevBtn.className = "pagination-btn pagination-prev"
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>'
      prevBtn.addEventListener("click", () => {
        currentPage--
        renderProducts()
        renderPagination()
        window.scrollTo(0, 0)
      })
      paginationContainer.appendChild(prevBtn)
    }
  
    
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button")
      pageBtn.className = "pagination-btn"
      if (i === currentPage) {
        pageBtn.classList.add("active")
      }
      pageBtn.textContent = i
      pageBtn.dataset.page = i
      pageBtn.addEventListener("click", () => {
        currentPage = i
        renderProducts()
        renderPagination()
        window.scrollTo(0, 0)
      })
      paginationContainer.appendChild(pageBtn)
    }
  
    if (currentPage < totalPages) {
      const nextBtn = document.createElement("button")
      nextBtn.className = "pagination-btn pagination-next"
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>'
      nextBtn.addEventListener("click", () => {
        currentPage++
        renderProducts()
        renderPagination()
        window.scrollTo(0, 0)
      })
      paginationContainer.appendChild(nextBtn)
    }
  }
  
  
  function loadProductDetail() {
  
    const urlParams = new URLSearchParams(window.location.search)
    const productId = Number.parseInt(urlParams.get("id"))
  
    // Find product by ID
    const product = products.find((p) => p.id === productId)
  
  
    if (!product) {
      document.getElementById("product-detail-container").innerHTML = `
      <div class="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for could not be found.</p>
        <a href="products.html" class="btn btn-primary">Back to Products</a>
      </div>
    `
      return
    }
  
  
    document.title = `${product.name} - Sastosaman`
  
    renderBreadcrumbs(product)
  
  
    renderProductDetail(product)
  
  
    renderRelatedProducts(product)
  
   
    setupProductDetailEvents()
  }
  
  
  function setupProductDetailEvents() {
    
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
   
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        
        button.classList.add("active")
        const tabId = button.getAttribute("data-tab")
        document.getElementById(`${tabId}-tab`).classList.add("active")
      })
    })
  
  
    const thumbnails = document.querySelectorAll(".thumbnail")
    const mainImage = document.getElementById("main-product-image")
  
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
   
        thumbnails.forEach((thumb) => thumb.classList.remove("active"))
  
     
        thumbnail.classList.add("active")
  
     
        const imageUrl = thumbnail.getAttribute("data-image")
        if (mainImage && imageUrl) {
          mainImage.src = imageUrl
        }
      })
    })
  
   
    const zoomToggle = document.getElementById("zoom-toggle")
    const mainImageContainer = document.querySelector(".main-image")
  
    if (zoomToggle && mainImageContainer) {
      zoomToggle.addEventListener("click", () => {
        mainImageContainer.classList.toggle("zoomed")
  
   
        const zoomIcon = zoomToggle.querySelector("i")
        if (mainImageContainer.classList.contains("zoomed")) {
          zoomIcon.className = "fas fa-search-minus"
        } else {
          zoomIcon.className = "fas fa-search-plus"
        }
      })
    }
  }
  
  
  function renderBreadcrumbs(product) {
    const breadcrumbsContainer = document.getElementById("product-breadcrumbs")
    if (!breadcrumbsContainer) return
  
    breadcrumbsContainer.innerHTML = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="products.html">Shop</a></li>
      <li><a href="products.html?category=${product.category}">${product.categoryDisplay}</a></li>
      <li>${product.name}</li>
    </ul>
  `
  }
  
  
  function renderProductDetail(product) {
    const detailContainer = document.getElementById("product-detail-container")
    if (!detailContainer) return
  
    const conditionClass = product.condition.replace(" ", "-")
    const conditionDisplay = product.condition.charAt(0).toUpperCase() + product.condition.slice(1)
  
    detailContainer.innerHTML = `
    <div class="product-gallery">
      <div class="main-image">
        <img id="main-product-image" src="${product.image}" alt="${product.name}">
        <div class="image-controls">
          <button class="zoom-btn" id="zoom-toggle"><i class="fas fa-search-plus"></i></button>
        </div>
      </div>
      <div class="thumbnail-gallery">
        <button class="thumbnail active" data-image="${product.image}">
          <img src="${product.image}" alt="Front view">
        </button>
        <button class="thumbnail" data-image="${product.image}">
          <img src="${product.image}" alt="Side view">
        </button>
        <button class="thumbnail" data-image="${product.image}">
          <img src="${product.image}" alt="Back view">
        </button>
      </div>
    </div>
  
    <div class="product-info">
      <div class="product-badges">
        <span class="badge category-badge">${product.categoryDisplay}</span>
        <span class="badge brand-badge">${product.brand}</span>
        ${product.isNew ? '<span class="badge new-badge">New Arrival</span>' : ""}
      </div>
  
      <h1 class="product-title">${product.name}</h1>
      
      <div class="product-price-condition">
        <span class="price">NRs ${product.price}</span>
        <span class="condition ${conditionClass}">${conditionDisplay}</span>
      </div>
  
      <p class="product-description">
        ${product.description}
      </p>
  
      <div class="product-attributes">
        <div class="attribute">
          <i class="fas fa-tag"></i>
          <div>
            <strong>Size:</strong> ${product.size.toUpperCase()}
          </div>
        </div>
        
        <div class="attribute">
          <i class="fas fa-info-circle"></i>
          <div>
            <strong>Condition:</strong> ${conditionDisplay}
            <p class="condition-details">
              ${getConditionDescription(product.condition)}
            </p>
          </div>
        </div>
      </div>
  
      <div class="add-to-cart-section">
        <button id="add-to-cart-btn" class="add-to-cart-btn">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
  
      <!-- Product Details Tabs -->
      <div class="product-tabs">
        <div class="tabs-header">
          <button class="tab-btn active" data-tab="details">Details</button>
          <button class="tab-btn" data-tab="sizing">Sizing</button>
          <button class="tab-btn" data-tab="shipping">Shipping</button>
        </div>
  
        <div class="tab-content active" id="details-tab">
          <div class="detail-section">
            <h3>Material</h3>
            <p>${product.material}</p>
          </div>
          
          <div class="detail-section">
            <h3>Care Instructions</h3>
            <p>${product.care}</p>
          </div>
          
          <div class="detail-section">
            <h3>Item Specifics</h3>
            <ul class="specs-list">
              <li>Brand: ${product.brand}</li>
              <li>Size: ${product.size.toUpperCase()}</li>
              <li>Condition: ${conditionDisplay}</li>
              <li>Color: ${product.color}</li>
              <li>Style: ${product.style}</li>
              <li>Era: ${product.era}</li>
            </ul>
          </div>
        </div>
  
        <div class="tab-content" id="sizing-tab">
          <div class="sizing-info">
            <div class="sizing-header">
              <i class="fas fa-ruler"></i>
              <div>
                <h3>Measurements</h3>
                <p>Please note that these are approximate measurements and may vary slightly as these are pre-loved items.
                The highlighted row shows the size of this specific item.</p>
              </div>
            </div>
            
            <div class="size-chart">
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (cm)</th>
                    <th>Shoulder (cm)</th>
                    <th>Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ${product.size === "xs" ? 'class="current-size"' : ""}>
                    <td>XS</td>
                    <td>86-90</td>
                    <td>38-40</td>
                    <td>58-60</td>
                  </tr>
                  <tr ${product.size === "s" ? 'class="current-size"' : ""}>
                    <td>S</td>
                    <td>96-100</td>
                    <td>42-44</td>
                    <td>62-64</td>
                  </tr>
                  <tr ${product.size === "m" ? 'class="current-size"' : ""}>
                    <td>M</td>
                    <td>104-108</td>
                    <td>45-47</td>
                    <td>65-67</td>
                  </tr>
                  <tr ${product.size === "l" ? 'class="current-size"' : ""}>
                    <td>L</td>
                    <td>112-116</td>
                    <td>48-50</td>
                    <td>68-70</td>
                  </tr>
                  <tr ${product.size === "xl" ? 'class="current-size"' : ""}>
                    <td>XL</td>
                    <td>120-124</td>
                    <td>51-53</td>
                    <td>71-73</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="sizing-alert">
              <h4><i class="fas fa-exclamation-circle"></i> Sizing Tip</h4>
              <p>
                Second-hand clothing sizes may differ from modern sizing standards. We recommend checking the measurements
                rather than relying solely on the size label. When in doubt, choose a size up.
              </p>
            </div>
          </div>
        </div>
  
        <div class="tab-content" id="shipping-tab">
          <div class="shipping-info">
            <div class="shipping-section">
              <i class="fas fa-truck"></i>
              <div>
                <h3>Delivery</h3>
                <p>Standard delivery within 2-4 business days in Kathmandu Valley.
                  5-7 business days for other locations in Nepal.
                </p>
              </div>
            </div>
            
            <div class="shipping-section">
              <i class="fas fa-exchange-alt"></i>
              <div>
                <h3>Returns</h3>
                <p>
                  Returns accepted within 7 days of delivery if item doesn't match description.
                  Please note that return shipping costs are the responsibility of the buyer.
                </p>
              </div>
            </div>
            
            <div class="shipping-section">
              <i class="fas fa-credit-card"></i>
              <div>
                <h3>Payment Options</h3>
                <div class="payment-methods">
                  <div class="payment-method">
                    <img src="images/esewa-logo.png" alt="eSewa Payment" class="payment-logo">
                    <span>eSewa</span>
                  </div>
                  <div class="payment-method">
                    <img src="images/khalti-logo.png" alt="Khalti Payment" class="payment-logo">
                    <span>Khalti</span>
                  </div>
                  <div class="payment-method">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  }
  
  // Get condition description
  function getConditionDescription(condition) {
    const descriptions = {
      new: "Brand new or never worn item with original tags still attached.",
      "like-new": "Item appears unworn and shows no signs of use.",
      excellent: "Item shows minimal signs of wear. May have been worn a few times but maintained in great condition.",
      good: "Item shows some signs of wear but is still in good condition with plenty of life left.",
      fair: "Item shows noticeable signs of wear but is still functional and wearable.",
    }
  
    return descriptions[condition] || "Item is in used condition."
  }
  
  // Render related products
  function renderRelatedProducts(product) {
    const relatedContainer = document.getElementById("related-products-grid")
    if (!relatedContainer) return
  
    // Get related products (same category, different product)
    const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4) // Get up to 4 related products
  
    // If no related products, hide section
    if (related.length === 0) {
      document.querySelector(".related-products").style.display = "none"
      return
    }
  
    // Create product cards for related products
    related.forEach((relatedProduct) => {
      const productCard = createProductCard(relatedProduct)
      relatedContainer.appendChild(productCard)
    })
  }
  
  // Cart functionality
  function initializeCart() {
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Update cart count
    updateCartCount(cart.reduce((total, item) => total + item.quantity, 0))
  }
  
  function addItemToCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name && cartItem.size === item.size)
  
    if (existingItemIndex !== -1) {
      // If item already exists, update the quantity
      cart[existingItemIndex].quantity += 1
    } else {
      // If item doesn't exist, add it to the cart
      cart.push(item)
    }
  
    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))
  
    // Update cart count
    updateCartCount(cart.reduce((total, item) => total + item.quantity, 0))
  }
  
  function updateCartCount(count) {
    const cartCountElements = document.querySelectorAll(".cart-count")
    cartCountElements.forEach((element) => {
      element.textContent = count
    })
  }
  
  function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9)
  }
  
  // Render cart page
  function renderCartPage() {
    const cartItemsContainer = document.getElementById("cart-items-container")
    const emptyCart = document.getElementById("empty-cart")
    const cartWithItems = document.getElementById("cart-with-items")
  
    if (!cartItemsContainer || !emptyCart || !cartWithItems) return
  
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Show empty cart message if cart is empty
    if (cart.length === 0) {
      emptyCart.style.display = "block"
      cartWithItems.style.display = "none"
      return
    }
  
    // Show cart with items
    emptyCart.style.display = "none"
    cartWithItems.style.display = "block"
  
    // Clear container
    cartItemsContainer.innerHTML = ""
  
    // Calculate total
    let total = 0
  
    // Add each item to cart
    cart.forEach((item) => {
      // Parse price (remove "NRs " prefix if present)
      const priceText = item.price.toString().replace("NRs ", "")
      const itemPrice = Number.parseFloat(priceText)
      const itemTotal = itemPrice * item.quantity
      total += itemTotal
  
      const cartItemHTML = `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-product">
          <div class="cart-product-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-product-details">
            <h3>${item.name}</h3>
            <span class="product-category">${item.category || "Clothing"}</span>
            <span class="product-size">Size: ${item.size}</span>
          </div>
        </div>
        <div class="cart-price">NRs ${itemPrice}</div>
        <div class="cart-quantity">
          <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" data-id="${item.id}">
          <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
        </div>
        <div class="cart-total">NRs ${itemTotal}</div>
        <button class="cart-remove" data-id="${item.id}">
          <i class="fas fa-trash-alt"></i> Remove
        </button>
      </div>
    `
  
      cartItemsContainer.innerHTML += cartItemHTML
    })
  
    // Update totals
    const subtotalElement = document.getElementById("cart-subtotal")
    const totalElement = document.getElementById("cart-total")
  
    if (subtotalElement) subtotalElement.textContent = `NRs ${total}`
    if (totalElement) totalElement.textContent = `NRs ${total}`
  
    // Add event listeners for quantity buttons
    const decreaseBtns = document.querySelectorAll(".decrease-btn")
    const increaseBtns = document.querySelectorAll(".increase-btn")
    const quantityInputs = document.querySelectorAll(".quantity-input")
    const removeButtons = document.querySelectorAll(".cart-remove")
  
    decreaseBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        updateCartItemQuantity(id, -1)
      })
    })
  
    increaseBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        updateCartItemQuantity(id, 1)
      })
    })
  
    quantityInputs.forEach((input) => {
      input.addEventListener("change", function () {
        const id = this.getAttribute("data-id")
        const newQuantity = Number.parseInt(this.value)
        setCartItemQuantity(id, newQuantity)
      })
    })
  
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        removeCartItem(id)
      })
    })
  }
  
  // Update cart item quantity
  function updateCartItemQuantity(id, change) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const itemIndex = cart.findIndex((item) => item.id === id)
  
    if (itemIndex >= 0) {
      cart[itemIndex].quantity += change
  
      // Ensure quantity is at least 1
      if (cart[itemIndex].quantity < 1) {
        cart[itemIndex].quantity = 1
      }
  
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(cart))
  
      // Refresh cart display
      if (window.location.pathname.includes("cart.html")) {
        renderCartPage()
      }
  
      // Update cart count
      updateCartCount(cart.reduce((total, item) => total + item.quantity, 0))
    }
  }
  
  // Set cart item quantity
  function setCartItemQuantity(id, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const itemIndex = cart.findIndex((item) => item.id === id)
  
    if (itemIndex >= 0) {
      cart[itemIndex].quantity = quantity
  
      // Ensure quantity is at least 1
      if (cart[itemIndex].quantity < 1) {
        cart[itemIndex].quantity = 1
      }
  
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(cart))
  
      // Refresh cart display
      if (window.location.pathname.includes("cart.html")) {
        renderCartPage()
      }
  
      // Update cart count
      updateCartCount(cart.reduce((total, item) => total + item.quantity, 0))
    }
  }
  
  // Remove cart item
  function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart = cart.filter((item) => item.id !== id)
  
    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))
  
    // Refresh cart display
    if (window.location.pathname.includes("cart.html")) {
      renderCartPage()
    }
  
    // Update cart count
    updateCartCount(cart.reduce((total, item) => total + item.quantity, 0))
  }
  
  // Add styles for added to cart message
  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
      .added-to-cart-message {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }
      
      .added-to-cart-message.fade-out {
        opacity: 0;
        transition: opacity 0.5s ease-out;
      }
      
      @keyframes slideIn {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    </style>
    `,
  )