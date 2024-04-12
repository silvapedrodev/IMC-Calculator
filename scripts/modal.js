const statusElement = document.querySelector('.modal h3')
const intervalElement = document.querySelector('#intervalIMC')
const descriptionElement = document.querySelector('.description')
const imageElement = document.querySelector('.modal img')

export const Modal = {
  
  Wrapper: document.querySelector('.modal-wrapper'),
  Card: document.querySelector('.modal'),
  HeightInput: document.querySelector('#height'),
  Footer: document.querySelector('footer'),
  Message: document.querySelector('.title'),
  ButtonClose: document.querySelector('.close'),

  open() {
    Modal.Wrapper.classList.add('open')
    Modal.Card.classList.add('open')
    Modal.Footer.classList.add('open')
  },

  close() {
    Modal.Wrapper.classList.remove('open')
    Modal.Card.classList.remove('open')
    Modal.Footer.classList.remove('open')
    Modal.HeightInput.focus()
  },

  colorAndDescription(value) {
    
    if (value <= 18.5) {
      Modal.Card.style.backgroundColor = 'var(--bg-modal-00)';
      statusElement.innerText = 'Magreza';
      intervalElement.innerText = '0 e 18.5';
      descriptionElement.innerText = 'Risco aumentado de desnutrição e distúrbios alimentares.';
    } else if(value <= 24.9)  {
      Modal.Card.style.backgroundColor = 'var(--bg-modal-01)';
      statusElement.innerText = 'Normal';
      intervalElement.innerText = '18.6 e 24.99';
      descriptionElement.innerText = 'Peso saudável em relação à altura.';
    } else if(value <= 29.9) {
      Modal.Card.style.backgroundColor = 'var(--bg-modal-02)';
      statusElement.innerText = 'Sobrepeso';
      intervalElement.innerText = '25 e 29.99';
      descriptionElement.innerText = ' Risco aumentado de diabetes e doenças cardíacas.';
    } else if (value <= 34.9) {
      Modal.Card.style.backgroundColor = 'var(--bg-modal-03)';
      statusElement.innerText = 'Obesidade';
      intervalElement.innerText = '30 e 34.99';
      descriptionElement.innerText = 'Risco aumentado de diabetes, doenças cardíacas e problemas articulares.';
    } else if (value <= 39.9) {
      Modal.Card.style.backgroundColor = 'var(--bg-modal-04)';
      statusElement.innerText = 'Obesidade Severa';
      intervalElement.innerText = '35 e 39.99';
      descriptionElement.innerText = 'Risco extremamente aumentado de complicações graves.';
    } else {
      Modal.Card.style.backgroundColor = 'var(--bg-modal-05)';
      statusElement.innerText = 'Obesidade Mórbida';
      intervalElement.innerText = '40 ou mais';
      descriptionElement.innerText = 'Risco extremamente alto de complicações graves e redução significativa da expectativa de vida.';
    }
  },

  imageModal(value) {
    
    if(value <= 18.5 || value > 24.9) {
      imageElement.src = './assets/bad.svg'
      imageElement.alt = 'avaliação negativa'
    } else {
      imageElement.src = './assets/nice.svg'
      imageElement.alt = 'avaliação positiva'
    }
  }
}

Modal.ButtonClose.addEventListener('click', function (){
  Modal.close()
} )

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  if(event.key == 'Escape') {
    Modal.close()
  }
}