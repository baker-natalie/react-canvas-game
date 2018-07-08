import React from 'react';
import ReactCanvas from 'react-canvas';
import ReactStateAnimation from 'react-state-animation';

var Loop = ReactStateAnimation.Loop
var Surface = ReactCanvas.Surface
var Group = ReactCanvas.Group
var Image = ReactCanvas.Image

export default class Canvas extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this._loop = new Loop()
        //listen for spacebar press:
        document.body.addEventListener('keydown', (e)=>{
            var key = (window.Event) ? e.which : e.keyCode
            if(ke === 32) {
                this.onClickCanvas(e)
            }
        })
    }
    //check player position
    getPos() {
        //***TO DO***//
    }
    //detect collision between player and enemy
    detectCollision() {
        //***TO DO***//
    }
    //move player
    onClickCanvas(e) {
        //***TO DO***//
    }
    //generate enemies and send them across the board
    _generateEnemies() {
        //***TO DO***//
    }
    //reset game
    _reset() {
        this._loop.end()
        //***TO DO***//
    }
    getBackgroundStyle() {
        //this will be where the background tile loop goes
        return {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: this.props.canvasWidth,
            height: this.props.canvasHeight
        }
    }
    render() {
        return (
            <Surface ref="surface" top={0} left={0} width={this.props.canvasWidth} height={this.props.canvasHeight} enableCSSLayout={true}>
                <Group>
                    //this is where we call getBackgroundStyle()
                </Group>
                <Group>
                    //this is where we call _generateEnemies()
                </Group>
            </Surface>
        )
    }
}
Canvas.defaultProps = {
    canvasWidth: 350,
    canvasHeight: 450
}