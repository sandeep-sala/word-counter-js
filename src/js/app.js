function send(el){
    document.getElementById("loader").style.display = "block"
    var txt = el.value
    var data = count(txt);
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

function count(el){
    var word_dict = {}
    var word_list  = el.trim().split(" ")
    if ( word_list.length == 1 && word_list[0] == "" ){word_count = 0}
    letter_count = word_list.length 
    for(i=0;i<letter_count;i++){
        if(word_list[i] != ''){
            if(word_list[i] in word_dict){ word_dict[word_list[i]] += 1 }
            else{ word_dict[word_list[i]] = 1 }
        }
    }
    var Data = { 
            'sorted_word' : Object.entries(word_dict).sort((a, b) => b[1] - a[1]),
            'word_count'  : word_count,
            'letter_count': letter_count
        }
    return Data    
}
