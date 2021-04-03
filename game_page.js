player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2name;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn—info' onclick='check '>Check</button>"; 
    row = question_number + input_box + check_button; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("number1").innerHTML = ""; 
    document.getElementById("number2").innerHTML = "";
}
playerturn_answer = "player2";
playerturn_question = "player1";
function check(){
    getanswer = document.getElementById("input_check_box").value;
    answer = getanswer.toLowerCase();
    if (answer == word){
        if (playerturn_answer == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }

    if (playerturn_question == "player1"){
        playerturn_question = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player2name;
    }
    else {
        playerturn_question = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player1name;
    }

    if (playerturn_answer == "player1"){
        playerturn_answer = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player2name;
    }
    else {
        playerturn_answer = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player1name;
    }
    document.getElementById("output").innerHTML = "";
}