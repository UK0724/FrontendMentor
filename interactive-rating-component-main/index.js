const ratingButtons = document.querySelectorAll('.rating__circle')
const submitButton = document.querySelector('.btn')
const thanksContainer = document.querySelector('.thanks_container')
const ratingContainer = document.querySelector('.rating-container')
const rating = document.querySelector('.selected-rating')
let selectedRating = 1


submitButton.addEventListener('click', () => {
    thanksContainer.style.display = 'block'
    ratingContainer.style.display = 'none'
    // console.log(ratingContainer)
    ratingButtons.forEach(button => {
        let currentButton = button.classList.contains('active')
        if (currentButton) {
            selectedRating = button.innerText
        }
    });

    rating.innerText = selectedRating

})


ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass()
        button.classList.add('active')
    })
});


const removeActiveClass = () => {
    ratingButtons.forEach(button => {
        button.classList.remove('active')
    });
}