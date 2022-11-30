const PLAYER_X_CLASS ='X'
const PLAYER_O_CLASS='circle'
const WINNING_COMBINATIONS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements=document.querySelectorAll('[data-cell]')
const boardElement=document.getElementById('container')
const winningmessageElement=document.getElementById('winning')
const resartButton=document.getElementById('restartButton')
const winningmessage=document.getElementById('winningmessage')
let isplayer_0_Turn=false
startGame()
restartButton.addEventlistener('click',startGame)
function startGame(){
    isPlayer_o_Turn=false
    cellElements.forEach(cell=>{
        cell.classList.remove(PLAYER_X_CLASS)
        cell.classList.remove(PLAYER_O_CLASS)
        cell.removeEventListener('click',handlecellclick,{one:true})
    })
    setBoardHoverClass()
    winningmessageElement.classList('show')
}
function handlecellclick(e){
const cell=e.target
const currentclass=isplayer_0_Turn  ?PLAYER_O_CLASS:PLAYER_X_CLASS
placeMark(cell,currentclass)
if(checkwin(currentclass)){
    endGame(true)
}else if(isDraw()){
    endGame(true)
}else{
    swapTurns()
    setBoardHoverClass()
}
}
function endGame(draw){
if(draw){
    winningmessageElement.innerText="It's a draw!"

}else{
    winningmessageElement.innerText=`player with ${isplayer_0_Turn ? "0's":"x's"}wins!`

}
winningmessageElement.classList.add('show')
}
function isDraw(){
    return[...cellElements].every(cell =>{
        return cell.classList.contains(PLAYER_X_CLASS) ||cell.classList.contains(PLAYER_O_CLASS)
    
    })
}
function placeMark(cell,currentclass){
    cell.classList.add(currentclass)
}
function swapTurns(){
    isplayer_0_Turn=!isplayer_0_Turn
}
function setBoardHoverClass(){
    boardElement.ClassList.remove(PLAYER_X_CLASS)
    boardElement.ClassList.remove(PLAYER_X_CLASS)
    if(isplayer_0_Turn){
       
    }else{
        boardElement.classList.add(PLAYER_x_CLASS)
    }
}
function checkwin(currentclass){
    return WINNING_COMBINATIONS.some(combination=>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(currentclass)
        })
    })
}