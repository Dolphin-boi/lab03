let turn = 1
let a_tab = [0,1,2,3,4,5,6,7,8]
let tab = [0,0,0,0,0,0,0,0,0]
let end = false
function pic(block) {
    if (end===true) {
        return 0
    }
    if (turn%2===1) {
        if(block===0) {
            im1.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png';
        }
        else if(block===1) {
            im2.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===2) {
            im3.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===3) {
            im4.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===4) {
            im5.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===5) {
            im6.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===6) {
            im7.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===7) {
            im8.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        else if(block===8) {
            im9.src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'
        }
        tab[block] = 1
    }
    else {
        if(block===0) {
            im1.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png';
        }
        else if(block===1) {
            im2.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===2) {
            im3.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===3) {
            im4.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===4) {
            im5.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===5) {
            im6.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===6) {
            im7.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===7) {
            im8.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        else if(block===8) {
            im9.src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'
        }
        tab[block] = 2
    }
    turn++
    a_tab.splice(a_tab.indexOf(block), 1);
    console.log(tab)
    win_check()
    if (turn%2===0) {
        bot()
    }
}
function rand() {
    x = a_tab[Math.floor(Math.random()*(a_tab.length))]
    return x
}
function bot() {
    x = rand()
    console.log(x);
    if (x===0) {
        im1.click()
    }
    else if (x===1) {
        im2.click()
    }
    else if (x===2) {
        im3.click()
    }
    else if (x===3) {
        im4.click()
    }
    else if (x===4) {
        im5.click()
    }
    else if (x===5) {
        im6.click()
    }
    else if (x===6) {
        im7.click()
    }
    else if (x===7) {
        im8.click()
    }
    else if (x===8) {
        im9.click()
    }
}
function win_check() {
    x = 0
    if (tab[0]==tab[1]&&tab[1]==tab[2]){
        x = tab[0]
    }
    else if (tab[3]==tab[4]&&tab[4]==tab[5]){
        x = tab[3]
    }
    else if (tab[6]==tab[7]&&tab[7]==tab[8]){
        x = tab[6]
    }
    else if (tab[0]==tab[3]&&tab[3]==tab[6]){
        x = tab[0]
    }
    else if (tab[1]==tab[4]&&tab[4]==tab[7]){
        x = tab[1]
    }
    else if (tab[2]==tab[5]&&tab[5]==tab[8]){
        x = tab[2]
    }
    else if (tab[0]==tab[4]&&tab[4]==tab[8]){
        x = tab[0]
    }
    else if (tab[2]==tab[4]&&tab[4]==tab[6]){
        x = tab[2]
    }
    if (x===1) {
        document.getElementById("winner").innerHTML = "You win!";
        end = true
    }
    else if (x===2) {
        document.getElementById("winner").innerHTML = "Computer win!";
        end = true
    }
    else if (a_tab.length===0) {
        document.getElementById("winner").innerHTML = "draw";
        end = true
    }
}
const im1 = document.getElementById('im1');
const im2 = document.getElementById('im2');
const im3 = document.getElementById('im3');
const im4 = document.getElementById('im4');
const im5 = document.getElementById('im5');
const im6 = document.getElementById('im6');
const im7 = document.getElementById('im7');
const im8 = document.getElementById('im8');
const im9 = document.getElementById('im9');
im1.addEventListener('click', function handler(){
    pic(0);
    im1.removeEventListener('click', handler, true);
},true );
im2.addEventListener('click', function handler(){
    pic(1);
    im2.removeEventListener('click', handler);
});
im3.addEventListener('click', function handler(){
    pic(2);
    im3.removeEventListener('click', handler);
});
im4.addEventListener('click', function handler(){
    pic(3);
    im4.removeEventListener('click', handler);
});
im5.addEventListener('click', function handler(){
    pic(4);
    im5.removeEventListener('click', handler);
});
im6.addEventListener('click', function handler(){
    pic(5);
    im6.removeEventListener('click', handler);
});
im7.addEventListener('click', function handler(){
    pic(6);
    im7.removeEventListener('click', handler);
});
im8.addEventListener('click', function handler(){
    pic(7);
    im8.removeEventListener('click', handler);
});
im9.addEventListener('click', function handler(){
    pic(8);
    im9.removeEventListener('click', handler);
});
