/* Function to expand and collapse images inside of lightboxes
/  @identifier - The class used to identify the lightbox container
*/
function expandElement(element) {
  if (element.className.indexOf('expanded') == -1) { // image not expanded
    element.classList.add('expanded');
  }
  else {
    element.classList.remove('expanded');
  }
}

/* Function to hide and show different DOM elements
/ @hide - The selector of the element to be hidden
/ @show - The selector of the element to be shown
*/
function toggleView(hide, show) {
  document.querySelector(hide).style.display = "none";
  document.querySelector(show).style.display = "inherit";
}