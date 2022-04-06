// Obtain the img element, and assign it to the image variable
let image = document.getElementById('pet')

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById('shrink-grow')

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
    image.style.width = "25px"
  }
  else {
    image.style.height = "100px"
    image.style.width = "100px"
  }
})

let resetImage = document.getElementById('resetImage')

resetImage.addEventListener('click', function(){
    image.style.height = '300px'
    image.style.width = '300px'

})

