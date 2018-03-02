//define functions here

$(document).ready(function(){

// call functions here
  // $('h1').on("eventname", function(){
  //
  // });



  // $("form").on("submit", function (){
  //   if ($("input:first" ).val() === "correct"){
  //     alert('your form is going to be submitted now');
  //     return;
  //   }
  //   alert("you entered the wrong value");
  //   return ;
  // });

  $('p').on("click", () =>{
  return  getIt()
  });

  $("img").on("load", () =>{
    return frameIt()
  });

  // $('#typing').on('keydown', (e) =>{
  //   return pressIt(e)
  // });

 pressIt()

 submitIt()

});

function getIt(){
  return alert("Hey!");
}

function frameIt(){
  return $('img').addClass('tasty')
}

function pressIt(){
  $('#typing').on('keydown', function(e) {
    if (e.which === 71){
      alert("You have pressed the G key.")
    }
  })
}

// function pressIt(e){
//   if (e.which === 71){
//     return alert("You pressed 'g'!")
//   }


function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}
