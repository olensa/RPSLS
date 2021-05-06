function name_to_number(name) {
    var answer;
    switch(name) {
        case 'rock':
            answer = 0;
            break;
        case 'Spock':
            answer = 1;
            break;
        case 'paper':
            answer = 2;
            break;
        case 'lizard':
            answer = 3;
            break;
        case 'scissors':
            answer = 4;
            break;    
        default:
            answer = "Error";
    }
    return answer;
}
function number_to_name (number){
    var answer;
    switch(number) {
        case 0:
            answer = 'rock';
            break;
        case 1:
            answer = 'Spock';
            break;
        case 2:
            answer = 'paper';
            break;
        case 3:
            answer = 'lizard';
            break;
        case 4:
            answer = 'scissors';
            break;    
        default:
            answer = "Error";
    }
    return answer;
}
function rspls(player_choice) {
    console.log('Player chooses ' + player_choice);
    var player_number = name_to_number(player_choice);
    var comp_number = Math.floor(Math.random() * 5);
    var comp_choice = number_to_name(comp_number);
    document.getElementById("user_choice").innerHTML=('You choose '+player_choice);

    var result = player_number - comp_number;
    console.log(result);
    console.log('Computer chooses '+comp_choice);
    document.getElementById("comp_choice").innerHTML=('Computer chooses '+comp_choice);


    if ((result % 5) == 1 || (result % 5) == 2) {
        console.log('Player wins!');
        document.getElementById("output").innerHTML='Player wins!';
    } else if ((result % 5) == -3 || (result % 5) == -4) {
        console.log('Player wins!');
        document.getElementById("output").innerHTML='Player wins!';

    }else if ((result % 5) == 3 || (result % 5) == 4)  {
        document.getElementById("output").innerHTML='Computer wins';
    } else if  ((result % 5) == -1 || (result % 5) == -2){
        console.log ('Computer wins');
        document.getElementById("output").innerHTML='Computer wins';

    }else if ((result % 5) == 0){
        console.log("It's a tie!");
        document.getElementById("output").innerHTML="It's a tie!";
    }else{
        document.getElementById("output").innerHTML="Please choose properly";
    }
    //document.getElementById("click").submit();
}
console.log('JS loaded')