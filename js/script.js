$("#ButtonPost").on("click", function(event){
    event.preventDefault();
    if ($("#todoText").val() != ""){
        $("#todoList").append(`<input type = "checkbox" name="todo" /> ${$("#todoText").val()} <br>`);
    }
})

$("#ButtonClear").on("click", function(){
    $('[name="todo"]').each(function(){
        $(this).prop('checked', false);
    })
})

$("#ButtonMark").on("click", function(){
    $('[name="todo"]').each(function(){
        $(this).prop('checked',true);
    })
})

$("#ButtonDelete").on("click", function(){
    $("#todoList").html('');
})