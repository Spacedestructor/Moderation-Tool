function reload_player_senpai(){
    document.getElementById("senpai-player").innerHTML='';
    document.getElementById("senpai-player").innerHTML='<iframe src="https://player.twitch.tv/?channel=patmesenpai_1" frameborder="0" allowfullscreen="false" scrolling="no" height="378" width="620"></iframe>';
}
function reload_chat_senpai(){
    document.getElementById("senpai-chat").innerHTML='';
    document.getElementById("senpai-chat").innerHTML='<iframe src="https://www.twitch.tv/embed/patmesenpai_1/chat" frameborder="0" scrolling="no" height="500" width="350"></iframe>';
}
function reload_moderation_senpai(){
    document.getElementById("senpai-moderation").innerHTML='';
    document.getElementById("senpai-moderation").innerHTML='Here Could be a Moderation chat!';
}