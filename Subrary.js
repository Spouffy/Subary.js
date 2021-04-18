//Spouffy's library
// Open source

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