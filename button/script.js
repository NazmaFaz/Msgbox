let button = {
    red: {
        bg: "rgb(198, 23, 23);",
        },
    blue: {
        bg: "rgb(44, 44, 141)",

    },
    green: {
        bg: "green",
    }
}

let back = document.querySelector('#red');
let bg1 = document.querySelector('#blue');
let bg2 = document.querySelector('#green')

red.addEventListener('click', function(){
    console.log('insideRed')
back.style.backgroundColor=`${toggle.red.bg}`;
});
blue.addEventListener('click', function(){
    console.log('insideBlue')
back.style.backgroundColor=`${toggle.blue.bg}`;
});
green.addEventListener('click', function(){
    console.log('insideGreen')
    back.style.backgroundColor=`${toggle.green.bg}`;
});