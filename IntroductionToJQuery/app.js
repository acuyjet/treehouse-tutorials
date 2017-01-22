$('.loc').hover(
    function() {
        $(this).html("<strong>Location:</strong> Your house?");
    },
    function() {
        $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
    });

//Adds a pet to the age with user input on button click
$('#add-pet').on('click', function () {
    //Grab info from the Post form
    const $name = $('#pet-name').val();
    const $species = $('#pet-species').val();
    const $notes = $('#pet-notes').val();

    //Create new HTML elements
    const $newPet = $(
        '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name + 
        '</p><p><strong>Species:</strong> ' + $species + 
        '</p><p><strong>Notes:</strong> ' + $notes + 
        '</p><span class="close">&times;</span></div></section>'
    );

    //Attach the new element to the page
    $('#posted-pets').append($newPet);
});

//Fade in for kitten photos
$('img').hide().fadeIn(1500);

$('.card').on('click', function () {
    $(this).toggleClass('selected');
});

