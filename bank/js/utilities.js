function getInputValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';
    return inputValue;
}

function getElementValueById(elementId){
    const ElementValue = document.getElementById(elementId);
    const value = parseFloat(ElementValue.innerText);
    return value;
}
function setInnerText(id,value){
    const elementValue = document.getElementById(id);
    elementValue.innerText = value;
}