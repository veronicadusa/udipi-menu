function openMenu(){
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("categories").classList.add("active");
}

function backToCategories(){
  document.getElementById("items").classList.remove("active");
  document.getElementById("categories").classList.add("active");
}

function backToHome(){
  document.getElementById("items").classList.remove("active");
  document.getElementById("categories").classList.remove("active");
  document.getElementById("welcome").classList.add("active");
}

const categories = [
 {id:"tiffins", name:"Tiffins", img:"assets/categories/tiffins.png"},
 {id:"dosa", name:"Dosa", img:"assets/categories/dosa.png"},
 {id:"riceitems", name:"Rice Items", img:"assets/categories/riceitems.png"},
 {id:"soups", name:"Soups", img:"assets/categories/soups.png"},
 {id:"snacks", name:"Snacks", img:"assets/categories/snacks.png"},
 {id:"beverages", name:"Beverages", img:"assets/categories/beverages.png"},
 {id:"freshjuices", name:"Fresh Juices", img:"assets/categories/freshjuices.png"},
 {id:"sandwiches", name:"Sandwiches", img:"assets/categories/sandwiches.png"},
 {id:"chinesestarter", name:"Chinese Starters", img:"assets/categories/chinesestarter.png"},
 {id:"chineserice", name:"Chinese Rice & Noodles", img:"assets/categories/chineserice&noodles.png"},
 {id:"tandoori", name:"Tandoori Starters", img:"assets/categories/tandooristarters.png"},
 {id:"thali", name:"Thali", img:"assets/categories/thali.png"},
 {id:"ricecombos", name:"Rice Combos", img:"assets/categories/ricecombos.png"},
 {id:"indianbreads", name:"Indian Breads", img:"assets/categories/indianbreads.png"},
 {id:"northindian", name:"North Indian", img:"assets/categories/northindian.png"},
 {id:"maincourse", name:"Main Course", img:"assets/categories/maincourse.png"},
 {id:"chawal", name:"Chawal", img:"assets/categories/chawal.png"},
 {id:"daldelicacies", name:"Dal Delicacies", img:"assets/categories/daldelicacies.png"}
];

const menuData = {

  tiffins: [
    ["Idly (2 pcs)", 60],
    ["Sambar Idly (2 pcs)", 70],
    ["Idly Wada (1+1)", 80],
    ["Idly Wada (2+1)", 90],
    ["Ghee Idly (2 pcs)", 80],
    ["Ghee Karam Idly (2 pcs)", 90],
    ["Udipi Special Sponge Idly (3 pcs)", 75],
    ["Wada (2 pcs)", 80],
    ["Sambar Wada (1 pc)", 45],
    ["Sambar Wada (2 pcs)", 90],
    ["Dahi Wada (1 pc)", 75],
    ["Upma / Tomato Bath (Morning)", 60],
    ["Chow Chow Bath (Morning)", 80],
    ["Rice Pongal (Morning)", 90],
    ["Bisi Bele Bath (Morning)", 80],
    ["Rava Kesari Bath (Sweet)", 90],
    ["Mysore Bhaji (5 pcs)", 65],
    ["Poori Aloo Curry (3 pcs)", 100],
    ["Poori Veg Kurma (3 pcs)", 100],
    ["Upma + 1 Wada Combo", 95],
    ["Rice Pongal + 1 Wada Combo", 125],
    ["Bisi Bele Bath + 1 Wada Combo", 125]
  ],

  dosa: [
    ["Plain Dosa", 70],
    ["Masala Dosa", 90],
    ["Ghee Roast Masala Dosa", 125],
    ["Butter Masala Dosa", 125],
    ["Mysore Masala Dosa", 105],
    ["Schezwan Masala Dosa", 100],
    ["Karampodi Masala Dosa", 100],
    ["Onion Dosa", 95],
    ["Onion Masala Dosa", 110],
    ["Upma Dosa", 105],
    ["Special Masala Dosa", 110],
    ["Steam Dosa", 105],
    ["Udipi Special Sponge Dosa", 95],
    ["Rava Dosa", 100],
    ["Onion Rava Dosa", 110],
    ["Set Dosa", 110],
    ["Onion Set Dosa", 120],
    ["Onion Uttapam", 100],
    ["Tomato Onion Uttapam", 100],
    ["Onion Pesarattu", 100],
    ["Upma Pesarattu", 110],
    ["Plain Pesarattu", 90],
    ["Rava Masala Dosa", 100],
    ["Onion Rava Masala Dosa", 120],
    ["Devangere Benne Dosa", 100],
    ["Chinese Dosa", 130],
    ["Spring Roll Dosa", 130],
    ["Mushroom Dosa", 140],
    ["Addon Ghee / Butter", 30],
    ["Addon Paneer / Cheese", 35]
  ],

  riceitems: [
    ["Curd Rice", 80],
    ["Lemon Rice", 85],
    ["Tomato Rice", 85],
    ["Veg Biryani", 140]
  ],

  ricecombos: [
    ["Dal Fry Chawal", 120],
    ["Chole Chawal", 120]
  ],

  roticombos: [
    ["Chole Bhature", 180],
    ["3 Chapathis + Curry + Chutney", 100],
    ["2 Parathas + Curry + Chutney", 100],
    ["Aloo Paratha", 150],
    ["Paneer Paratha", 150]
  ],

  soups: [
    ["Tomato Soup", 120],
    ["Sweet Corn Soup", 120],
    ["Lemon Coriander Soup", 120],
    ["Manchow Soup", 120],
    ["Hot n Sour Soup", 120]
  ],

  indianbreads: [
    ["Phulka", 30],
    ["Lachha Paratha", 30],
    ["Chapathi", 25]
  ],

  thali: [
    ["South Indian Thali (Limited)", 160],
    ["Mini Thali (Limited)", 120]
  ],

  chinesestarter: [
    ["Veg Manchurian", 200],
    ["Gobi Manchurian", 200],
    ["Honey Chilly Potato", 250],
    ["Crispy Corn Chilly Pepper", 250],
    ["Chilly Paneer", 230],
    ["Paneer Manchurian", 250],
    ["Baby Corn Manchurian", 250],
    ["Gobi 65", 230],
    ["Mushroom Manchurian", 250],
    ["Panner 65", 250],
    ["Mushroom 65", 240]
  ],

  tandooristarters: [
    ["Hara Bhara Kabab", 210],
    ["Stuffed Mushroom", 230],
    ["Paneer Ghee Roast", 245],
    ["Paneer Tikka", 240],
    ["Hariyali Paneer Tikka", 250],
    ["Tandoori Platter", 300]
  ],

  maincourse: [
    ["Aloo Gobi (Tawa)", 200],
    ["Veg Keema Masala", 200],
    ["Veg Chatpata", 200],
    ["Kadai Veg", 200],
    ["Mutter Paneer", 230],
    ["Paneer Butter Masala", 230],
    ["Mushroom Butter Masala", 230],
    ["Paneer Chatpata", 230],
    ["Kadai Paneer", 250],
    ["Shahi Paneer", 280]
  ],

  northindian: [
    ["Paneer Pasanda", 250],
    ["Veg Kofta", 230],
    ["Malai Kofta", 250],
    ["Paneer Patiala", 230],
    ["Veg Patiala", 230],
    ["Navratan Kurma", 300],
    ["Paneer Ghee Roast", 280],
    ["Mushroom Tikka", 250],
    ["Hara Bhara Kabab", 300],
    ["Paneer Tikka", 270],
    ["Hariyali Paneer Tikka", 260],
    ["Stuffed Mushroom", 260],
    ["Tandoori Plate", 350],
    ["Seekh Kabab", 250],
    ["Aloo Tikka", 200],
    ["Gobi Tikka", 200],
    ["Paneer Rangila", 250]
  ],

  chineserice: [
    ["Veg Fried Rice", 200],
    ["Veg Soft Noodles", 200],
    ["Chilly Garlic Noodles", 200],
    ["Schezwan Fried Rice / Noodles", 200],
    ["Paneer Fried Rice", 230],
    ["Paneer Noodles", 220],
    ["Mushroom Noodles", 220],
    ["Mushroom Fried Rice", 220],
    ["Babycorn Noodles", 210],
    ["Babycorn Fried Rice", 230],    
    ["Chinese Combo", 190],
    ["Triple Fried Rice", 200]
  ],

  chawal: [
    ["Veg Pulao", 180],
    ["North Indian Veg Biryani", 180],
    ["Hyderabadi Veg Biryani (Spicy)", 210],
    ["Paneer Biryani", 210],
    ["Mushroom Biryani", 210],
    ["Babycorn Biryani", 210],
    ["Kaju Pulao", 230],
    ["Paneer/Mushroom/Babycorn Biryani", 220]
  ],

  daldelicacies: [
    ["Dal Fry", 170],
    ["Dal Tadka", 170],
    ["Jeera Dal", 160]
  ],

  beverages: [
    ["Tea", 25],
    ["Lemon Tea", 30],
    ["Ginger Tea", 30],
    ["Coffee", 30],
    ["Sweet Lassi", 60],
    ["Milk", 25],
    ["Horlicks", 35],
    ["Boost", 35],
    ["Buttermilk", 45]
  ],

  freshjuices: [
    ["Lemon", 40],
    ["Watermelon", 65],
    ["Grapes", 80],
    ["Pineapple", 65],
    ["Muskmelon", 70],
    ["Musumbi", 65],
    ["Apple", 70],
    ["Orange (Seasonal)", 85],
    ["Mango (Seasonal)", 90]
  ],

  snacks: [
    ["Aloo Bhaji", 40],
    ["Banana Bhaji", 50],
    ["Mirchi Bhaji", 50],
    ["Onion Pakoda", 50],
    ["Punugulu", 70],
    ["Aloo Bonda", 50]
  ],

  sandwiches: [
    ["Butter Sandwich", 50],
    ["Chutney Sandwich", 70],
    ["Veg Sandwich", 85],
    ["Cheese Sandwich", 85],
    ["Chutney Cheese Sandwich", 105],
    ["Schezwan Sandwich", 110],
    ["Veg Cheese Sandwich", 120]
  ]

};


const grid = document.getElementById("categoryGrid");

categories.forEach(c=>{
  const d=document.createElement("div");
  d.className="card";
  d.innerHTML = `<img src="${c.img}">`;
  d.onclick=()=>showItems(c.id,c.name);
  grid.appendChild(d);
});

function showItems(id,title){
  document.getElementById("categories").classList.remove("active");
  document.getElementById("items").classList.add("active");
  document.getElementById("sectionTitle").innerText=title;
  const ul=document.getElementById("itemList");
  ul.innerHTML="";
  (menuData[id]||[]).forEach(i=>{
    ul.innerHTML+=`<li><span>${i[0]}</span><b>₹${i[1]}</b></li>`;
  });
}


