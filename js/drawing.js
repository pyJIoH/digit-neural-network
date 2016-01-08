/**
 * Created by pyjioh on 27.12.2015.
 */
$(document).ready(function () {

    canvas.width = $('#canvasHolder').width();
    canvas.height = $('#canvasHolder').height();
    var context = canvas.getContext("2d");

    $('#canvas').mousedown(function (e) {
        var parentOffset = $(this).parent().offset();
        var mouseX = e.pageX - parentOffset.left;
        var mouseY = e.pageY - parentOffset.top;

        paint = true;
        addClick(mouseX, mouseY);
        redraw();
    });

    $('#canvas').mousemove(function (e) {
        if (paint) {
            var parentOffset = $(this).parent().offset();
            addClick(e.pageX - parentOffset.left, e.pageY - parentOffset.top, true);
            redraw();
        }
    });

    $('#canvas').mouseup(function (e) {
        paint = false;
    });

    $('#canvas').mouseleave(function (e) {
        paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    function redraw() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

        context.lineJoin = "round";
        context.lineWidth = 10;

        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }

});