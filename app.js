var friends = ["Hadlea", "Dom", "Sara", "Priya", "Pepper"];

function sing(friend){
    console.log(friend.toUpperCase() + ":");
    for(var i = 99; i >= 2; i--){
       console.log(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.");
       } while(i === 1){
            console.log(i + " line of code in the file, " + i + " line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file.");
            i = 0;
        }
};

for(var i = 0; i < friends.length; i++){
    console.log(sing(friends[i]));
};

//alt way to complete
// var friends = ["Hadlea", "Dom", "Sara", "Priya", "Pepper"];

// for(var i = 0; i < friends.length; i++){
//     console.log(friends[i].toUpperCase() + ':');
//     for(var j = 99; j > 0; j--){
//          if(j > 2){
            //     console.log(j + 'song lyrics....');
            // } else if(j ===2 ){
            //     console.log(j + 'song lyrics...');
            // } else {
            //     console.log(j + 'song lyric...')
            // }        

//     }
// };