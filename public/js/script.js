


$(".chat1 ").hover(
    function(){
        $(this).attr("src", "images/chat.png");
        $(this).css("transform", "scaleX(1)");
    
    },
        
    function(){
        $(this).attr("src", "images/speech-bubble.png");
        $(this).css("transform", "scaleX(-1)");
    }
    )
    
    $(".chat2, .chat3").hover(
        function(){
            $(this).attr("src", "images/chat.png");
            $(this).css("transform", "scaleX(-1)");
        },
            
        function(){
            $(this).attr("src", "images/speech-bubble.png");
            $(this).css("transform", "scaleX(1)");
        }
    )
    
    // start animation
    
    
    $(".start-img").click(function(){
        $(".start-btn").animate(
            {opacity: "0"},
            300
        );
        setTimeout(startgame, 800);
    })
    
    function startgame(){
    
        
        $(".chat").animate(
            {opacity: "0"},
            300
        );
        $(".main-img").animate(
            {bottom: "1000px"},
            {duration: 1200, queue: false}
        );
    
        $(".main-img").animate(
            {opacity: "0"},
            {duration: 600, queue: false}
        );
        
            
    }
