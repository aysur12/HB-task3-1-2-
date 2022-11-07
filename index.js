const textAreaInput = document.querySelector('.text-area__input');
const textAreaBtn = document.querySelector('.text-area__button');
textAreaInput.value = localStorage.getItem('textAreaValue');

textAreaInput.oninput = () => {
  localStorage.setItem('textAreaValue', textAreaInput.value);
}

textAreaBtn.addEventListener('click', () => {
  localStorage.removeItem('textAreaValue');
  textAreaInput.value = "";
})