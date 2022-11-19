import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  switch (true) {
    case (result < 18.5): {
      Modal.image.src = './assets/images/IMC-01.png';
      break;
    }
    case (result >= 18.5 && result < 25): {
      Modal.image.src = './assets/images/IMC-02.png';
      break;
    }
    case (result >= 25 && result < 30): {
      Modal.image.src = './assets/images/IMC-03.png';
      break;
    }
    case (result >= 30 && result < 35): {
      Modal.image.src = './assets/images/IMC-04.png';
      break;
    }
    case (result >= 35): {
      Modal.image.src = './assets/images/IMC-05.png';
      break;
    }
  }

  Modal.message.innerText = message
  Modal.open()
}