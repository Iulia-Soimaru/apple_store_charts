var renderInitialPage = function(){

    $.ajax({
        url: '/',
        type: 'GET',
        dataType: 'JSON',
        data: {offset: offsetCounter}
    }).done(function(response){
        var context = {};
        context.all_apps = response
        var source = $('#renderIndexPage').html();
        var templatingFunction = Handlebars.compile(source);
        $('.main-container').append(templatingFunction(context));
        cutLongAppName();
        separateCommaInteger();
        $('.white-overlay').hide();
        $('.spinner').hide();
    });


}; //close renderInitialPage

var renderTopChart = function(topChart, url){
    $(topChart).on('click', function(evt){
        evt.preventDefault();
        $('.main-container').html('');
        $('.scroll-up-arrow').hide();
        $('.white-overlay').show();
        $('.spinner').show();

        offsetCounter = 0;

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
            data: {offset: offsetCounter}
        }).done(function(response){
            var context = {};
            context.all_apps = response
            var source = $('#renderIndexPage').html();
            var templatingFunction = Handlebars.compile(source);
            $('.main-container').append(templatingFunction(context));
            cutLongAppName();
            separateCommaInteger();
            $('.white-overlay').hide();
            $('.spinner').hide();
        });
    }); // close topChart.on.click
}; // close renderTopChart

// var limitDisplayApps = function(){
//     $('.row-app').slice(50).hide();
//     $(window).scroll(function () {
//          if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
//              $(".row-app").slice(min, max).slideDown(2000);

//              min = min + 50;
//              max = max + 50;

//          }
//      });
// }; //close limitDisplayApps


var loadMoreApps = function(){
    var counter = offsetCounter / 50, url;



    if( $(window).scrollTop() + $(window).height() == $(document).height() && counter < 7){

        if($('.option-paid').hasClass('active')){
            url = '/top_paid';
        } else if($('.option-free').hasClass('active')){
            url = '/top_free';
        } else if($('.option-grossing').hasClass('active')){
            url = '/top_grossing';
        } else {
            url = '/';
        };

        offsetCounter += 50;
        console.log(counter)

       $.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
            data: {offset: offsetCounter}
        }).done(function(response){
            var context = {};
            context.all_apps = response
            var source = $('#renderIndexPage').html();
            var templatingFunction = Handlebars.compile(source);
            $('.main-container').append(templatingFunction(context));
            displayAppNumber();
            cutLongAppName();
            separateCommaInteger();
        });
    };
}; // close loadMoreApps


var cutLongAppName = function(){
    var length = 35, limit = 32;
    $('.app-title').each(function(index, element){
        if( $(element).text().length >= length ){
            var text = ( ($(element).text()) ).substr(0, limit);
            $(element).text(text + '...');
        };
    });
}; //close cutLongAppName function


var scrollTop = function(){
    $(".scroll-up-arrow").on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, "fast");

        return false;
    });
}; //close scrollTop

var separateCommaInteger = function(){
    Handlebars.registerHelper('countReviews', function(reviews){
        return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
}; // close separateCommaInteger

var chartOptionActive = function(){
    $('.chart-option').on('click', function(){
        $('.chart-option').removeClass('active');
        $(this).addClass('active');
    });

    $('.option-all').on('click', function(){
        $('.chart-option').removeClass('active');
    });

    offsetCounter = 0;
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
        var emptyStar = '<i class="fa fa-star-o"></i>';
        for(var i=0; i < Math.floor(rating); i++)
            totalRating += star;
        if(rating % 1 != 0)
            totalRating += halfStar;
        for(var i=0; i < ( 5 - Math.ceil(rating) ); i++)
            totalRating += emptyStar;
        return totalRating
    });
}; // close displayRatingStars


var displayIfInAppPurchase = function(){
    Handlebars.registerHelper('inAppPurchase', function(exists){
        if(exists)
            return 'Available in App Purchase'
    });
}; //displayIfInAppStore


var displayAppNumber = function(){
    Handlebars.registerHelper('appNumber', function(value){
        return parseInt(value) + offsetCounter + 1;
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
    console.log('here')

    offsetCounter = 0;
    renderInitialPage();

    scrollTop();

    displayRatingStars();
    displayAppNumber();
    displayNonPrice();
    separateCommaInteger();
    displayIfInAppPurchase();

    chartOptionActive();
    toggleNavigation();

    renderTopChart('.option-paid', $('.option-paid a').attr('href'));
    renderTopChart('.option-free', $('.option-free a').attr('href'));
    renderTopChart('.option-grossing', $('.option-grossing a').attr('href'));


});

$(window).on('scroll', function(){
    if($(window).scrollTop() >= 250){
        $('.scroll-up-arrow').show();
    };

    loadMoreApps();
});

