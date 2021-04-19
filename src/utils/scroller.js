export default function scrollTo(domSelector) {
  const domElement = document.querySelector(domSelector);
  const navbar = document.querySelector('#navbar');
  window.scrollTo(0, domElement.offsetTop - navbar.clientHeight);
}
