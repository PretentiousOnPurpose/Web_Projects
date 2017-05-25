var name1 = player1.innerHTML;
var name2 = player2.inneeHTML;
var chance = 0;
var done = 0;
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
var name1 = player1.innerHTML;
var name2 = player2.innerHTML;
var s1 = document.querySelector('#scorep1');
var s2 = document.querySelector('#scorep2');
var score1 = 0;
var score2 = 0;
var cell1 = document.querySelector('#c1');
var cell2 = document.querySelector('#c2');
var cell3 = document.querySelector('#c3');
var cell4 = document.querySelector('#c4');
var cell5 = document.querySelector('#c5');
var cell6 = document.querySelector('#c6');
var cell7 = document.querySelector('#c7');
var cell8 = document.querySelector('#c8');
var cell9 = document.querySelector('#c9');
var resultp = document.querySelector('#result');
var resetarr = [cell1 , cell2 , cell3 , cell4 , cell5 , cell6 , cell7 , cell8 , cell9];

player1.innerHTML = name1 + " *";
<<<<<<< HEAD

function entry(div) {
    if (done === 0) {
        check();
        if (chance % 2 === 0) {
            player2.innerHTML = name2 + " *";
            player1.innerHTML = name1;
            if (((div.innerHTML !== "O" || div.innerHTML !== "X") && div.innerHTML === "") && done === 0) {
                div.innerHTML = "O";
                chance++;
            }
        } else if (chance % 2 !== 0) {
            player1.innerHTML = name1 + " *";
            player2.innerHTML = name2;
            if (((div.innerHTML !== "O" || div.innerHTML !== "X") && div.innerHTML === "") && done === 0) {
                div.innerHTML = "X";
                chance++;
=======
function entry(div) {
        if (done === 0) {
            check();
            if (chance % 2 === 0) {
                player2.innerHTML = name2 + " *";
                player1.innerHTML = name1;
                if (div.innerHTML !== "O" || div.innerHTML !== "X") {
                    div.innerHTML = "O";
                    chance++;
                }
            } else {
                player1.innerHTML = name1 + " *";
                player2.innerHTML = name2;
                if (div.innerHTML !== "O" || div.innerHTML !== "X") {
                    div.innerHTML = "X";
                    chance++;
                }
>>>>>>> 8146ef1c9a5acfe9d41768cb88bfdc8af7676b09
            }
        }
        check();
    }
}

function check() {
    if ((cell1.innerHTML === cell2.innerHTML) && (cell1.innerHTML === cell3.innerHTML)) {
        if (cell1.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell1.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    } else if ((cell1.innerHTML === cell4.innerHTML) && (cell1.innerHTML === cell7.innerHTML)) {
        if (cell1.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            done++;
            s1.innerHTML = "Score: " + ++score1;
            return;
        } else if (cell1.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    } else if ((cell1.innerHTML === cell5.innerHTML) && (cell1.innerHTML === cell9.innerHTML)) {
        if (cell1.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell1.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    } else if ((cell7.innerHTML === cell8.innerHTML) && (cell7.innerHTML === cell9.innerHTML)) {
        if (cell7.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell7.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    } else if ((cell3.innerHTML === cell6.innerHTML) && (cell3.innerHTML === cell9.innerHTML)) {
        if (cell3.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell3.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    } else if ((cell4.innerHTML === cell5.innerHTML) && (cell4.innerHTML === cell6.innerHTML)) {
        if (cell4.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell4.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    } else if ((cell2.innerHTML === cell5.innerHTML) && (cell2.innerHTML === cell8.innerHTML)) {
        if (cell2.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell2.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    }  else if ((cell7.innerHTML === cell5.innerHTML) && (cell7.innerHTML === cell3.innerHTML)) {
        if (cell7.innerHTML === "O") {
            resultp.innerHTML = player1.innerHTML + "Wins !";
            s1.innerHTML = "Score: " + ++score1;
            done++;
            return;
        } else if (cell7.innerHTML === "X") {
            resultp.innerHTML = player2.innerHTML + "Wins !";
            s2.innerHTML = "Score: " + ++score2;
            done++;
            return;
        }
    }
    if (chance === 9) {
        resultp.innerHTML = "It's a Tie!";
    }
}
    function reset() {
        for (var i = 0; i < resetarr.length; i++) {
            resetarr[i].innerHTML = "";
        }
        resultp.innerHTML = "";
        chance = 0;
        done = 0;
        player1.innerHTML = name1 + " *";
        player2.innerHTML = name2;
        return;
    }
