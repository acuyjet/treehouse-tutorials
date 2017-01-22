$('.loc').hover(
    function() {
        $(this).html("<strong>Location:</strong> Your house?");
    },
    function() {
        $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
    });

//Adds a pet to the page with user input on button click
$('#add-pet').on('click', function () {
    //Grab info from the Post form
    const $name = $('#pet-name');
    const $species = $('#pet-species');
    const $notes = $('#pet-notes');

    //Create new HTML elements
    const $newPet = $(
        '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() + 
        '</p><p><strong>Species:</strong> ' + $species.val() + 
        '</p><p><strong>Notes:</strong> ' + $notes.val() + 
        '</p><span class="close">&times;</span></div></section>'
    );

    //Attach the new element to the page
    $('#posted-pets').append($newPet);

    //Reset form fields
    $name.val('');
    $species.val('Dog');
    $notes.val('');

    //Remove section when user clicks on the X
    $('.close').on('click', function () {  
        $(this).parent().remove();
    });
});

//Fade in for kitten photos
$('img').hide().fadeIn(1500);

$('.card').on('click', function () {
    $(this).toggleClass('selected');
});

