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


function typesJordanRetro() {
   let answer;

    while(answer != 35) {
        answer = prompt('How many Jordan editions are there?');
           if (answer !=35) {
            alert('Try Again!!')
           } else {
            alert("Thats Right!!!!");
           }
        }
    }    
    


    function usersFavJordan() {
    let shoe = prompt('Whats Your FavJordan between 1-13');

    let message;
    if(shoe == '') {
        usersFavJordan();
    }
    else if (shoe  < 4) {
        message = 'Cant beat the OGs!!!';
    }
    else if (shoe <= 13) {
        message = 'Love these!!!'; 
    }
    else if (shoe >= 8) {
        message = 'These are the ones !!! ';
    }
    else {
        message = 'That is not a valid entry. Only use numbers';
        }
        console.log(message);
        return document.write(message);
    }


function siteRating () {
    let output = '';
    let rating = prompt('Rate the site on scale of 1-5');
    for(let i = 0; i < rating; i++){
        output =+ "<img class='shoerate'https://images.unsplash.com/photo-1617813254792-fdff65b515a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' />"
    }
    return document.write(output);

}
