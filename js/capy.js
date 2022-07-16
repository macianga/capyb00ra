console.log("aaa")

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('img').forEach((el)=>{
    setTimeout(()=>{
      el.classList.add("animation-spin")
      el.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
      el.style.animationDuration = Math.random() > 0.5 ? `${Math.random() * 50}ms` : `${Math.random() * 5000 + 2500}ms`
    }, Math.random() * 1200 + 300)
  })
});
