function pourCoffee(x) {
    x.classList.toggle('bi-cup-hot')
}

function chowHide() {
    let x = document.getElementById('hidden')
    if(x.style.display === 'block') {
        x.style.display = 'none'
    }else {
        x.style.display = 'block'
    }
}

function swapContent() {
    let x = document.getElementById('textas')
    if(x.innerHTML === 'labas vakaras') {
        x.innerHTML = 'labas rytas'
    }else {
        x.innerHTML = 'labas vakaras'
    }
}

function addClass() {
    let a = document.getElementById('manotextas')
    a.classList.toggle('manostilius')
}