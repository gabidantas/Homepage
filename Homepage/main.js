function onClickOption(event) {
  event.preventDefault();

  const elementToScrollRef = event.target.attributes.href.value;
  const elementToScroll = document.querySelector(elementToScrollRef);

  window.scrollTo({
    behavior: "smooth",
    top: elementToScroll.offsetTop - 63.5,
  });
}

function start() {
  const menuOptions = document.querySelectorAll("a.menu-option");

  for (const option of menuOptions)
    option.addEventListener("click", onClickOption);
}

window.onload = start();
