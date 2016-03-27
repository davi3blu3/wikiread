function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            console.log(obj);
            console.log(container);
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            console.log(obj);
            console.log(container);
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}