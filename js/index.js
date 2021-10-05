window.addEventListener('DOMContentLoaded',function(){


    $('.about').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $('.title').addClass('active');
        setTimeout(function(){
            location.href="about.html";
        },1000)
    })

    $('.work').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $('.title').addClass('active');
        setTimeout(function(){
            location.href="work.html";
        },1000)
    })

    // $(function () {
    //     $(".about").fadeIn(500, function () {
    //         $(this).animate({
    //             "top": "150px"
    //         },1000);
    //     });
        
    //     $(".about a").click(function () {
    //         var url = $(this).attr("href");
    //         $("body div").animate({
    //             "opacity": "0",
    //             "top": "100px"
    //         },500, function () {
    //             document.location.href = url;
    //         });
    
    //         return false;
    //     });
    // });

    // const elMain = document.querySelector('.about');
    
    // let idx = 0;
    // let winW = $(window).width();
    
    // function slide(){
    //     elMain.style=`transform:translateY(-${winW*idx}px)`;
    //     update();
    // }

    // $('.a1 .about a').on('click',function(){
    //     idx = $(this).index();
    //     slide();
    // })
    // const elFigure = document.querySelector('.a1 .about');
    // const pnBtn = document.querySelector('.a1 .about a');

    // let sIdx = 0;
    // for(let i=0;i<pnBtn.length;i++){
    //     pnBtn[i].addEventListener('click',function(){
    //         if(i==1){
    //             if(sIdx < 3) sIdx++;
    //         }else{
    //             if(sIdx > 0) sIdx--;
    //         }
    //         slide();
    //     });
    // }

    // function slide(){
    //     elFigure.style=`transform:translateX(${-100*sIdx}%)`;
    // }
    // const elSlide = document.querySelector('../about.html')
    // elSlide.addEventListener('mouseenter',function(){
    //     clearInterval(loop);
    // });

    // elSlide.addEventListener('mouseleave',function(){
    //     console.log('sss')
    //     interval();
    // });
});