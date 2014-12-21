$(document).ready(function(){

    var item = document.querySelectorAll('.js-onebyone');
    $("#menu").click(function(){
        $(".overlay").fadeToggle('slow');
        animate(0)
    });

    function animate(counter) {
      
      setTimeout(function() {

        item[counter].classList.toggle('show');

        counter++;

        if(counter < item.length) animate(counter);

      }, 100);
      
    }(0);
});
