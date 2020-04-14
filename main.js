// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse (quindi tutto statico);
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde


$(document).ready(function() {

  // Al click dell'icona, viene generato un msg con l'input inserito
  $('.icona-dx').click(
    function () {
      var inputUtente = $('.msg').val();
      var msgInviato = ('<div class="messaggio inviato"><h3>' + inputUtente + '<h2 class="ora">05:23</h2></h3></div>');
      $('.dx-conversazione').append(msgInviato);
    }
  );


});
