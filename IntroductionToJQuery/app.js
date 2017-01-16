console.log($('a').attr('href'));

//Opens all external links in new tabs
$('a').not('[href*="my-domain.com"]').attr("target", "_blank");

$('button').on('click', function () {
    $('a').attr('href', 'https://github.com');
    console.log($('a').attr('href'));
});
