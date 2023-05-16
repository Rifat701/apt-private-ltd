// product data { OBJECT }
let products = [
  {
    id: 1,
    image:
      "http://www.pakonagro.com/urun_res/_turkiye-menseli-spaniola-tipi-nohut-9mm1535708874.jpg",
    title: "origin red hole",
  },
  {
    id: 2,
    image:
      "http://www.pakonagro.com/urun_res/_turkiye-menseli-futbol-tipi-kirmizi-mercimek1536157556.jpg",
    title: "origin red holee",
  },
  {
    id: 3,
    image:
      "http://www.pakonagro.com/urun_res/_turkiye-menseli-kabuklu-kirmizi-mercimek.png",
    title: "origin red hole",
  },
  {
    id: 4,
    image: "http://www.pakonagro.com/urun_res/_bugday-.jpg",
    title: "origin red hole",
  },
  {
    id: 5,
    image: "http://www.pakonagro.com/urun_res/_bulgur.jpg",
    title: "origin red hole",
  },
  {
    id: 6,
    image: "http://www.pakonagro.com/urun_res/_kimyon-.jpg ",
    title: "origin red hole",
  },
];

const product_wrapper = document.querySelector(".product_wrapper");
const product_overlay = document.querySelector(".product_overlay");
products.map(({ id, image }) => {
  product_wrapper.innerHTML += `
        <div class="product_content">
            <div class="product_img d-flex justify-content-center align-items-end pb-lg-4 w-100" style="background-image: url('${image}');">
                <button href="#" id="${id}" class="more_btn px-lg-5 py-lg-2 text-uppercase text-white rounded-pill">
                    more
                </button>
            </div>
            </div>
            `;
});

// Product Overlay
// dom selector
// const more_btn = document.querySelectorAll('button');
const __productOne = document.getElementById("1");
const __productTwo = document.getElementById("2");
const __productThree = document.getElementById("3");
const __productFour = document.getElementById("4");
const __productFive = document.getElementById("5");
const __productSix = document.getElementById("6");
const cross_svg = document.querySelector(".cross_area");

__productOne.addEventListener("click", () => {
  product_overlay.style.display = "block";
});
// addevent listner
cross_svg.addEventListener("click", () => {
  product_overlay.style.display = "none";
});

const productOne = ({ items }) => {
  console.log(items[0].title);
  product_overlay.innerHTML += `
        < div class="cross_area position-absolute top-0 end-0 mt-lg-3 me-lg-3" >
            <i class="fas fa-times cross_svg"></i>
    </ >
        <div class="row">
            <div class="col-lg-4">
                <div class="overlay_img_area">
                    <img src="${products[0].image}" alt="image" />
                </div>
            </div>
            <div class="col-lg-8">
                <div class="product_overlay_content">
                    <h4 class="product_overlay_title text-dark text-capitalize">
                        ${title}
                    </h4>
                    <h5 class="product_overlay_subtitle text-red"></h5>
                    <div
                        class="overlay_product_desc d-flex justify-content-center align-items-start flex-column"
                    >
                        <span class="li_desc text-lowercase mb-lg-2"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                        <span class="li_desc text-lowercase mb-lg-2"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                        <span class="li_desc text-lowercase mb-lg-2"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                        <span class="li_desc text-lowercase mb-lg-2"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                        <span class="li_desc text-lowercase mb-lg-2"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                        <span class="li_desc text-lowercase mb-lg-2"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                        <span class="li_desc text-lowercase"
                        ><i class="fas fa-circle me-lg-2"></i>sortex Quality</span
                        >
                    </div>
                </div>
            </div>
        </div>
    `;
};
productOne(products);
