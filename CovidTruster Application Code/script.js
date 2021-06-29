

//  var form = document.querySelector("form");
//  form.addEventListener("submit", function(event) {
//    console.log("Saving value", form.elements.value.value);
//    event.preventDefault();
//  });


//  var input = document.querySelector("input");
//  input.addEventListener("change", function() {
//    if (input.files.length > 0) {
//      var file = input.files[0];
//      console.log("You chose", file.name);
//      if (file.type)
//        console.log("It has type", file.type);
//    }
//  });


//  function validateFileType(){
//     var fileupload = document.getElementById("fileupload").value;
//     var idxDot = fileupload.lastIndexOf(".") + 1;
//     var extFile = fileupload.substr(idxDot, fileupload.length).toLowerCase();
//     if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
//         //TO DO
//     }else{
//         alert("Only jpg/jpeg and png files are allowed!");
//     }   
// }

// document.getElementById('upload').onchange = uploadOnChange;
    
// function uploadOnChange() {
//     var fileupload = this.value;
//     var lastIndex = fileupload.lastIndexOf("\\");
//     if (lastIndex >= 0) {
//         fileupload = fileupload.substring(lastIndex + 1);
//     }
//     document.getElementById('fileupload').value = fileupload;
// }


// document.querySelector("#fileupload").onchange = function(){
//     document.querySelector("#file-name").textContent = this.files[0].name;
//   }


//   $('#fileupload').change(function() {
//     var i = $(this).prev('label').clone();
//     var file = $('#fileupload')[0].files[0].name;
//     $(this).prev('label').text(file);
//   });



// //var field1 = document.getElementsByClassName("box-enter-the-link").value;
// //var field2 = document.getElementsByClassName("box-upload-picture").value;

// // Check if one of the fields is not empty 
// //if (!field1.length && !field2.length) {
//  //   return false;
// //}

// document.querySelector("html").classList.add('js');

// var fileInput  = document.querySelector( ".input-file" ),  
//     button     = document.querySelector( ".input-file-trigger" ),
//     the_return = document.querySelector(".file-return");
      
// button.addEventListener( "keydown", function( event ) {  
//     if ( event.keyCode == 13 || event.keyCode == 32 ) {  
//         fileInput.focus();  
//     }  
// });
// button.addEventListener( "click", function( event ) {
//    fileInput.focus();
//    return false;
// });  
// fileInput.addEventListener( "change", function( event ) {  
//     the_return.innerHTML = this.value;  
// });  