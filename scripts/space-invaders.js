function init(){
  const startButton = document.querySelector('#start')
  function disableButton(){
    startButton.setAttribute('disabled', '')
  }
  //Elements
  const grid = document.querySelector('.grid')
  const start = document.getElementById('start')

  //Variables
  const alienInvaders = [ 1, 2, 3, 4, 5, 6, 7, 8,
    11, 12, 13, 14, 15, 16, 17, 18]
  const deadAlien = []
  
  const width = 10 
  const cellCount = width * width
  const cells = []

  const rocketShip = 'ship'
  const aliens = 'alienship'
  const startingPosition = 95
  let currentPosition = startingPosition
  let direction = 1
  let moveRight = true

  const laser = 'shooterlaser'

  //Execution
  //create grid to start the game and add rocketship and alien-invaders
  function creategrid (){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')//creating new element div
      cell.innerText = i //add index as innerText
      grid.appendChild(cell) //Append cell to grid
      cells.push(cell) //Push cell into array cells
    } 
    addShip(startingPosition)
    addAliens()
    move
    disableButton()
  }

  //Create a function called addShip @para 'cellposition'
  function addShip(cellPosition){
    cells[cellPosition].classList.add(rocketShip)//Add class ship(rocket) to the cell of starting position
  }

  //Create a function called removeShip @para 'cellposition'
  function removeShip(cellPosition){
    cells[cellPosition].classList.remove(rocketShip)//Add class ship(rocket) to the cell of starting position
  }



  // Key movement
  function handleKeyDown(event){

    // Remove existing ship
    removeShip(currentPosition) // Ship is always removed

    const key = event.keyCode // event.keyCode is the unique code for the key that was pressed
    const right = 39
    const left = 37
    console.log(key)
  
    if (key === right && currentPosition % width !== width - 1){
      currentPosition++
    } else if (key === left && currentPosition % width !== 0){
      currentPosition--
    // } else if (key === shoot){
    //   shooterShoot()
    } else {
      console.log('INVALID KEY')
    }

    // Add shit at new current position
    addShip(currentPosition) // ship added at updated currentPosition or old currentPosition if no conditions were met
  }

  //create a function addAliens 
  function addAliens(){
    for (let i = 0; i < alienInvaders.length; i++){ //use a for loop with condition i < alien.length
      if (!deadAlien.includes(i))
        cells[alienInvaders[i]].classList.add(aliens) //add class alien to cells with index alien[i] which adds up to length of invaders
    }
  }


  //create a function removeAliens
  function removeAliens(){
    for (let i = 0; i < alienInvaders.length; i++){ //use a for loop with condition i < alien.length
      cells[alienInvaders[i]].classList.remove(aliens) //add class alien to cells with index alien[i] which removes up to length of invaders
    }
  }
  

  //create a collision check function
  function moveAliens(){
    const leftborder = alienInvaders[0] % width === 0
    const rightborder = alienInvaders[alienInvaders.length - 1] % width === width - 1
    removeAliens()
    if (rightborder && moveRight){
      for (let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += width + 1
        direction = - 1
        moveRight = false
      }
    }
    if (leftborder && !moveRight) {
      for (let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += width - 1
        direction = 1
        moveRight = true
      }
    }
    for (let i = 0; i < alienInvaders.length; i++){
      alienInvaders[i] += direction
    }
    addAliens()
  }

  function bullet(event){
    let bulletTimer = null
    let laserCurrentPosition = currentPosition

    function shooterShoot(){
      cells[laserCurrentPosition].classList.remove(laser)
      laserCurrentPosition -= width
      cells[laserCurrentPosition].classList.add(laser)

      if (cells[laserCurrentPosition].classList.contains(aliens)){
        cells[laserCurrentPosition].classList.remove(laser)
        cells[laserCurrentPosition].classList.remove(aliens)   
        clearInterval(bulletTimer)   
        const alienRemoved = alienInvaders.indexOf(laserCurrentPosition)
        deadAlien.push(alienRemoved) 
      }
      
    }
    if (event.keyCode === 32){
      bulletTimer = setInterval(shooterShoot, 100)
    }
  }
  document.addEventListener('keyup', bullet)

  const move = setInterval(moveAliens, 1000)
  
  document.addEventListener('keydown', handleKeyDown) // Listening for key press
  start.addEventListener('click', creategrid)

}
window.addEventListener('DOMContentLoaded', init)