var forMore = $("<div>")
forMore.text("click to play");
$(".projImg").append(forMore);

$(".projImg").on("mouseover", function(){
    forMore.show();
}).on("mouseout", function(){
    forMore.hide();
});
