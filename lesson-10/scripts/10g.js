function toggle(tag) {

    const gamingButton = document.querySelector('.js-gaming-button');
    const musicButton = document.querySelector('.js-music-button');
    const techButton = document.querySelector('.js-tech-button');

    // Remove 'is-toggled' class from all buttons
    gamingButton.classList.remove('is-toggled');
    musicButton.classList.remove('is-toggled');
    techButton.classList.remove('is-toggled');

    // Add 'is-toggled' class to the selected button
    if (tag === 'gaming') {
        gamingButton.classList.add('is-toggled');
    } else if (tag === 'music') {
        musicButton.classList.add('is-toggled');
    } else if (tag === 'tech') {
        techButton.classList.add('is-toggled');
    }
}
