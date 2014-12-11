var addClick = 0;
var list = [];
var listLength = 0;
var slist = "";
var plist = [];
var deleteNumber = 0;
var retrievedString = "";
var listString = "";

function init (){
    //console stuff debugging
    /*
    $("#tpannel p").before("<h1>jQuery is Loading</h1>");
    $("#lpannel p").before("<h1>Quickview</h1>");
    $("#rpannel p").before('<h1 class="fuck">Overflow</h1>');
    $("#lpannel p").addClass("clickBoxConsole");
    $(".clickBoxConsole").html("Click number: ");
    $(".clickBoxConsole").before("<p class='lastData'>Last Entered: </p>");
    $(".clickBoxConsole").after("<p class='deleleteNumHold'>Delete Item: </p>")
    $(".clickBoxConsole").after("<p class='listlength'>List Length: </p>")
    $(".clickBoxConsole").after("<p class='jsonDataString'>String: </p>")
    $(".clickBoxConsole").after("<p class='jsonData'>Data: </p>")
    
    //*/
    
    //needed for app
    
    
    
    
    
    
    
    //$("#mpannel div").before("<h1>Shopping List</h1>");
    
    var update = function(){
        var retrievedString =  localStorage.getItem("shopping-oudy0001");
        
        
        listLength = list.length;
        slist = JSON.stringify(list); 
        plist = JSON.parse(slist);
        listString = "";
        
        localStorage.setItem("shopping-oudy0001", slist);
        
        //debugging
        /*
        $(".clickBoxConsole").html("Click number: " + addClick);
        $(".jsonData").html("data: " + plist);
        $(".jsonDataString").html("String: " + retrievedString);
        $(".listlength").html("List Length: " + listLength);
        $(".deleleteNumHold").html("Delete Item: " + list[deleteNumber]);
        //*/
        
        //make the string
        for( var i=0; i < listLength; i++){
            listString = listString + '<p>' + list[i] + "</p>";
            }
        $("#placeholder").html(listString);
        
        $("#item").attr("placeholder", list[deleteNumber]);
          if(deleteNumber == listLength){
            $("#item").attr("placeholder", "Newer Item");
        }else{}
        //$("#mpannel h1").after('<p>' + list[deleteNumber] + '</p>');
        
    }
    
        $("#add").click(function(ev){
            listLength = list.length;
        var fieldEntry = document.querySelector("#item").value;
        document.querySelector("#item").value = "";
        ev.preventDefault();
        deleteNumber = ++deleteNumber;
        //addClick = ++addClick;
        //$(".clickBoxConsole").html("Click number: " + addClick);
        //$(".lastData").html("Last Entered: " + fieldEntry)
        
        slist = JSON.stringify(list);
        plist = JSON.parse(slist);
            $("#item").html("");
            if(fieldEntry == ""){
                if(deleteNumber = listLength){
                }else{
                list.splice(deleteNumber - 1, 1, list[deleteNumber - 1])}
            }else if(deleteNumber <= listLength){
            list.splice(deleteNumber - 1, 1, fieldEntry);
        }else{
            list.push(fieldEntry);
        }
            
            update();
            
    });
    
    /*
    $("#undo").click(function(ev){
            var fieldEntry = document.querySelector("#item").value;
        ev.preventDefault();
        listLength = list.length;
        addClick = ++addClick;
        //$(".lastData").html("Last Entered: " + fieldEntry)
    //$(".clickBoxConsole").html("Click number: " + addClick);
        listLength = list.length;
        slist = JSON.stringify(list);
        plist = JSON.parse(slist);
        list.splice(listLength - 1);
        $("#mpannel p:nth-child(0)").after("<p>" + list[listLength] + "</p>");
        update();
    });
    //*/
    
    $("#update").click(function(ev){
       ev.preventDefault();
        update();
        });
    
//doesn't work, don't know why
    /*
        $("p").click(function(){
        alert("clicked p");
        this.remove();
        update();
        });
    //*/
    
    $("#incnum").click(function(ev){
        ev.preventDefault();
        listLength = list.length;
        //$("#item").attr("placeholder", list[deleteNumber]);
        if(deleteNumber == listLength){
            $("#item").attr("placeholder", "New Item");
        }else{
            deleteNumber = ++deleteNumber;
        }
        update();
    });
    $("#decnum").click(function(ev){
        ev.preventDefault();
                if(deleteNumber == 0){
        }else{
            deleteNumber = --deleteNumber;
        }
        update();
    });
    $("#delnum").click(function(ev){
        ev.preventDefault();
        list.splice(deleteNumber, 1);
        if(deleteNumber == listLength){
        }else if(deleteNumber > 0){
            deleteNumber = --deleteNumber;
        }
        update();
    });

}
$(document).bind("ready", init);
