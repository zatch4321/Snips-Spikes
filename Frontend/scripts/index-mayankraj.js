import hideLoading from "../components/hideLoading.components.js";
import loading from "../components/loading.components.js";

// loading()

let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const userdata = JSON.parse(localStorage.getItem('userdata'));


if(userdata) {
  
  let hello = document.getElementById('hellouser')
  hello.innerText = "Hey "+userdata.name;
}
// logo redirection
const homelogo = document.getElementById('homelogo')
homelogo.addEventListener('click',()=>{
  loading()
  window.location.href= "index.html"
} )
