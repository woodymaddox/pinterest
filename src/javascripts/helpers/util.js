const printToDom = (divId, textToprint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToprint;
};

export default { printToDom };
