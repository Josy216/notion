const diary = document.querySelector(".diary");
const btn = document.querySelector(".btn");
let para = document.querySelectorAll(".para");

function diearyplace() {
  const storedData = localStorage.getItem("para");
  if (storedData) {
    diary.innerHTML = storedData;
  }
}
diearyplace();

function newStorage() {
  localStorage.setItem("para", diary.innerHTML);
}

btn.addEventListener("click", () => {
  let pElement = document.createElement("P");
  let delimage = document.createElement("img");
  pElement.className = "para";
  pElement.setAttribute("contenteditable", "true");
  delimage.src = "trash.jpg";
  diary.appendChild(pElement).appendChild(delimage);
  newStorage();
});

diary.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    newStorage();
  } else if (e.target.tagName === "P") {
    para = document.querySelectorAll(".para");
    para.forEach((notes) => {
      notes.onkeyup = function () {
        newStorage();
      };
    });
  }
});
