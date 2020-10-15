const DVDdisc = document.getElementById("DVDdisc");
const book = document.getElementById("book");
const furniture = document.getElementById("furniture");
const dropdownButton = document.getElementById("dropdownButton");
const cardBody = document.getElementById("cardBody");
const sizeSpecialAttribute = document.getElementById("sizeSpecialAttribute");
const size = document.getElementById("size");
const weightSpecialAttribute = document.getElementById(
  "weightSpecialAttribute"
);
const weight = document.getElementById("weight");
const heightWidthLengthSpecialAttribute = document.getElementById(
  "heightWidthLengthSpecialAttribute"
);
const height = document.getElementById("height");
const width = document.getElementById("width");
const length = document.getElementById("length");

function changeDropdownButtonValue(element) {
  switch (element) {
    case "DVDdisc":
      dropdownButton.innerText = "DVD-disc";
      break;
    case "book":
      dropdownButton.innerText = "Book";
      break;
    case "furniture":
      dropdownButton.innerText = "Furniture";
      break;
    default:
      dropdownButton.innerText = "Type Switcher";
      break;
  }
}

DVDdisc.addEventListener("click", function () {
  changeDropdownButtonValue("DVDdisc");
  sizeSpecialAttribute.className = "card-specialAttribute";
  weightSpecialAttribute.className = "card-specialAttribute hidden";
  heightWidthLengthSpecialAttribute.className = "card-specialAttribute hidden";
  size.setAttribute("required", "true");
  weight.removeAttribute("required");
  height.removeAttribute("required");
  width.removeAttribute("required");
  length.removeAttribute("required");
});

book.addEventListener("click", function () {
  changeDropdownButtonValue("book");
  weightSpecialAttribute.className = "card-specialAttribute";
  sizeSpecialAttribute.className = "card-specialAttribute hidden";
  heightWidthLengthSpecialAttribute.className = "card-specialAttribute hidden";
  weight.setAttribute("required", "true");
  size.removeAttribute("required");
  height.removeAttribute("required");
  width.removeAttribute("required");
  length.removeAttribute("required");
});

furniture.addEventListener("click", function () {
  changeDropdownButtonValue("furniture");
  heightWidthLengthSpecialAttribute.className = "card-specialAttribute";
  sizeSpecialAttribute.className = "card-specialAttribute hidden";
  weightSpecialAttribute.className = "card-specialAttribute hidden";
  height.setAttribute("required", "true");
  width.setAttribute("required", "true");
  length.setAttribute("required", "true");
  size.removeAttribute("required");
  weight.removeAttribute("required");
});
