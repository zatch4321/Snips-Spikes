let popHandler = document.querySelector(".pop-handler");  

function loading (){
  popHandler.innerHTML = `
  <div style="width: 100%;position: fixed;top: -10%;height: 110%;backdrop-filter: blur(5px);display: flex;justify-content: center;align-items: center;" class="notification-popup" id="quickbuy-popup">
  <lord-icon class="notification-loding" src="https://cdn.lordicon.com/kvsszuvz.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:50%;height:50%;">
  </lord-icon>
  </div>
  `
}
export default loading;