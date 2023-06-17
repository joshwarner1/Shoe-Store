'use strict';

alert('Warning Shoe Lovers Only!!! ');

function TheUsersName() {
    let usersName = prompt('What is your nickname ');
    if (usersName == '') {
        TheUsersName();
    }
    console.log('Whats Good !!!! ' + usersName);
    return document.write('Whats Good !!!! ' + usersName);
}

function shoeJordanNumber() {
    let shoeJordanNumber = prompt('What is your favorite pair of Jordans ');
    let message;
    if(shoeJordanNumber == '') {
        shoeJordanNumber();
    }
    else if (shoeJordanNumber < 13) {
        message = 'You got that heat!!! ';
    }
    else if (shoeJordanNumber > 13) {
        message = 'I see ya !! '; 
    }
    else if (shoeJordanNumber <= 8) {
        message = 'These are the ones !!! ';
    }
    else {
        message = 'All Styles of shoes are accepted here !!! ';
        }
        console.log(message);
        return document.write(message);
}

