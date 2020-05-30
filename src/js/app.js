function send(el){
    document.getElementById("loader").style.display = "block"
    var ajax = new XMLHttpRequest();
    var csrf = document.getElementsByTagName('input')[0].value
    var txt = el.value
    ajax.open("POST", "count/", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("csrfmiddlewaretoken="+csrf+"&txt="+txt);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = JSON.parse(ajax.responseText);
            document.getElementById("word-count").innerHTML = data.word_count;
            document.getElementById("letter-count").innerHTML = data.letter_count;
            dat = data.sorted_word
            html = ''
            if (dat.length !== 0){
                for (var i=0 ;i<(dat).length; i++){
                    html+= "<tr><td>"+String(i+1)+"</td><td>"+dat[i][0]+"</td><td>"+String(dat[i][1])+"</td></tr>"
                }
            }else{
                html+= "<tr><td> - </td><td> - </td><td> - </td></tr>"
            }
            document.getElementById("counter-table").innerHTML = html
            setTimeout(function(){ 
                document.getElementById("loader").style.display = "none"
             }, 500);  
            
        }
    }
}
