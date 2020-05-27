

let productos = document.querySelector("#productos")



const lista = () => {

    productos.innerHTML = ""

    for (let i = 1; i <= 12; i++) {

        productos.innerHTML +=
            `
        <div class="card col-3 mb-1">
        <img class="card-img-top" src="../img/toalla-negra.jpg" alt="Card image cap">
        <div class="card-body">
            <a class="card-title " href="#s">Juego de sábana de cama Mellanni, microfibra </a>
            <p class="card-text">
                <span><sup>USD</sup> <strong class="h4">24</strong> <sup>70</sup></span>
                <span class="h3">-</span>
                <span><sup>USD</sup> <strong class="h4">24</strong> <sup>70</sup></span>
            </p>
            <p>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <a href="#s">55,000</a>
            </p>
            <p>
                <i>
                    “Great quallity linen. Very satisfied.”
                    - Amazon Customer</i>
            </p>
        </div>
    </div>
        `
    }
}

window.addEventListener('load', lista)
