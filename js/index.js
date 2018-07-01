var services = ["Website Development", "Mobile App Development", "Design and Markup", "Digital Marketing", "Content Development", "Analytics"];

var services_description = ["Whether you demand web development solution or it is a custom web development project, we are capable of tackling it in the best manner. Bestowed with the most professional and advanced resources, we bring the most satisfactory outcomes for your online business. We make sure that you own a website exactly the same you were looking for. Sparx IT Solutions is a renowned offshore web development company, engaged in catering incredible web development services.", 
"description 2", "description 3", "description 4", "description 5", "description 6"];

var service_heading = document.getElementById("service-heading");
var service_data = document.getElementById("service-data");

var services_list = document.getElementsByClassName("services-list");

function service_func(ser) {
    service_heading.innerHTML = services[ser];
    service_data.innerHTML = services_description[ser];
    services_list[ser].style.color =  "#FF9800";
    services_list[ser].style.borderBottom = "1px solid #FF9800";

    for(i=0; i<services_list.length; i++) {
        if(i!=ser) {
            services_list[i].style.color =  "#888";
            services_list[i].style.borderBottom = "1px solid #e9e9e9";
        }
    }
}

nav_expand_array = ["services_exp", "work_exp"];
nav_expand_active = -1;

var nav_cover = document.getElementsByClassName("nav-cover");
function nav_expand_func(val) {

    if(nav_expand_active!=-1) {
        nav_expand_off();
        if(nav_expand_active != val) {
            setTimeout(function(){
                nav_expand_on(val);
            }, 1000);
        }
    } else {
        nav_expand_on(val);
    }
}

function nav_expand_on(val) {
    var exp = document.getElementById(nav_expand_array[val]);
    exp.style.display = "block";
    nav_cover[0].style.display = "block";

    nav_expand_active = val;

    setTimeout(function(){
        exp.style.height = "356px";
        exp.style.opacity = "1";
    },1);
}

function nav_expand_off() {
    var exp = document.getElementById(nav_expand_array[nav_expand_active]);
    exp.style.height = "0";
    exp.style.opacity = "0";

    setTimeout(function(){
        exp.style.display = "none";
        nav_cover[0].style.display = "none";
    },1000);

    nav_expand_active = -1;
}