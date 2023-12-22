const cells = document.querySelectorAll('.cell')

const gameboard = function() {
    const board = ['', '', '', '', '', '', '', '', '']
    const winCondition = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
        ["1","4","7"],
        ["2","5","8"],
        ["3","6","9"],
        ["1","5","9"],
        ["3","5","7"]
    ]

    return{
        board,
        winCondition,
    }
}()


const Player = function (tag) {
    const _name = tag
    return _name
}



function gameFlow(){
    const player1 = Player('O')
    const player2 = Player('X')

    
    let turn = 0

    cells.forEach(cell=>{
        cell.addEventListener('click', (e)=>{
            const cellIndex = e.target.getAttribute('data-cell')-1

            function makePlay(player){
                cell.innerText = player
                
            }

            
            if(turn === 0){
                makePlay(player1)
                turn = 1
            }else if(turn === 1){
                makePlay(player2)
                turn = 0
            }

        
        })
    })
    
}

gameFlow()

