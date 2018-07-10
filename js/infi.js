var bg_text = document.getElementsByClassName("infi-testi-bg-text");
var user_pic = document.getElementsByClassName("user-pic");
var user_name = document.getElementsByClassName("user-name");
var user_msg = document.getElementsByClassName("user-msg");

i = 0;
j = 0;

testi_anim_func = (i) => {
    if(i==2) {
        j=0;
    } else {
        j++;
    }
    bg_text[i].style.left = "-30%";
    bg_text[i].style.opacity = "0";
    user_pic[i].style.left = "-30%";
    user_pic[i].style.opacity = "0";
    user_name[i].style.left = "-30%";
    user_name[i].style.opacity = "0";
    user_msg[i].style.right = "30%";
    user_msg[i].style.opacity = "0";
    setTimeout(function(){
        bg_text[i].style.left = 30+"%";
        user_pic[i].style.left = 50+"%";
        user_name[i].style.left = 30+"%";
        user_msg[i].style.right = -25+"%";
    },3000);
    setTimeout(function(){
        bg_text[j].style.opacity = "1";
        user_pic[j].style.opacity = "1";
        user_name[j].style.opacity = "1";
        user_msg[j].style.opacity = "1";

        bg_text[j].style.left = 0+"%";
        user_pic[j].style.left = 30+"%";
        user_name[j].style.left = 10+"%";
        user_msg[j].style.right = 5+"%";
    },1000);
}

setInterval(function(){
    testi_anim_func(i);
    if(i==2) {
        i=0;
    } else {
        i++;
    }
}, 3000);