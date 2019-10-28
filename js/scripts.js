var userGroceries = [];

var buildGroceryList = function() {
  // order userGroceries
  userGroceries.sort();
  // map userGroceries through template to add html
  var listItemArray = userGroceries.map(function(item) {
    return "<li>" + item + "</li>"
  });
  // return joined array as string
  return listItemArray.join("");
}

$(document).ready(function(){

  $("#add").click(function(){
   var groceryItem = $("#textArea").val();
   $("#textArea").val('');
   userGroceries.push(groceryItem);
   $("#running-list").append("<li>" + groceryItem + "</li>");
  });

  $("#run").click(function(){
    $(".form").hide();
    $("#running-list").hide();
    $(".result-ul").append(buildGroceryList());
    $(".result-ul").show();
  });

})
