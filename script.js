function addClassText(element) {
  const styles = {
    1: 'newspaper',
    2: 'magazine1',
    3: 'magazine2'
  }
  const sizes = {
    1: 'medium',
    2: 'big',
    3: 'reallybig'
  }
  const rotates = {
    1: 'rotateleft',
    2: 'rotateright',
    3: 'rotatenone'
  }
  const inclinations = {
    1: 'skewleft',
    2: 'skewright',
    3: 'skewnone'
  }
  randomInclinations = Math.ceil(Math.random()*3);
  randomRotates = Math.ceil(Math.random()*3);
  randomStyles = Math.ceil(Math.random()*3);
  randomSizes = Math.ceil(Math.random()*3);
  element.className = `${inclinations[randomInclinations]} ${rotates[randomRotates]} ${styles[randomStyles]} ${sizes[randomSizes]}`;
}

function submitLetter(phrase) {
  const paragraph = document.querySelector('#carta-gerada');
  const array = phrase.split(' ');
  paragraph.innerText = '';
  for (let index = 0; index < array.length; index += 1) {
    const spanElement = document.createElement('span');
    spanElement.innerText = array[index];
    addClassText(spanElement);
    paragraph.appendChild(spanElement);
  }
}

function verifyPhrase() {
  const inputText = document.querySelector('#carta-texto');
  const button = document.querySelector('#criar-carta');
  button.addEventListener('click', function () {
    if(inputText.value.trim()){
      submitLetter(inputText.value);
    } else {
      submitLetter('Por favor, digite o conteúdo da carta.')
    }
  });
}

verifyPhrase();