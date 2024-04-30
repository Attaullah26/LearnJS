const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
// console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === "green"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "black"){
            document.body.style.backgroundColor = e.target.id
            document.body.style.color = 'white'
            document.body.style.transition = 'all 1s'
        }
        if(e.target.id === "pink"){
            document.body.style.backgroundColor = e.target.id
        }
    })
})