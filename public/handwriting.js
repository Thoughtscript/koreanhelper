"use strict"

/**
 * @Author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Scratch-built handwriting lib for HTML5 Canvas.
 * 
 *  Helpful examples for drawing circles and curved lines: https://github.com/os1ma/handwriting-canvas/blob/main/LICENSE
 */

let lastX = 0, lastY = 0, isDown = false

const drawLine = (startX, startY, endX, endY) => {
    console.log(`Drawing ${startX} ${startY} to ${endX} ${endY}`)
    const C = document.getElementById('handwriting').getContext("2d")
    C.strokeStyle = 'red'
    C.lineCap = 'round'
    C.lineJoin = 'round'
    C.beginPath()
    C.moveTo(startX, startY)
    C.lineTo(endX, endY)
    C.lineWidth = 1
    C.stroke()
    C.closePath()
}

const getMousePos = e => {
    const R = document.getElementById('handwriting').getBoundingClientRect()
    const M = {}
    M["X"] = parseInt(e.clientX - R.left)
    M["Y"] = parseInt(e.clientY - R.top)
    console.log(M)
    return M
}

window.onload = () => {
    const EL = document.getElementById('handwriting')

    EL.addEventListener('mousedown', e => {
        console.log("mousedown")
        isDown = true
        const M = getMousePos(e)
        lastX = M.X
        lastY = M.Y
        e.preventDefault
    })

    EL.addEventListener('mouseup', e => {
        console.log("mouseup")
        if (isDown) {
            const M = getMousePos(e)
            drawLine(lastX, lastY, M.X, M.Y)
            isDown = !isDown
        }
    })

    EL.addEventListener('mousemove', e => {
        console.log("mousemove")
        if (isDown) {
            const M = getMousePos(e)
            drawLine(lastX, lastY, M.X, M.Y)
            lastX = M.X
            lastY = M.Y
        }
    })
}