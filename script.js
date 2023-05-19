$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .btn').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
      $('.portfolio .image-container .box').show('400')
    }else{
      $('.portfolio .image-container .box').not('.'+filter).hide('200');
      $('.portfolio .image-container .box').filter('.'+filter).show('400');
    }

  });

  $('#theme-toggler').click(function(){
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

function envoyerEmail() {
  var email = document.getElementById("email").value; // Récupère la valeur de l'adresse e-mail depuis le champ de saisie
  var message = document.getElementById("message").value; // Récupère la valeur du message depuis le champ de saisie

  // Envoie l'e-mail à mon adresse
  // Remplacez 'mon@email.com' par mon adresse e-mail réelle
  window.location.href = `colinorelus1998@gmail.com${encodeURIComponent(message)}`;

  // Réinitialise les champs du formulaire
  document.getElementById("email").value = "root";
  document.getElementById("message").value = "root";
}
