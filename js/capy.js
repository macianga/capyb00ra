const elements = document.getElementsByTagName("body");

function createCapy(){
  const capy = document.createElement("img");
  const capyPlace = document.getElementById(`capybary`);
  let capyHeight = Math.random() * 250;
  capyHeight = capyHeight < 100 ? 100 : capyHeight;
  capy.setAttribute('src', '../capybaraukradziona.png');
  capy.setAttribute('alt', 'capy');
  capy.setAttribute('class', 'animation-spin');

  capy.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  capy.style.animationDuration = `Math.random() > 0.5 ? ${Math.random() * 50}ms : ${Math.random() * 5000 + 2500}ms`;
  capy.style.height = capyHeight;
  capy.style.left = event.pageX - (capyHeight/1.5) + 'px';
  capy.style.top = event.pageY - (capyHeight/2) + 'px';

  capyPlace.appendChild(capy);
}

for (const el of Array.from(elements)) {
  el.addEventListener('click', (event) =>{
    createCapy();
  })
}
