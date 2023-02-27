//  $(selecto).accion
// selector de etiqueta => $
// Selector de id => # 
// Selector de clase => .

 //$("li").hide() => esto oculta los li

// fadeOut() => desaparece de con animacion
// fadeIn() => aparece con animacion


//  Document ready
$(()=>{
    $("#el-1").hide()

    $(".btn1").click(()=>{
        $("h1").fadeOut()
    })
    $(".btn2").click(()=>{
        $("h1").fadeIn()
    })

    $("li").click(()=>{
        $("h1").css({color:"red"})
    }) 

    $(".new-element").click(()=>{
        $("ul").prepend("<li>New Element</li>")
        $("ul").append("<li>New Element</li>")
    })
    $("ul").mouseenter(function () { 
        $("li").css({color:"red"})
    }); 

    $("ul").mouseleave(function () { 
        $("li").css({color: "white"})   
    });
})