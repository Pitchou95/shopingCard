document.body.style.backgroundColor = "#99004C";
// 9E205F/
var cartDiv = document.getElementById('cart');
cartDiv.style.margin = "50px";
cartDiv.style.backgroundColor = "#660033";
cartDiv.style.boxShadow = "1px 1px 5px 10px #660033";
cartDiv.style.height = "525px";

const newTitle = document.createElement('h1');
const titleCont = document.createTextNode('My Shopping Cart');
newTitle.appendChild(titleCont);

const element = document.getElementById("cart");
element.appendChild(newTitle);

const attr = document.createAttribute("id");
attr.value = "title";
const tc = document.getElementsByTagName("h1")[0];
tc.setAttributeNode(attr);

tc.style.color = "#FFCCCC";
tc.style.fontFamily = "'Itim', cursive";
tc.style.fontSize = "32px"
tc.style.textAlign = "center";
// Data_Product
const dataProd = [
    {
        prodId: 1,
        prodName: "Grey Dress Party",
        prodPrice: 225,
        prodImg: "Pics/Grey-Dress-Party.jpg",
        prodQuantity: 0,
        buyed: true,
    },
    {
        prodId: 2,
        prodName: "Somo Dress Party",
        prodPrice: 189,
        prodImg: "Pics/Somo-Dress-Party.jpg",
        prodQuantity: 0,
        buyed: true,
    },
    {
        prodId: 3,
        prodName: "Brown Dress",
        prodPrice: 129,
        prodImg: "Pics/Brown-Dress.jpg",
        prodQuantity: 0,
        buyed: true,
    },
    {
        prodId: 4,
        prodName: "White & Darkred Dress",
        prodPrice: 179,
        prodImg: "Pics/Dresses&Headband.jpg",
        prodQuantity: 0,
        buyed: true,

    }
]

let table = document.createElement('table');



//thead
const thead = document.createElement('thead');
thead.setAttribute("id", "thead");
table.appendChild(thead);

const trh = document.createElement('tr')
trh.setAttribute("id", "trhead");

const th0 = document.createElement('th');

const th1 = document.createElement('th');
const thel1 = document.createTextNode('Product');
th1.appendChild(thel1);

const th2 = document.createElement('th');
const thel2 = document.createTextNode('Quantity');
th2.appendChild(thel2);

const th3 = document.createElement('th');
const thel3 = document.createTextNode('Unit Price');
th3.appendChild(thel3);

const th4 = document.createElement('th');
const thel4 = document.createTextNode('Price');
th4.appendChild(thel4);

trh.appendChild(th0);
trh.appendChild(th1);
trh.appendChild(th2);
trh.appendChild(th3);
trh.appendChild(th4);

thead.appendChild(trh);
table.appendChild(thead);

//thead style
th2.style.padding = "5px 20px";
th3.style.padding = "5px 20px";
th4.style.padding = "5px 25px";


// tbody
const tbody = document.createElement('tbody');



dataProd.forEach(item => {
    const tr = document.createElement('tr');

    const td0 = document.createElement('td');
    const remove = document.createElement('i');
    remove.setAttribute('class', "fa-solid fa-trash-can");
    remove.setAttribute('style', "Color : #9E205F");
    remove.style.cursor = 'pointer';
    remove.addEventListener('click', () => {
        tr.remove();
        item.buyed = false
        totalPrice.innerHTML = getTotale()
    })

    const like = document.createElement('i');
    like.setAttribute('class', "fa-regular fa-heart");
    like.setAttribute('style', "Color : #9E205F");
    like.style.paddingRight = "15px";
    like.style.cursor = 'pointer';
    like.addEventListener('click', () => {
        like.classList.toggle('fa-solid')
    })
    td0.appendChild(like);
    td0.appendChild(remove);
    tr.appendChild(td0);




    const td1 = document.createElement('td');
    let td_Div = document.createElement('div');
    td_Div.setAttribute('class', 'container');

    let img = document.createElement('img');
    img.setAttribute('class', 'd-flex');
    img.setAttribute('src', item.prodImg);
    td_Div.appendChild(img);

    let tit_h3 = document.createElement('h3');
    tit_h3.setAttribute('class', 'd-flex');
    tit_h3.innerHTML = item.prodName;
    td_Div.appendChild(tit_h3);
    td1.appendChild(td_Div);
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    let prodQuantity = document.createElement('input');
    prodQuantity.setAttribute('type', 'number');
    prodQuantity.setAttribute('value', '0');
    prodQuantity.setAttribute('min', '0');
    prodQuantity.setAttribute('class', 'Q');
    td2.appendChild(prodQuantity);
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    let price = document.createElement('h4');
    price.innerHTML = item.prodPrice + " $";
    td3.appendChild(price);
    tr.appendChild(td3);

    const td4 = document.createElement('td');
    let UP = document.createElement('span');
    UP.setAttribute('class', 'up');
    prodQuantity.addEventListener("change", (e) => {
        item.prodQuantity = e.target.value;
        let prix = item.prodQuantity * item.prodPrice;
        UP.innerHTML = prix + " $";
        totalPrice.innerHTML = getTotale() + " $"

    });


    td4.appendChild(UP);
    tr.appendChild(td4);
    tbody.appendChild(tr);

});

table.appendChild(tbody);
element.appendChild(table);


let label = document.createElement('label');
label.textContent = ('Total Price :');

var totalPrice = document.createElement('span');
totalPrice.setAttribute("style", "color:white")

function getTotale() {

    return dataProd.filter(e => e.buyed == true ? e : "").reduce((accumulateur, currentvalue) => accumulateur += currentvalue.prodPrice * currentvalue.prodQuantity, 0)

}

label.style.color = "#660033";
label.style.fontFamily = "'Itim', cursive";
label.style.fontSize = "25px";
label.style.backgroundColor = "#FFCCCC";
totalPrice.style.padding = "20px"
totalPrice.style.color = "#660033";

label.style.marginLeft = "251px";

label.appendChild(totalPrice);
element.appendChild(label);

