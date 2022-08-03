const button = document.getElementById("theButton")


button.onclick= function(){

    console.log('Wer das liest ist geil')

    $.ajax({
        type: "POST",
        url: "~/start_codecept.py",
        data: {},
        dataType: "jsonp"
      }).done(function( o ) {
         console.log('Marius < Yoda')
      });

    }