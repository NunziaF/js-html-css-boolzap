// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse (quindi tutto statico);
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

// Milestone 2:
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 3:
// Click sul contatto mostra la conversazione del contatto cliccato,
// è possibile inserire nuovi messaggi per ogni conversazione
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

$(document).ready(function() {

  // Al click dell'icona, viene generato un msg con l'input inserito
  $('.icona-dx').click(
    function invioSms() {
      var inputUtente = $('.msg').val();
      var msgInviato = ('<div class="messaggio inviato"><h3>' + inputUtente + '<h2 class="ora">05:23</h2></h3></div>');
      $('.dx-conversazione.active').append(msgInviato);

      // Ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
      setTimeout(function(){
        var msgRicevuto = ('<div class="messaggio ricevuto"><h3>ok<h2 class="ora">05:23</h2></h3></div>');
        $('.dx-conversazione.active').append(msgRicevuto);
      }, 1000);
    });

  //scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite


  // filtro contatti
      //gestirte evento su tastiera (oppure su click di bottone di input ricerca)
    $('.search').keyup(

      function ricercaContatti()  {

        // salvarmi input utente in campo del filtro (stringa1)
        var stringaRicerca = $(this).val().toLowerCase();

        // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
        $('.conversazione').each(function () {
          //salvo in una var il valore del testo del nome nel contatto (stringa2)
          var stringaNome = $(this).find('.nome').text().toLowerCase();
          // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
          //stringa2.includes(stringa1)
          if(stringaNome.includes(stringaRicerca)){
          //se l'occorenza è stata trovata lascio il blocco di contatto visibile
          $(this).show();
          } else {
          // altrimenti lo rendo non visibile (this)
          $(this).hide();
          }
        });
      }
    );

  // Click sul contatto mostra la conversazione del contatto cliccato
  $('.conversazione').click(
    function() {
      $('.conversazione').removeClass("active");
      $(this).addClass("active");
      var dataAttr = $(this).data("conversazione");
      $(".dx-conversazione").removeClass("active");
      $(".dx-conversazione[data-conversazione='" + dataAttr + "']").addClass("active");
    }
  )

});
