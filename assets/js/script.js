

let header = document.getElementsByClassName('dropdown');
let color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function () {
        let corrent = document.getElementsByClassName('active');
        for (let j = 0; j < corrent.length; j++) {
            corrent[j].classList.remove('active')
        }
        color[i].classList.add('active')
    });
}

function menuToggle() {
    let dropdown = document.querySelector('.dropdown');
    if (dropdown.style.display == "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
} 