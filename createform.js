var totalcount=0;
var options=new Array();
var questions=new Array();
function addquestion(){
    // var newquestion=new question();
    totalcount+=1;
    if(totalcount==1){
    document.getElementById("questions").innerHTML+=
        '<div class="question-container">'+
        '<div class="form-group">'+
            '<div id="question'+totalcount+'">'+
                '<br><label for='+'question'+totalcount+'">Q'+totalcount+'<input type="text" id="Question'+totalcount+'">'
        +'</div>'
            +'<button type="button"  onclick="addOption('+totalcount+')">➕</button>'
        +'</div>'
        +'<div id="optionsforquestion'+totalcount+'">'+'</div>'
    +'</div><div id="question'+(totalcount+1)+'"></div>';
    }
    else{
        document.getElementById("question"+(totalcount)).innerHTML=
        '<div class="question-container">'+
        '<div class="form-group">'+
            '<div id="question'+totalcount+'">'+
                '<br><label for='+'question'+totalcount+'">Q'+totalcount+'<input type="text" id="Question'+totalcount+'">'
        +'</div>'
            +'<button type="button"  onclick="addOption('+totalcount+')">➕</button>'
        +'</div>'
        +'<div id="optionsforquestion'+totalcount+'">'+'</div>'
    +'</div><div id="question'+(totalcount+1)+'"></div>';   
    console.log('Question method: '+'Question'+totalcount)     
    }
    options.push(0);
    console.log('<div id="optionsforquestion'+totalcount+'">'+'</div>')
}
function addOption(question_number){
    options[parseInt(question_number)-1]+=1;
    console.log(options)
    if(options[parseInt(question_number)-1]==1){
        document.getElementById('optionsforquestion'+parseInt(question_number)).innerHTML='<div id=question'+parseInt(question_number)+'option1>'+
        'option'+1  +'<input type="text" id="Question'+parseInt(question_number)+options[parseInt(question_number)-1]+'"><br>'+
        '</div><div id=question'+parseInt(question_number)+'option'+(options[parseInt(question_number)-1]+1)+'></div>'
    }
    else{
        document.getElementById('question'+parseInt(question_number)+'option'+(options[parseInt(question_number)-1])).innerHTML=
        'option'+options[parseInt(question_number)-1]+'<input type="text" id="Question'+parseInt(question_number)+options[parseInt(question_number)-1]+'"><br>'+
        '</div><div id=question'+parseInt(question_number)+'option'+(options[parseInt(question_number)-1]+1)+'></div>'
    }
    console.log('optionsforquestion'+parseInt(question_number))
    console.log('<button type="radio" name="question'+parseInt(question_number)+'"></button>'+'<input type="text" id="Question'+parseInt(question_number)+options[parseInt(question_number)-1]+'"><br>')
}
function redirect(){
    var website='<html>'+
   +' <head>'
   +'     <title>'
   +'         My Page'
   +'     </title>'
   +'     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">'
   +'     <link rel="stylesheet" href="createform.css">'
   +'     <meta charset="utf-8">'
   +'     <meta name="viewport" content="width=device-width, initial-scale=1">'
   +'     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">'
//    +'     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'
//    +'     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>'
   +'     <script src="createform.js"></script>'
   +' </head>'
   +' <body>'
   +'     <nav class="navbar navbar-inverse navbar-fixed-top">'
   +'         <div class="container-fluid">'
   +'           <div class="navbar-header">'
   +'             <a class="navbar-brand" href="home.html">Suhrut forms</a>'
   +'           </div>'
   +'           <ul class="nav navbar-nav">'
   +'             <li ><a href="home.html">Home</a></li>'
   +'             <li><a class="active" href="#">Create Form</a></li>'
   +'           </ul>'
   +'         </div>'
   +'       </nav>'
   +'     <br>'
   +'     <br>'
   +'     <br>'
   +'     <br>'
   var somevar="";
   for(var i=1;i<=totalcount;i++){
       somevar+='Question'+i;
        website+='<div class="question-container1">'+'Q'+i+'. '+document.getElementById('Question'+i).value;
        // console.log(document.getElementById('Question'+i).value);
        website+='<div class="Options"'+'>'
        for(j=1;j<=options[i-1];j++){
            website+='<div><input type="radio" id="Q'+i+'O'+j+'"name="Q'+i+'" value='+document.getElementById('Question'+i+j).value+'>'+'<label for="Q'+i+'O'+j+'">'+document.getElementById('Question'+i+j).value+'</label></div>'
            console.log('<div><input type="radio" id="Q'+i+'O'+j+'"name="Q'+i+'" value='+document.getElementById('Question'+i+j).value+'>'+'<label for="Q'+i+'O'+j+'">'+document.getElementById('Question'+i+j).value+'</label></div>')
        }
        website+='</div></div>'
   }
   document.write(website);
   console.log(website);
}