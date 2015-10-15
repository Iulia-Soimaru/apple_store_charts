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
        $('.main-container').append(templatingFunction(context));
        $('.white-overlay').hide();
        $('.spinner').hide();
    });
}; //close renderInitialPage

var renderTopChart = function(topChart, url){
    $(topChart).on('click', function(evt){
        evt.preventDefault();
        $('.main-container').html('');
        $('.white-overlay').show();
        $('.spinner').show();

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
        }).done(function(response){
            var context = {};
            context.all_apps = response
            console.log(response)
            var source = $('#renderIndexPage').html();
            var templatingFunction = Handlebars.compile(source);
            console.log(context)
            $('.main-container').append(templatingFunction(context));
            $('.white-overlay').hide();
            $('.spinner').hide();
        });
    }); // close topChart.on.click
}; // close renderTopChart

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

var displayRatingStars = function(){
    Handlebars.registerHelper('starRating', function(rating) {
        var totalRating = '';
        var star = '<i class="fa fa-star fa-1"></i>';
        var halfStar = '<i class="fa fa-star-half-o fa-1"></i>';
        for(var i=0; i < Math.floor(rating); i++)
            totalRating += star;
        if(rating % 1 != 0)
            totalRating += halfStar
        return totalRating
    });
}; // close displayRatingStars

var displayAppNumber = function(){
    Handlebars.registerHelper('appNumber', function(value){
        return parseInt(value) + 1;
    });
}; //close displayAppNumber

var displayNonPrice = function(){
    Handlebars.registerHelper('ifCond', function(price, appUrl) {
      if(price == 0) {
        return '<a href="'+ appUrl +'" target="_blank" class="app-link">Free</a>';
      }
      return '<a href="'+ appUrl +'" target="_blank" class="app-link">$'+ price +'</a>';
    });
}; // close displayNonPrice

$(document).on('ready', function(){

    displayRatingStars();
    displayAppNumber();
    displayNonPrice();

    renderInitialPage();
    chartOptionActive();
    toggleNavigation();

    renderTopChart('.option-paid', $('.option-paid a').attr('href'));
    renderTopChart('.option-free', $('.option-free a').attr('href'));
    renderTopChart('.option-all', $('.option-all a').attr('href'));


});