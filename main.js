$(".button").on("click", function(e) {
    container = $(this).parent();

    // if I am the last .container in my group...
    while (    document != container[0] // not reached root
            && container.find('~.container, ~:has(.container)').length == 0)
        container = container.parent(); // search siblings of parent instead

    nextdiv = container.nextAll('.container, :has(.container)').first();

    // no next .container found, go back to first container
    if (nextdiv.length==0) nextdiv = $(document).find('.container:first');

    $(document).scrollTop(nextdiv.offset().top);
    // $(this).parent().next() // this is the next div container.
    return false;
});
