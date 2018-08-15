//$('.number-counter').waypoint(function() {

        $('.number-counter-value').each(function(){
            var numberValueStart = $(this).data('start');
            var numberValueEnd = $(this).data('end');
          
            var numberValueSpeed = $(this).data('speed');
            console.log(numberValueSpeed);
            if(undefined === numberValueSpeed){
              numberValueSpeed = 5000;
            }
          console.log(numberValueSpeed);
            $(this).prop('number', numberValueStart).animateNumber({number:numberValueEnd}, numberValueSpeed);
        });

        //this.destroy()

    /*}, {
        offset: '100%',
        triggerOnce: true
    });*/