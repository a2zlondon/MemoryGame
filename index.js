
  const cardArray = [
    {
      name: 'camera',
      fa: 'grid-item fas fa-camera fa-4x'
    },
    {
      name: 'fish',
      fa: 'grid-item fas fa-fish fa-4x'
    },
    {
      name: 'ice-cream',
      fa: 'grid-item fas fa-ice-cream fa-4x'
    },
    {
      name: 'car',
      fa: 'grid-item fas fa-car fa-4x'
    },
    {
      name: 'crow',
      fa: 'grid-item fas fa-crow fa-4x'
    },
    {
      name: 'hotdog',
      fa: 'grid-item fas fa-hotdog fa-4x'
    },
    {
      name: 'camera',
      fa: 'grid-item fas fa-camera fa-4x'
    },
    {
      name: 'fish',
      fa: 'grid-item fas fa-fish fa-4x'
    },
    {
      name: 'ice-cream',
      fa: 'grid-item fas fa-ice-cream fa-4x'
    },
    {
      name: 'car',
      fa: 'grid-item fas fa-car fa-4x'
    },
    {
      name: 'crow',
      fa: 'grid-item fas fa-crow fa-4x'
    },
    {
      name: 'hotdog',
      fa: 'grid-item fas fa-hotdog fa-4x'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid-container')
  const resultDisplay = document.querySelector('#result')
  const feedbackDisplay = document.querySelector('#feedback')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('i')
      card.setAttribute('class', 'grid-item fas fa-square fa-4x')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('i')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('class', 'grid-item fas fa-square fa-4x')
      cards[optionTwoId].setAttribute('class', 'grid-item fas fa-square fa-4x')
      //alert('You have clicked the same image!')
      feedbackDisplay.textContent = 'You have clicked the same image!'
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match')
      feedbackDisplay.textContent = 'You found a match'
      //cards[optionOneId].setAttribute('class', 'fa-minus-square fa-4x')
      //cards[optionTwoId].setAttribute('class', 'fa-minus-square fa-4x')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('class', 'grid-item fas fa-square fa-4x')
      cards[optionTwoId].setAttribute('class', 'grid-item fas fa-square fa-4x')
      //alert('Sorry, try again')
      feedbackDisplay.textContent = 'No match, try again'
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      feedbackDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    feedbackDisplay.textContent = ""
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('class', cardArray[cardId].fa)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
