var friends = ["Hadlea", "Dom", "Sara", "Priya", "Pepper"];

//creates button and calls global function to display the friends song
var btn = document.getElementById('my-btn');
btn.addEventListener("click", function() {
    for(var i = 0; i < friends.length; i++){
        sing(friends[i]);
    };
});


function sing(friend){
    //creates div to hold text
    var friendDiv = document.createElement('div');    
    friendDiv.className = 'friend';

    //creates Name of friend to title their chorus
    var name = document.createTextNode(friend.toUpperCase() + ":")
    friendDiv.appendChild(name);

    //loops through friend array
    for(var i = 99; i > 0; i--) {
        if (i > 1) {
            //creates paragraghs inside the div and adds current text lyric
            var para = document.createElement('p');
            var text = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.");
            //adds the elements to the page once eventListener is met
            para.appendChild(text)
            friendDiv.appendChild(para);
        }
        else  {
            var para = document.createElement('p');
            var text = document.createTextNode(i + " line of code in the file, " + i + " line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file.");      
            para.appendChild(text)
            friendDiv.appendChild(para);
         }  
    } 
    
    //adds each div to the body once once everything runs
    document.body.appendChild(friendDiv);
};

