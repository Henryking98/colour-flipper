(function () {
    const body = document.querySelector('body');
    const button = document.querySelector('.btn')
    const colorValue = document.querySelector('.color')
    const colors = ["red", "green", "#f1f5f8", "black"];

    button.addEventListener('click', () => {
        let colorIndex = Math.floor(Math.random() * colors.length);
        body.style.backgroundColor = colors[colorIndex];
        colorValue.textContent = colors[colorIndex]
    })
})();

// on comment for a random hex colour values

/*
(function () {
    const body = document.querySelector('body');
    const button = document.querySelector('.btn')
    const colorValue = document.querySelector('.color')
    const hexValue = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","D","E","F"];

    button.addEventListener('click', () => {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            let hexIndex = Math.floor(Math.random() * hexValue.length);
            hex += hexValue[hexIndex]
            body.style.backgroundColor = hex;
            colorValue.textContent = hex;
        }
    });
})();

 */