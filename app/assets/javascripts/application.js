// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function speak ( string ) {

  var url     = 'http://tts-api.com/tts.mp3?'
    , query   = $.param({ q: string })
    , element = document.createElement( 'audio' );

  element.setAttribute( 'src', url + query );

  console.log( element );

  return element;
}







jQuery(function ( $ ) {

  var Frog = {

    element: $( '#frog' ),

    doSpeak: false,

    state: 'open',

    startSpeaking: function () {
      this.doSpeak = true;
      this.speaking();
    },

    speaking: function () {
      var self = this;

      if ( this.doSpeak ) {

        setTimeout(function () {
          self.speak();
          self.speaking();
        }, 200);

      }

    },

    stopSpeaking: function () {

    },

    speak: function () {

      var position = ( this.state === "open" ) ? 'left bottom' : 'left top';

      this.state = this.state === "open" ? "close" : "open";

      this.element.css( 'background-position', position );

    }

  }

  window.Frog = Frog;


  $('#words .word').click(function () {
    var text = $( this ).text();

    console.log( text );

    speak( text ).addEventListener( 'canplaythrough', function () {
      console.log( 'can play', this );
      this.play();
    }, false);
  });

  $('#words .word').draggable({
    revert: "invalid",
    helper: "clone",
    // connectToSortable: "#drop"
  });

  $('#drop').droppable({
    revert: true,
    drop: function ( event, object ) {
      // console.log( object );
      // $('#rim')[0].play();
      object.helper.clone().appendTo( $( '#drop') );

    }
  });


  $('#playall').click(function ( evt ) {
    var sentences = [];

    evt.preventDefault();

    $( '#drop .word' ).each(function () {
      sentences.push( $( this ).text() );
    });

    speak( sentences.join(' ') ).addEventListener( 'canplaythrough', function () {
        console.log( 'can play', this );
        this.play();
      }, false);

    console.log( sentences );


  });

});
