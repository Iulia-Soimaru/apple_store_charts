alert('Hello');
$(document).on('ready', function(){

    console.log('ready')
    ///// RENDER PAGE \\\\\
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
    });
});