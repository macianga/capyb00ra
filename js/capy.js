const capies = [];

function createCapy(e) {
  const capy = document.createElement("img");
  const capyPlace = document.getElementById(`capybary`);
  let capyHeight = Math.random() * 250;
  capyHeight = Math.random() > 0.999 ? capyHeight * 50 : capyHeight;
  capyHeight = capyHeight < 100 ? 100 : capyHeight;
  capy.setAttribute('src', '../assets/capybaraukradziona.png');
  capy.setAttribute('alt', 'capy');
  capy.setAttribute('class', 'animation-spin pe-none');

  capy.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  capy.style.animationDuration = Math.random() > 0.999 ? `${Math.random() * 50}ms` : `${Math.random() * 5000 + 2500}ms`;
  capy.style.animationDirection = Math.random() > 0.5 ? "normal" : "reverse";
  capy.style.height = `${capyHeight.toString()}px`;
  capy.style.left = e.pageX - (capyHeight / 1.5) + 'px';
  capy.style.top = e.pageY - (capyHeight / 2) + 'px';

  capyPlace.appendChild(capy);
  const sx = Math.random() + 0.55;
  const sy = Math.random() + 0.55;
  const speedX = Math.random() > 0.5 ? sx : -sx;
  const speedY = Math.random() > 0.5 ? sy : -sy;
  capies.push({el: capy, speedX: speedX, speedY: speedY});
}

function animate() {
  if (!capies.length) {
    return;
  }

  capies.forEach((capy) => {
    // calculate new capy position
    const capyX = parseInt(capy.el.style.left) + capy.speedX
    const capyY = parseInt(capy.el.style.top) + capy.speedY;
    const capyWidth = capy.el.offsetWidth;
    const capyHeight = capy.el.offsetHeight;
    // update capy position
    capy.el.style.left = `${capyX.toString()}px`;
    capy.el.style.top = `${capyY.toString()}px`;

    // bounce capy if she touches screen edge
    if (capyX > window.innerWidth - capyWidth) {
      capy.speedX *= -1;
    } else if (capyX < 0) {
      capy.speedX *= -1;
    }
    if (capyY > window.innerHeight - capyHeight) {
      capy.speedY *= -1;
    } else if (capyY < 0) {
      capy.speedY *= -1;
    }
  })
}


window.addEventListener('DOMContentLoaded', (event) => {
  const body = document.getElementsByTagName("body").item(0);

  body.addEventListener('click', (e) => {
    const allowedElements = ["BODY", "IMG"]
    if (allowedElements.includes(e.target.tagName)) {
      createCapy(e);
    }
  })

  setInterval(animate, 10);
});


