const color_buttons = document.querySelectorAll('.color-button')
const cont = document.querySelector('.container')

color_buttons.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);

        // remove existing id
        cont.removeAttribute('id');
        
        if (e.target.id === 'dry-sage') {
            cont.id = e.target.id;
        }
        if (e.target.id === 'beige') {
            cont.id = e.target.id;
        }
        if (e.target.id === 'cornsilk') {
            cont.id = e.target.id;
        }
        if (e.target.id === 'papaya-whip') {
            cont.id = e.target.id;
        }
        if (e.target.id === 'light-bronze') {
            cont.id = e.target.id;
        }
        if (e.target.id === 'dry-sage') {
            cont.id = e.target.id;
        }
    });
});