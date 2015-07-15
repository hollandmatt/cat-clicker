var clickCount = 0;

$(document).ready(function() {
    $('#click-count').text(clickCount);

    $('#cat').click(function(e) {
        clickCount++;
        $('#click-count').text(clickCount);
    });
});
