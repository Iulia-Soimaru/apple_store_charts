var renderInitialPage = function(){
    $.ajax({
        url: 'http://localhost:3000/',
        type: 'GET',
        dataType: 'JSON',
    }).done(function(response){
        var context = {};
        context.all_apps = response
        console.log(response)
        var source = $('#renderIndexPage').html();
        var templatingFunction = Handlebars.compile(source);
        console.log(context)
        // context.questions = response;
        $('.main-container').append(templatingFunction(context));
        $('.white-overlay').hide();
        $('.spinner').hide();
    });
}; //close renderInitialPage

var chartOptionActive = function(){
    $('.chart-option').on('click', function(){
        $('.chart-option').removeClass('active');
        $(this).addClass('active');
    });
}; //close chartOptionActive

var toggleNavigation = function(){
    $(".nav-toggle").on("click", function() {
        $(this).toggleClass("active");
        $('.navigation').slideToggle('fast');
    });
}; //close toggleNavigation

$(document).on('ready', function(){

    renderInitialPage();
    chartOptionActive();
    toggleNavigation();

});