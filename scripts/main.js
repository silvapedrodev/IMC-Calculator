import { alertError } from './alert-error.js'
import { inpuMaxLength } from './maxLength.js'
import { Modal } from './modal.js'
import {calculateIMC, notANumber} from './utils.js'

const form = document.querySelector('form')
const inputHeight = document.querySelector("#height")
const inputWeigth = document.querySelector("#weigth")

function closeAlertError() {
  alertError.close()
}

inputHeight.addEventListener('focus', closeAlertError)
inputWeigth.addEventListener('focus', closeAlertError)

inputHeight.addEventListener('input', () => {
  inpuMaxLength(inputHeight)
})

inputWeigth.addEventListener('input', () => {
  inpuMaxLength(inputWeigth)
})

form.onsubmit = (event) => {
  event.preventDefault()
  
  const height = inputHeight.value
  const weigth = inputWeigth.value

  const heightOrWeigthNotANumber = notANumber(height) || notANumber(weigth)

  if(heightOrWeigthNotANumber) {
    alertError.open()
    return
  }

  const result = calculateIMC(height, weigth)

  //Remove o foco do campo de entrada
  inputHeight.blur()
  inputWeigth.blur()

  displayResultMessage(result)

  inputHeight.value = ''
  inputWeigth.value = ''

}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.colorAndDescription(result)
  Modal.imageModal(result)
  Modal.Message.innerText = message
  Modal.open()
}
