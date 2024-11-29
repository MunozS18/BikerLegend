document.addEventListener("DOMContentLoaded", function () {
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var message = document.getElementById("message");
    var fromValue = from.value;
    var toValue = to.value;
    var messageValue = message.value;
    var fromValue = from.value;
    var toValue = to.value;
    var messageValue = message.value;

    function sendMessage(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert(this.responseText.message);
                from.value = "";
                to.value = "";
                message.value = "";
                document.getElementById("message").value = ""; 
                document.getElementById("from").value = "";
                document.getElementById("to").value = "";
                
            }
        }   
        xhttp.open("POST", "https://api.example.com/sendMessage", true);
        xhttp.setRequestHeader("content-tpye", "application/json");
        xhttp.send(JSON.stringify({"from" : fromValue, "to" : toValue, "message" : messageValue}));
    }

    document.getElementById("sendMessage").addEventListener("click", sendMessage);

});