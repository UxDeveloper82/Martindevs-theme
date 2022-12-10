$('.small-image img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');
    let image = $(this).attr('src');
    $('.big-image img').attr('src', image);
    
    });