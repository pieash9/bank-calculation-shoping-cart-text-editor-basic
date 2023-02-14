document.getElementById("bold").addEventListener("click", function () {
  const bold = document.getElementById("text-area").style.fontWeight;
  if (bold == "bold") {
    document.getElementById("text-area").style.fontWeight = "normal";
  } else {
    document.getElementById("text-area").style.fontWeight = "bold";
  }
});

document.getElementById("italic").addEventListener("click", function () {
  const italic = document.getElementById("text-area").style.fontStyle;
  if (italic == "italic") {
    document.getElementById("text-area").style.fontStyle = "normal";
  } else {
    document.getElementById("text-area").style.fontStyle = "italic";
  }
});

document.getElementById("underline").addEventListener("click", function () {
  const underline = document.getElementById("text-area").style.textDecoration;
  if (underline == "underline") {
    document.getElementById("text-area").style.textDecoration = "none";
  } else {
    document.getElementById("text-area").style.textDecoration = "underline";
  }
});

document.getElementById("align-left").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "left";
});
document.getElementById("align-right").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "right";
});
document.getElementById("align-center").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "center";
});
document.getElementById("align-justify").addEventListener("click", function () {
  document.getElementById("text-area").style.textAlign = "justify";
});

document.getElementById("fontSize").addEventListener("change", function () {
  const fontSize1 = document.getElementById("fontSize").value;

  document.getElementById("text-area").style.fontSize = `${fontSize1}px`;
});
document
  .getElementById("uppercase-lowercase")
  .addEventListener("click", function () {
    const textCase = document.getElementById("text-area").style.textTransform;
    if (textCase == "uppercase") {
      document.getElementById("text-area").style.textTransform = "lowercase";
    } else {
      document.getElementById("text-area").style.textTransform = "uppercase";
    }
  });
  document.getElementById("inputColor").addEventListener("change", function () {
    const inputColor = document.getElementById("inputColor").value;
    console.log(inputColor);
  
    document.getElementById("text-area").style.color = `${inputColor}`;
  });