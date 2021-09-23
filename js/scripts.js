function newItem(){

  //Creating li element
  let li = $('<li></li>');
    
  //Storing the input field value inside a variable
  let inputValue = $('#input').val();
    

  li.append(inputValue);

  //Alert Message
  if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(li);
  }

  //Cross out
  function crossOut() {
 		li.toggleClass("strike");
 	}
  //Adding Event Listener For Crossout
  li.on("dblclick",crossOut);



  //crossOutButton element
  let crossOutButton = $('<crossOutButton></crossOutButton>');
    
  //Text Node For crossOut
 	crossOutButton.append(document.createTextNode("X"));
    
 	li.append(crossOutButton);
    
  //Delete Item
 	crossOutButton.on("click", deleteListItem);
  
  function deleteListItem(){
 		li.addClass("delete")
 	}

  //Enabling Sorting
  $('#list').sortable();

}