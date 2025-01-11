function toggle(button) {
    const buttonElement = document.querySelector(button);
    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        buttonElement.classList.add('is-toggled')
    }
}