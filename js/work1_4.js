window.addEventListener('DOMContentLoaded',function(){

    const elMain = document.querySelector('main');
    //const pnindicato = document.querySelectorAll('.fix aside a');

    let idx = 0, delta,inter,pos;
    let winH = $(window).height();
    
    setTimeout(function(){
        $(window).scrollTop(0);   
        $('html').scrollTop(0);  
        elMain.style=`transform:translateY(0px)`; 
    },500);
    
    function slide(){
        elMain.style=`transform:translateY(-${winH*idx}px)`;
        update();
    }
    function update(){
        let plen = $('main section').length;
        $('.fix .earth').text((idx+1)+'/'+plen);
            
        $('.fix aside a').removeClass('active');
        $('.fix aside a').eq(idx).addClass('active');
    }

    $('.fix aside a').on('click',function(){
        idx = $(this).index();
        slide();
    })


    $('main section').on('mousewheel',function(e){
        delta = e.originalEvent.wheelDelta;
        clearTimeout(inter);
        inter = setTimeout(function(){
            if(delta < 0){
                //down
                if(idx < $('main section').length-1) idx++; 
            }else{
                //up
                if(idx !=0) idx--;
            }
            
            slide();
        },200);

    });


});