import Ember from 'ember'

export default Ember.Component.extend({
    gameWon: false,
    gamePiece:'',
    userTurn:'newGame',
    
    topLeft:'',
    topCenter:'',
    topRight:'',
    middleLeft:'',
    center:'',
    middleRight:'',
    bottomLeft:'',
    bottomCenter:'',
    bottomRight:'',

    actions:{
        buttonClicked(param){
            this.set(param, this.gamePiece)
            
        },
        setGamePiece(piece){
            this.set('gamePiece', piece)
        },
        newGame(param){
            this.set('topLeft',''),
            this.set('topCenter',''),
            this.set('topRight',''),
            this.set('middleLeft',''),
            this.set('center',''),
            this.set('middleRight',''),
            this.set('bottomLeft',''),
            this.set('bottomCenter',''),
            this.set('bottomRight','')
            $('.gameButtons').fadeToggle("slow","linear")
        }
    }
})
