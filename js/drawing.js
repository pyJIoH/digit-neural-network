/**
 * Created by pyjioh on 27.12.2015.
 */
$(document).ready(function () {

    canvas.width = $(canvasHolder).width();
    canvas.height = $(canvasHolder).height();
    var context = canvas.getContext("2d");

    function getParentOffset() {
        return $(this).parent().offset();
    }

    $(canvas).mousedown(function (e) {
        var offset = getParentOffset.bind(this);
        var mouseX = e.pageX - offset().left;
        var mouseY = e.pageY - offset().top;

        paint = true;
        addClick(mouseX, mouseY);
        redraw();
    });

    $(canvas).mousemove(function (e) {
        if (paint) {
            var offset = getParentOffset.bind(this);
            addClick(e.pageX - offset().left, e.pageY - offset().top, true);
            redraw();
        }
    });

    $(canvas).mouseup(function (e) {
        paint = false;
    });

    $(canvas).mouseleave(function (e) {
        paint = false;
    });

    $(clearCanvas).click(function (e) {
        clearAll();
    });

    function clearAll() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        clickX = [];
        clickY = [];
        clickDrag = [];
    }

    var clickX = [], clickY = [], clickDrag = [];
    var paint;

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    function redraw() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        context.lineJoin = "round";
        context.lineWidth = 30;

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