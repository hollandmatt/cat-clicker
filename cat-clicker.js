var cats = [
    {
        name: 'Velvet',
        image: 'https://farm9.staticflickr.com/8048/8094397080_f8e498ecc5_z.jpg',
        count: 0
    },
    {
        name: 'Inferior Cat',
        image: 'https://www.petfinder.com/wp-content/uploads/2012/11/99059361-choose-cat-litter-632x475.jpg',
        count: 0
    }
];

$(document).ready(function() {
    cats.map(function (cat, index) {
        $('#cat' + index + 'name').text(cat.name);
        $('#cat' + index + 'count').text(cat.count);
        $('#cat' + index + 'image').attr('src', cat.image);

        $('#cat' + index + 'image').click(function() {
            cat.count++;
            $('#cat' + index + 'count').text(cat.count);
        });
    });
});
