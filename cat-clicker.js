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
    },
    {
        name: 'Inferior Cat 2',
        image: 'https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg',
        count: 0
    },
    {
        name: 'Inferior Cat 3',
        image: 'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg',
        count: 0
    },
    {
        name: 'Inferior Cat 4',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/George,_a_perfect_example_of_a_tuxedo_cat.jpg',
        count: 0
    }
];

$(document).ready(function() {
    cats.map(function (cat, index) {
        var catSelectorItem = document.createElement('li');
        $(catSelectorItem).text(cat.name);
        $(catSelectorItem).click(function() {
            $('#cat-name').text(cat.name);
            $('#cat-count').text(cat.count);
            $('#cat-image').attr('src', cat.image);
            $('#cat-image').attr('data-cat-index', index);
            $('#cat-image').off();
            $('#cat-image').click(function() {
                var thisCat = cats[ $('#cat-image').attr('data-cat-index')];
                console.log(thisCat.name, 'clicked');
                thisCat.count++;
                $('#cat-count').text(thisCat.count);
            });
        });
        $('#cat-selector').append(catSelectorItem);
    });
});
