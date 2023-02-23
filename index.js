const boxes = document.getElementsByClassName("box")
let player = "X"
let filledBox = ["","","","","","","","",""]
let gameOver = false
let messgae = ""

const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
for (let i = 0 ; i<boxes.length;i++) {
    boxes[i].addEventListener('click',function(){
        if(filledBox[i]==="" && gameOver===false){
            this.innerHTML = player
            filledBox[i] = player
            gameOver = winningConditions.some((item)=>{
                return (filledBox[item[0]]==="X" && filledBox[item[1]]==="X" && filledBox[item[2]]==="X") || (filledBox[item[0]]==="O" && filledBox[item[1]]==="O" && filledBox[item[2]]==="O")
             })
             if(gameOver){
                messgae = `Winner is ${player}`
             }else if(filledBox.filter(item=>item==="").length===0){
                messgae = `Game Draw`
                gameOver = true
             }

            player = player === "X"?"O":"X"

            const messageTag = document.getElementById("message")

            messageTag.innerText = gameOver ? messgae : `Player ${player}'s Turn`

        }
    })
}

const resetBtn  = document.getElementById("reset-btn")
resetBtn.addEventListener('click',function(){
    location.reload()
})