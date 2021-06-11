var database =  [
    {
        username:'smallcow',
        password:'Power'
    },
    {
        username:'sally',
        password:'123'
    },
    {
        username:'ingrid',
        password:'777'
    }
];

var newsFeed = [
    {
        username:'Bobby',
        timeline:'So Haapy!!!! :-)'
    },
    {
        username:'Sally',
        timeline:'Javascript is Sooo cooool'
    },
];

var userNamePrompt = prompt('what s your usernmae?')
var passwordPrompt = prompt('what s your passwrod?')
signIn(userNamePrompt,passwordPrompt);

function isUserVlid(username,password){
    for(var i=0; i < database.length; i++){
        if(database[i].username===username&&
            database[i].password===password){
                return true;         
            } 
    }return false;
}



function signIn(username,password){      
        if(isUserVlid(username,password)){
            console.log(newsFeed);
        }else{
            alert('sorry')
            }    
}
