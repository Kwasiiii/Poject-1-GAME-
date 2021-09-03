function init(){
  //Elements
  const grid = document.querySelector('.grid') //Declare grid
  const start = document.getElementById('start') //Declare start button
  const gridwrapper = document.querySelector('.grid-wrapper')//Declare grip wrapper

  const scoreP = document.getElementById('score') //Declare p tag element for score
  const livesP = document.getElementById('lives') //Declare p tag element for lives
  const scoreResult = document.getElementById('score-number')//Declare span element for score
  const liveResult = document.getElementById('lives-number')//Declare span element for lives
  const scoreDis = document.getElementById('score-p')

  const audioBtn = document.querySelector('i') //Declare fontawesome play and pause button 
  const audio = new Audio('audio/themeaudio.mp3') //Declare new game audio
  const pacmanShootAudio = new Audio('audio/pacman_eatfruit.wav') //Declare pacman shooting audio
  const pacmanDeathAudio = new Audio('audio/pacman_death.wav') //Declare pacman death audio
  const alienDeathAudio = new Audio('audio/pacman_chomp.wav') //Declare alien death audio

  const resultScreen = document.querySelector('.result-screen')//Declare div result screen
  const resultH = document.getElementById('vic-los')//Declare result screen title
  const resultP = document.getElementById('result-p')//Declare result screen paragraph
  const happySad = document.getElementById('sad-happy')//Declare result screen image


  //Variables
  const alienInvaders = [ 1, 2, 3, 4, 5, 6, 7, 8,
    11, 12, 13, 14, 15, 16, 17, 18] // Assign alien in an array
  const deadAlien = [] //Dead alien array 
  
  const width = 10 //Assigned width of grid
  const cellCount = width * width //Number of cell count width * width
  const cells = [] //Assigned cells array

  const pacman = 'ship'  //Declare ship to a variable
  const aliens = 'alienship' //Declare alien ship to a variable
  const laser = 'shooterlaser' //Declare pacman laser/apple
  const alienLaser = 'alienlaser' //Declare alien laser

  const startingPosition = 95 //Assign pacman a starting position
  let currentPosition = startingPosition //Assign starting position to current position
  let direction = 1 //Assign 1 to direction
  let moveRight = true //Assign move right to true

  let score = 0 //Assign 0 for score to start with
  let lives = 3 //Assign 3 to lives 


  //Execution
  
  //Disable to start button and hide it after pressed
  function disableButton(){
    start.setAttribute('disabled', '') //Add disable attribute to start button
    start.style.display = 'none' //Add display none to hide
    creategrid()
    addPacman(startingPosition) //adds ship to starting position
    addAliens()//adds alien to grid
    alienBullet()
  }

  //create a function for theme song @para event
  function themeSong(event){
    if (audio.paused){ //pass in a condition if sound is paused
      event.target.classList.remove('fa-pause') //remove pause button 
      event.target.classList.add('fa-play') // add play button
      audio.play() //play sound
    } else {
      event.target.classList.remove('fa-play') //remove play button
      event.target.classList.add('fa-pause') // add play button
      audio.pause() //pause theme sound
    } 
  }

  //create a function for pacman laser sound
  function pacmanLaserSound(){
    pacmanShootAudio.play()//plays pacman laser sound
  }

  //create a function for pacman death sound
  function pacmanDeathSound(){
    pacmanDeathAudio.play() //plays pacman death sound
  }

  //create a function for alien death sound
  function alienDeathSound(){
    alienDeathAudio.play()//plays alien death sound
  }

  //create grid to start the game and add rocketship and alien-invaders
  function creategrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')//creating new element div
      // cell.innerText = i //add index as innerText
      grid.appendChild(cell) //Append cell to grid
      cells.push(cell) //Push cell into array cells
    } 
  }


  //Create a function called addPacman @para 'cellposition'
  function addPacman(cellPosition){
    cells[cellPosition].classList.add(pacman)//Add class ship(rocket) to the cell of starting position
  }

  //Create a function called removePacman @para 'cellposition'
  function removePacman(cellPosition){
    cells[cellPosition].classList.remove(pacman)//Add class ship(rocket) to the cell of starting position
  }

  // Key movement
  function handleKeyDown(event){
    // Remove existing ship
    removePacman(currentPosition) // Ship is always removed
    const key = event.keyCode // event.keyCode is the unique code for the key that was pressed
    const right = 39 //keycode for right key pressed
    const left = 37 //keycode for left key pressed
  
    if (key === right && currentPosition % width !== width - 1){
      currentPosition++
    } else if (key === left && currentPosition % width !== 0){
      currentPosition--
    } else {
      console.log('INVALID KEY')
    }

    // Add shit at new current position
    addPacman(currentPosition) // ship added at updated currentPosition or old currentPosition if no conditions were met
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
  

  //create a function that moves alien across the grid and if they hit the edge they move down 
  function moveAliens(){
    const leftborder = alienInvaders[0] % width === 0 //collision check of the left side of the grid
    const rightborder = alienInvaders[alienInvaders.length - 1] % width === width - 1 //collision check on the right side of the grid 
    removeAliens()//removes aliens from a cell
    if (rightborder && moveRight){ //if statement with collision check as condition 
      for (let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += width + 1
        direction = - 1
        moveRight = false
      }
    }
    if (leftborder && !moveRight) { //if statement with collision check as condition 
      for (let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += width - 1
        direction = 1
        moveRight = true
      }
    }
    for (let i = 0; i < alienInvaders.length; i++){ //for loop to move aliens in the right direction
      alienInvaders[i] += direction
    }

    addAliens() //Add aliens to new position

    if (cells[currentPosition].classList.contains(aliens)){ //if statement with condition if cell contains alien and player then lost
      lost()
      clearInterval(move)
    }

    if (deadAlien.length === alienInvaders.length){ //if statement with condition if dead alien equals all aliens then won
      won()
      clearInterval(move)
    }

    for (let i = 0; i < alienInvaders.length; i++){ //for loop to check if aliens touch the edge of grid then game over! Lost!
      if (alienInvaders[i] > (cells.length)){
        lost()
        clearInterval(move)
      }
    }
  }

  const move = setInterval(moveAliens, 500)

  function bullet(event){
    let bulletTimer = null
    let laserCurrentPosition = currentPosition // set laser position as current position of the player 

    //create a function that moves player laser up the grid
    function shooterShoot(){
      cells[laserCurrentPosition].classList.remove(laser) //removes from current laser position
      laserCurrentPosition -= width //moves laser uppwards towards aliens -=width
      cells[laserCurrentPosition].classList.add(laser) //add to current laser position

      if (cells[laserCurrentPosition].classList.contains(aliens)){ //if statement with condition if shooter laser and alien in the same cell
        cells[laserCurrentPosition].classList.remove(laser) //shooter laser remove
        cells[laserCurrentPosition].classList.remove(aliens)// alien remove
        score += 100  //score +100
        clearInterval(bulletTimer) 
        const alienRemoved = alienInvaders.indexOf(laserCurrentPosition)
        deadAlien.push(alienRemoved) //push dead removed alien into an array
        alienDeathSound()
      }

      if (laserCurrentPosition < width){ //if statement with condition if laser current position is less that width of grid then remove
        cells[laserCurrentPosition].classList.remove(laser)
        clearInterval(bulletTimer) 
      }
    }
    scoreResult.innerText = score
    if (event.keyCode === 32){ //if statement with condition if space bar is pressed then laser shoots from player current position
      pacmanLaserSound()
      bulletTimer = setInterval(shooterShoot, 100)
    }
  }

  function alienBullet(){  
    let alienLaserPosition = alienInvaders[(Math.floor(Math.random() * alienInvaders.length))]  
    const alibullet = setInterval(()=>{
      cells[alienLaserPosition].classList.remove(alienLaser)     
      alienLaserPosition += width
      cells[alienLaserPosition].classList.add(alienLaser)    
      
      if (lives === 0){
        lost()
        clearInterval(alibullet)
      }
      if (cells[alienLaserPosition].classList.contains(pacman)){
        lives --
        cells[alienLaserPosition].classList.remove(alienLaser) 
        pacmanDeathSound()
        clearInterval(alibullet) 
      } 
      if (alienLaserPosition > 90){
        cells[alienLaserPosition].classList.remove(alienLaser) 
        alienLaserPosition = alienInvaders[(Math.floor(Math.random() * alienInvaders.length))]  
        cells[alienLaserPosition].classList.add(alienLaser)         
      }
      
    },200)
    liveResult.innerText = lives
  }

  //create a function that hides grid, score and live when player wins
  function won(){
    gridwrapper.style.display = 'none' //hides grid wrapper element
    scoreP.style.display = 'none' //hides score display element
    livesP.style.display = 'none' //hides lives display element
    resultScreen.style.display = 'flex' //display result screen
    resultH.innerText = 'GAME OVER!' //game over text
    resultP.innerText = 'VICTORY!' //victory text 
    scoreDis.innerText = `SCORE: ${score}` //displays score in result scrren
    happySad.classList.add('happypic') //add cool image when won

    
  }

  //create a function that hides grid, score and live when player loses
  function lost(){
    gridwrapper.style.display = 'none' //hides grid wrapper element
    scoreP.style.display = 'none' //hides score display element
    livesP.style.display = 'none' //hides live display element
    resultScreen.style.display = 'flex' //display result screen
    resultH.innerText = 'GAME OVER!' //game over text
    resultP.innerText = 'DEFEAT!' //defeat text
    scoreDis.innerText = `SCORE: ${score}` //display results
    happySad.classList.add('sadpic') //add image when lost
  }

  //Events
  document.addEventListener('keyup', bullet)
  audioBtn.addEventListener('click', themeSong)
  document.addEventListener('keydown', handleKeyDown) // Listening for key press
  start.addEventListener('click', disableButton)
  
}
window.addEventListener('DOMContentLoaded', init)