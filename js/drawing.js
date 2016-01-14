/**
 * Created by pyjioh on 27.12.2015.
 */
$(document).ready(function () {

    canvas.width = $(canvasHolder).width();
    canvas.height = $(canvasHolder).height();
    var context = canvas.getContext("2d");
    context.lineJoin = "round";
    context.lineWidth = 30;
    var paint;

    function getParentOffset() {
        return $(this).parent().offset();
    }

    $(canvas).mousedown(function (e) {
        paint = true;
        var offset = getParentOffset.bind(this);
        var mouseX = e.pageX - offset().left;
        var mouseY = e.pageY - offset().top;
        draw(mouseX, mouseY);
    });

    $(canvas).mousemove(function (e) {
        if (paint) {
            var offset = getParentOffset.bind(this);
            var mouseX = e.pageX - offset().left;
            var mouseY = e.pageY - offset().top;
            draw(mouseX, mouseY, true);
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
    }

    function draw(clickX, clickY) {
        context.beginPath();
        context.moveTo(clickX, clickY);
        context.lineTo(clickX + 1, clickY);
        context.closePath();
        context.stroke();
    }

});