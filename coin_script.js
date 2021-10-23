let heads = 0;
let tails = 0;
let myCoin = document.querySelector('.my-coin');
let myBtn = document.getElementById('flipbtn');

myBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    myCoin.style.animation = "none";
    if (i) {
        setTimeout(function () {
            myCoin.style.animation = "tails 3s forwards";
        }, 100);
        heads++;
    }
    else {
        setTimeout(function () {
            myCoin.style.animation = "heads 3s forwards";
        }, 100);
        tails++;
    }

    setTimeout(updateScore, 3000);
});

function updateScore() {
    document.querySelector('#heads-div').textContent = `Heads: ${heads}`;
    document.querySelector('#tails-div').textContent = `Tails: ${tails}`;
}