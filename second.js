var xhttp =new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var response =JSON.parse(this.responseText);
        var output ="";
        for(var i=0;i<response.length;i++){
            if(response[i].completed==true){
            output+= '<input class="checkbox" type="checkbox" checked>  '+response[i].title +'<br>'
            document.getElementById("todolist").innerHTML=output;
                                   
        }else{
            output+= '<input class="checkbox" type="checkbox" OnClick="linkClick()"> '+response[i].title +'<br>'
            document.getElementById("todolist").innerHTML=output;}

        }
           
    }   
}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    


  




// function getTick(){
//     new Promise(function(resolve,reject){
//         getApi(),
//     })
// }




    
    //  
    
    var clicks = 0;
function linkClick() {
    document.getElementsByClassName('checkbox').value = ++clicks;
    if(clicks==5){
        alert('Congrats. 5 Tasks have been Successfully Completed ')
    }
}
