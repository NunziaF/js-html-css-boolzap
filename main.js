// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse (quindi tutto statico);
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

// Milestone 2:
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)



$(document).ready(function() {

  // Al click dell'icona, viene generato un msg con l'input inserito
  $('.icona-dx').click(
    function invioSms() {
      var inputUtente = $('.msg').val();
      var msgInviato = ('<div class="messaggio inviato"><h3>' + inputUtente + '<h2 class="ora">05:23</h2></h3></div>');
      $('.dx-conversazione').append(msgInviato);

      // Ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
      setTimeout(function(){
        var msgRicevuto = ('<div class="messaggio ricevuto"><h3>ok<h2 class="ora">05:23</h2></h3></div>');
        $('.dx-conversazione').append(msgRicevuto);
      }, 1000);
    });

});
