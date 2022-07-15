console.log("aaa")

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('img').forEach((el)=>{
    setTimeout(()=>{
      el.classList.add("animation-spin")
    }, Math.random() * 1200 + 300)
  })
});
