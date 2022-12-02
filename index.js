window.onload = function () {
  if (window.localStorage.getItem('playerWins') === null) {
    window.localStorage.setItem('playerWins', 0)
  } else {
    document.getElementById('wins').innerHTML = window.localStorage.getItem('playerWins')
  }

  if (window.localStorage.getItem('playerLosses') === null) {
    window.localStorage.setItem('playerLosses', 0)
  } else {
    document.getElementById('loses').innerHTML = window.localStorage.getItem('playerLosses')
  }
}

// handle rock btn
document.getElementById('rockBtn').addEventListener('click', function () {
  handleUserInput('rock')
})

// handle paper btn
document.getElementById('paperBtn').addEventListener('click', function () {
  handleUserInput('paper')
})

// handle scissors btn
document.getElementById('scissorsBtn').addEventListener('click', function () {
  handleUserInput('scissors')
})

function handleUserInput (userValue) {
  if (userValue === 'rock') {
    document.getElementById('player_move').innerHTML = '🗿'
  } else if (userValue === 'scissors') {
    document.getElementById('player_move').innerHTML = '🔪'
  } else if (userValue === 'paper') {
    document.getElementById('player_move').innerHTML = '📃'
  }

  // generate computer value
  const options = ['rock', 'paper', 'scissors']
  let computerValue = Math.floor(Math.random() * 3)
  computerValue = options[computerValue]

  if (computerValue === 'rock') {
    document.getElementById('computer_move').innerHTML = '🗿'
  } else if (computerValue === 'scissors') {
    document.getElementById('computer_move').innerHTML = '🔪'
  } else if (computerValue === 'paper') {
    document.getElementById('computer_move').innerHTML = '📃'
  }

  if (computerValue === userValue) {
    // change no information since nobody has one
    console.log("It's a tie")
    document.getElementById('result').innerHTML = 'TIE'
    return
  }

  if (userValue === 'scissors') {
    if (computerValue === 'rock') {
      // change the localStorage to add loss to user
      console.log('Computer has won!')
      document.getElementById('result').innerHTML = 'Computer Wins!'
      increaseLosses()
    } else {
      // change the localStorage to add win to user
      console.log('You have won!')
      document.getElementById('result').innerHTML = 'You Won!'
      increaseWins()
    }
  } else if (userValue === 'rock') {
    if (computerValue === 'paper') {
      // change the localStorage to add loss to user
      console.log('Computer has won!')
      document.getElementById('result').innerHTML = 'Computer Wins!'
      increaseLosses()
    } else {
      // change the localStorage to add win to user
      console.log('You have won!')
      document.getElementById('result').innerHTML = 'You Won!'
      increaseWins()
    }
  } else if (userValue === 'paper') {
    if (computerValue === 'scissors') {
      // change the localStorage to add loss to user
      console.log('Computer has won!')
      document.getElementById('result').innerHTML = 'Computer Wins!'
      increaseLosses()
    } else {
      // change the localStorage to add win to user
      console.log('You have won!')
      document.getElementById('result').innerHTML = 'You Won!'
      increaseWins()
    }
  }

  // refresh the wins and losses
  document.getElementById('wins').innerHTML = window.localStorage.getItem('playerWins')
  document.getElementById('loses').innerHTML = window.localStorage.getItem('playerLosses')
}

function increaseWins () {
  window.localStorage.setItem('playerWins', parseInt(window.localStorage.getItem('playerWins')) + 1)
}

function increaseLosses () {
  window.localStorage.setItem('playerLosses', parseInt(window.localStorage.getItem('playerLosses')) + 1)
}
