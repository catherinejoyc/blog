function setActiveLink(evt, itemName) {
  var i, items;

  items = document.getElementsByClassName("navItem");
  for (i = 0; i < items.length; i++) {
    items[i].className = items[i].className.replace(" active", "");
  }

  evt.currentTarget.className += " active";
}