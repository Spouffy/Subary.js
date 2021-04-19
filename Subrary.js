//Spouffy's library
// Open source

function l(v){console.log(v)}

function hide(e){
    try {
        document.getElementById(e).style.display = 'none'
    } catch (error) {
    }
    try {
        var x = document.getElementsByClassName(e)
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'none';  
        }
    } catch (error) {
    }
    try {
        var x = document.getElementsByTagName(e)
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
    } catch (error) {
    }
}

function show(e){
    try {
        document.getElementById(e).style.display = 'block'
    } catch (error) {
    }
    try {
        var x = document.getElementsByClassName(e)
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'block';  
        }
    } catch (error) {
    }
    try {
        var x = document.getElementsByTagName(e)
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
    } catch (error) {
    }
}

function ElmFollowCursor(delay, id){
    if(delay === 0 || delay > 0){
        window.addEventListener('mousemove', function(e){
            let cursor = document.getElementById(id);
            cursor.style.position = 'absolute';
            setTimeout(function(){
                cursor.style.left = (e.pageX - 16) + 'px';
                cursor.style.top = (e.pageY - 16) + 'px';
            }, delay);
        })  
    }else{
        console.error('imgFollowCursor : please, provide an integer and then a string. EX: ElmFollowCursor(100, "imgId")');
}}

function pgcd(min, max){ // PGCD calculator function - TO DO !
    max = Math.max(min,max);
    min = Math.min(min,max);
    var temp;
    var state = false;
    var bigger;
    var smaller;
    if (min > max || min < max){
            state = false;
            temp = max - min;
            bigger = Math.max(temp, min);
            smaller = Math.min(temp, min);
        while(!state){
                temp = bigger - smaller;
                bigger = Math.max(temp, smaller);
                smaller = Math.min(temp, smaller);
            if(temp == 0){
                state = true;
                return bigger;
            }
    }
    }
}

function randomInt(min, max){
    rand = Math.round(Math.random() * (max - min) ) + min;
    return rand
}

function createElm(tag, id, parent_id){
    try {
        var parent = document.getElementById(parent_id)
        var e = document.createElement(tag);
        parent.appendChild(e);
        e.id = id;
        return e;
    } catch (error) {
        l(error)
    }
}