
var fn = {
    ready: function(){
        alert("=)");
        document.addEventListener("deviceready", fn.init(), false);
        
    },
    init: function(){   
        alert("2");
        $('#contact').tap(fn.activa);
        $('#Rigth').tap(fn.beep);
        $('#heart∫').tap(fn.notifica);
        
    },
    activa:function(){
    alert("3");
    // Vibrate for 3 seconds
    navigator.vibrate(3000);
 
   },

   beep: function(){
    navigator.notification.beep(3000);
   },

   notifica: function(){
    navigator.notification.alert('has ganado ', alert,'algo', 'done');
   },

   alerta: function(){
    alert("como estas");
   }

};



$(fn.ready);



