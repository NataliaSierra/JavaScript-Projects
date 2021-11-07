const main = document.getElementById('main');
const btn_carrito = document.querySelector('.fa-cart-plus');
const cart = document.querySelector('.cart');
carrito = [];

const generator = (id,name, img, price) =>{

    const card_render = document.createElement('div');
    const header_card = document.createElement('div');
    const h2_title = document.createElement('h2');
    const card_main = document.createElement('div');
    const div_image = document.createElement('div');
    const image_card = document.createElement('img');
    const btn_card = document.createElement('button');
    const price_card = document.createElement('h3');

    card_render.classList.add('card');
    header_card.classList.add('header-card');
    h2_title.setAttribute('id', 'h2');
    h2_title.textContent = name;
    card_main.classList.add('card-main');
    div_image.classList.add('card-image');
    image_card.setAttribute('src',img); 
   
    image_card.setAttribute('alt','Image Card');
    image_card.classList.add('img'); 
    price_card.setAttribute('id','price');
    price_card.textContent = price;
    btn_card.setAttribute('id',id);
    btn_card.textContent = 'Agregar al carrito';

    btn_card.addEventListener('click',agregarCarrito);
    

    div_image.appendChild(image_card);
    main.appendChild(card_render);
    header_card.appendChild(h2_title);
    card_render.appendChild(header_card);
    card_render.appendChild(card_main);
    card_render.appendChild(div_image);
    card_render.appendChild(price_card);
    card_render.appendChild(btn_card);
    main.appendChild(card_render);
}

function create_cards() {
    products.forEach(item =>{
        generator(item.id,item.name,item.img,item.price);
        console.log(item.id,item.name,item.img,item.price);
    });
}
create_cards();


const restarProducto = (e) => {
    let item = e.target.getAttribute('id') 
    carrito.splice(parseInt(carrito.indexOf(item)),1)
    mostrarCarrito();
}

const eliminarProducto = (e) => {
    let item = e.target.getAttribute('id');
    
    carrito = carrito.filter((id) => {
        return id !== item;
    });

    mostrarCarrito();
}

const mostrarCarrito = () => {
    cart.innerHTML = ''
    let lista = [...new Set(carrito)]; 
    
    lista.forEach(item => {
        const todos_productos = products.filter(products => {
            return products.id === parseInt(item);
            
        })
        console.log(lista);
        let cont = 0;

        for(let id of carrito) {
            if(id === item) {
                cont++;
            }
        }
       
        const Saving = document.createElement('div');
        const name = document.createElement('p');
        const price = document.createElement('p');
        const contador = document.createElement('p');
        const btn_suma = document.createElement('button');
        const btn_resta = document.createElement('button');
        const btn_eliminar = document.createElement('button');
        btn_suma.setAttribute('id', todos_productos[0].id);
        btn_resta.setAttribute('id',todos_productos[0].id);
        btn_eliminar.setAttribute('id',todos_productos[0].id);
        
        name.textContent = todos_productos[0].name;
        price.textContent = todos_productos[0].price;
        btn_suma.textContent = '+';
        btn_resta.textContent = '-'
        btn_eliminar.textContent = 'X';
        contador.textContent = cont;

        Saving.classList.add('container_products')
        Saving.appendChild(name);
        Saving.appendChild(price);
        Saving.appendChild(contador)
        Saving.appendChild(btn_suma);
        Saving.appendChild(btn_resta);
        Saving.appendChild(btn_eliminar)

        btn_suma.addEventListener('click', agregarCarrito);
        btn_resta.addEventListener('click', restarProducto);
        btn_eliminar.addEventListener('click', eliminarProducto)
        cart.appendChild(Saving);

          
    })
}

function agregarCarrito  (e) {
    carrito.push(e.target.getAttribute('id'));
    mostrarCarrito();
}

generator();

btn_carrito.addEventListener('click', () => {
    cart.classList.toggle('ocult');
    
})


