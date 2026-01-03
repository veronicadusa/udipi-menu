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
    ["Idly (2 pcs)", 55],
    ["Sambar Idly (2 pcs)", 60],
    ["Idly Wada (1+1)", 70],
    ["Idly Wada (2+1)", 85],
    ["Ghee Idly (2 pcs)", 75],
    ["Ghee Karam Idly (2 pcs)", 85],
    ["Udipi Special Sponge Idly (3 pcs)", 75],
    ["Wada (2 pcs)", 80],
    ["Sambar Wada (1 pc)", 45],
    ["Sambar Wada (2 pcs)", 90],
    ["Dahi Wada (1 pc)", 75],
    ["Upma / Tomato Bath (Morning)", 60],
    ["Chow Chow Bath (Morning)", 80],
    ["Rice Pongal (Morning)", 80],
    ["Bisi Bele Bath (Morning)", 80],
    ["Rava Kesari Bath (Sweet)", 80],
    ["Mysore Bhaji (5 pcs)", 60],
    ["Poori Aloo Curry (3 pcs)", 90],
    ["Poori Veg Kurma (3 pcs)", 90],
    ["Upma + 1 Wada Combo", 95],
    ["Rice Pongal + 1 Wada Combo", 125],
    ["Bisi Bele Bath + 1 Wada Combo", 125]
  ],

  dosa: [
    ["Plain Dosa", 70],
    ["Masala Dosa", 85],
    ["Ghee Roast Masala Dosa", 115],
    ["Butter Masala Dosa", 115],
    ["Mysore Masala Dosa", 95],
    ["Schezwan Masala Dosa", 95],
    ["Karampodi Masala Dosa", 85],
    ["Onion Dosa", 90],
    ["Onion Masala Dosa", 95],
    ["Upma Dosa", 95],
    ["Special Masala Dosa", 95],
    ["Steam Dosa", 95],
    ["Udipi Special Sponge Dosa", 95],
    ["Rava Dosa", 100],
    ["Onion Rava Dosa", 100],
    ["Set Dosa", 95],
    ["Onion Set Dosa", 100],
    ["Onion Uttapam", 95],
    ["Tomato Onion Uttapam", 100],
    ["Onion Pesarattu", 90],
    ["Upma Pesarattu", 95],
    ["Plain Pesarattu", 80],
    ["Rava Masala Dosa", 100],
    ["Onion Rava Masala Dosa", 120],
    ["Devangere Benne Dosa", 90],
    ["Chinese Dosa", 130],
    ["Spring Roll Dosa", 130],
    ["Mushroom Dosa", 140],
    ["Addon Ghee / Butter", 30],
    ["Addon Paneer / Cheese", 35]
  ],

  riceitems: [
    ["Curd Rice", 75],
    ["Lemon Rice", 75],
    ["Tomato Rice", 75],
    ["Veg Biryani", 140]
  ],

  ricecombos: [
    ["Dal Fry Chawal", 120],
    ["Chole Chawal", 120]
  ],

  roticombos: [
    ["Chole Bhature", 180],
    ["3 Chapathis + Curry + Chutney", 90],
    ["2 Parathas + Curry + Chutney", 100],
    ["Aloo Paratha", 130],
    ["Paneer Paratha", 140]
  ],

  soups: [
    ["Tomato Soup", 110],
    ["Sweet Corn Soup", 110],
    ["Lemon Coriander Soup", 110],
    ["Manchow Soup", 110],
    ["Hot n Sour Soup", 110]
  ],

  indianbreads: [
    ["Phulka", 20],
    ["Lachha Paratha", 30],
    ["Chapathi", 25]
  ],

  thali: [
    ["South Indian Thali (Limited)", 160],
    ["Mini Thali (Limited)", 120]
  ],

  chinesestarter: [
    ["Veg Manchurian", 190],
    ["Gobi Manchurian", 190],
    ["Honey Chilly Potato", 210],
    ["Crispy Corn Chilly Pepper", 210],
    ["Chilly Paneer", 230],
    ["Paneer Manchurian", 230],
    ["Baby Corn Manchurian", 210],
    ["Mushroom Manchurian", 220]
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
    ["Aloo Gobi (Tawa)", 160],
    ["Veg Keema Masala", 180],
    ["Veg Chatpata", 190],
    ["Kadai Veg", 190],
    ["Mutter Paneer", 200],
    ["Paneer Butter Masala", 210],
    ["Mushroom Butter Masala", 210],
    ["Paneer Chatpata", 210],
    ["Kadai Paneer", 220],
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
    ["Veg Fried Rice", 180],
    ["Veg Soft Noodles", 180],
    ["Chilly Garlic Noodles", 190],
    ["Schezwan Fried Rice / Noodles", 190],
    ["Paneer/Mushroom/Babycorn Fried Rice", 210],
    ["Paneer/Mushroom/Babycorn Noodles", 210],
    ["Chinese Combo", 190],
    ["Triple Fried Rice", 200]
  ],

  chawal: [
    ["Veg Pulao", 170],
    ["North Indian Veg Biryani", 180],
    ["Hyderabadi Veg Biryani (Spicy)", 190],
    ["Paneer Biryani", 210],
    ["Mushroom Biryani", 210],
    ["Babycorn Biryani", 210],
    ["Kaju Pulao", 200],
    ["Paneer/Mushroom/Babycorn Biryani", 200]
  ],

  daldelicacies: [
    ["Dal Fry", 150],
    ["Dal Tadka", 160],
    ["Jeera Dal", 170]
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
