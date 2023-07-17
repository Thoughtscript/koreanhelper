"use strict"

/**
 * @Author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Scratch-built handwriting lib for HTML5 Canvas.
 * 
 *  Helpful examples for drawing circles and curved lines: https://github.com/os1ma/handwriting-canvas/blob/main/LICENSE
 */

var WritingPanel = function (els) {
    this.lastX = 0
    this.lastY = 0
    this.isDown = false
    this.initialized = false

    if (els.length > 1) new Error("Element not uniquely specified!")

    this.el = els[0]
    this.context = this.el.getContext("2d")
}

WritingPanel.prototype.getMousePos = function (e) {
    const R = this.el.getBoundingClientRect()
    const M = {}
    M["X"] = parseInt(e.clientX - R.left)
    M["Y"] = parseInt(e.clientY - R.top)
    return M
}

WritingPanel.prototype.drawLine = function (startX, startY, endX, endY) {
    this.context.beginPath()
    this.context.moveTo(startX, startY)
    this.context.lineTo(endX, endY)
    this.context.stroke()
    this.context.closePath()
}

WritingPanel.prototype.toBlobRect = function() {
    // For generating CNN images
}

WritingPanel.prototype.toPng = function() {
    return this.el.toDataURL("image/png")
}

WritingPanel.prototype.init = function () {
    if (!this.initialized) {

        this.context.strokeStyle = 'red'
        this.context.lineCap = 'round'
        this.context.lineJoin = 'round'
        this.context.lineWidth = 5
        this.initialized = !this.initialized

        this.el.addEventListener('mousedown', e => {
            this.isDown = true
            const M = this.getMousePos(e)
            this.lastX = M.X
            this.lastY = M.Y
            e.preventDefault
        })

        this.el.addEventListener('mouseup', e => {
            if (this.isDown) {
                const M = this.getMousePos(e)
                this.drawLine(this.lastX, this.lastY, M.X, M.Y)
                this.isDown = !this.isDown
            }
        })

        this.el.addEventListener('mousemove', e => {
            if (this.isDown) {
                const M = this.getMousePos(e)
                this.drawLine(this.lastX, this.lastY, M.X, M.Y)
                this.lastX = M.X
                this.lastY = M.Y
            }
        })
    }
}

WritingPanel.prototype.clear = function() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
}