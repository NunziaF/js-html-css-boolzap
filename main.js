$(document).ready(function() {





  // Al click dell'icona, viene generato un msg con l'input inserito
  $('.icona-dx').click(
    function invioSms() {
      var inputUtente = $('.msg').val();

      // inizializzazione template handlebars msg
      var source = $('#msg-template').html();
      var template = Handlebars.compile(source);

      //Handlebars operations
      var context = { "msgPH": inputUtente, "msgInvRic": "inviato"};
      var html = template(context);

      $('.dx-conversazione.active').append(html);

      // Ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
      setTimeout(function(){
        //Handlebars operations
        var context = { "msgPH": "ok", "msgInvRic": "ricevuto"};
        var html = template(context);
        $('.dx-conversazione.active').append(html);
    }, 1000);
  });

    // invia messaggio alla pressione del tasto invio
      $('.msg').keypress(function (e) {
       if (e.which == 13) {
           invioSms();
       }
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

  // Cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

  $('.dx-conversazione').on("click", ".msg-tendina",
    function () {

      var msgInst = $(this).closest(".messaggio");

      msgInst.siblings(".messaggio").find(".msg-opzione").removeClass("active"); //chiudo i msg opzione aperti rimuovendo classe active a tutti i fratelli

      msgInst.find(".msg-opzione").toggleClass("active");
    }
  );

  // Cancella messaggio

  $('.dx-conversazione').on("click", ".msg-cancella",
    function () {
      var msgInst = $(this).closest(".messaggio");
      msgInst.remove();
    }
  );

});
