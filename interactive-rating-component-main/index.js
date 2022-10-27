const ratingButtons = document.querySelectorAll('.rating__circle')
const submitButton = document.querySelector('.btn')
const thanksContainer = document.querySelector('.thanks_container')
const ratingContainer = document.querySelector('.rating-container')
const rating = document.querySelector('.selected-rating')
let selectedRating = 0


submitButton.addEventListener('click', () => {
    if (selectedRating > 0) {
        thanksContainer.style.display = 'block'
        ratingContainer.style.display = 'none'
        rating.innerText = selectedRating
    }
})


ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass()
        button.classList.add('active')
        ratingButtons.forEach((button, index) => {
            let currentButton = button.classList.contains('active')
            if (currentButton) {
                selectedRating = button.innerText
            }
        });
        addGray(ratingButtons, selectedRating)
    })
});


function addGray(ratingButtons, selectedRating) {
    for (let i = 0; i < ratingButtons.length; i++) {
        console.log(ratingButtons[i])
        if (i <= (selectedRating - 1)) {
            ratingButtons[i].style.backgroundColor = 'hsl(216, 12%, 54%)'
            ratingButtons[i].style.color = 'white'
        }
        else {
            ratingButtons[i].style.backgroundColor = ''
            ratingButtons[i].style.color = ''
        }
    }
}


const removeActiveClass = () => {
    ratingButtons.forEach(button => {
        button.classList.remove('active')
    });
}