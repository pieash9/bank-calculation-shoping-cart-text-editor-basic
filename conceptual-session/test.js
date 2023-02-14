document.getElementById("add-btn").addEventListener("click", function () {
  const value1 = document.getElementById("input-text").value;
  const container = document.getElementById("parent-container");
  document.getElementById("input-text").value = "";
  const li = document.createElement("li");
  li.innerText = value1;
  li.classList.add("new-li");
  container.appendChild(li);
  const liList = document.getElementsByClassName("new-li");
  for (const item of liList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
});

document.getElementById("hit").addEventListener("click", function (e) {
  setInnerText("p-1", "Bangladesh");
  setInnerText("p-2", "India");
  setInnerText("p-3", "Canada");
  setInnerText("p-4", "China");
  const inputValue = getInputValue('input-text');
  console.log(inputValue);
});
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function getInputValue(id) {
  const result= document.getElementById(id).value;
  console.log(result);
}
