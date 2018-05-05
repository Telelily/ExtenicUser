
var userId=1;
var fileName=1;
var knowid=1;   
$(document).ready(function(){

$(".jumbotron ul li:eq(0)").click(function () {
            $(".glyphicon-star").toggleClass(function () {
                if($(".glyphicon-star").hasClass('hou')){
                    $(".glyphicon-star").removeClass('hou');
                    

//删除收藏夹

 $.ajax({
        type: "post",
        url: "/extenicsKnowledgeSys/FavoriteFile/deleteFavoriteFile",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        dataType: "json",
        data: {
            "id":1 ,
        },
        success: function (data) {
            alert(data.message); 
        },
        error: function (data) {
            alert(data.message); 
        }
    });
 return 'bg';

                }else{
                    $(".glyphicon-star").removeClass('bg');
                   
                    //添加收藏夹
  $.ajax({
        type: "post",
        url: "/extenicsKnowledgeSys/FavoriteFile/insertFavoriteFile",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        dataType: "json",
        data: {
            "favoriteFileName":fileName ,
            "favoriteFileId":knowid ,
            "userId": userId,
        },
        success: function (data) {
            alert(data.message); 
        },
        error: function (data) {
            alert(data.message); 
        }
    });
   return 'hou';
                }
            });
        });


$(".jumbotron ul li:eq(1)").click(function () {
    
            $(".glyphicon-thumbs-up").toggleClass(function () {
                if($(".glyphicon-thumbs-up").hasClass('hou')){
                    $(".glyphicon-thumbs-up").removeClass('hou');
                    return 'bg';
                }else{
                    $(".glyphicon-thumbs-up").removeClass('bg');
                    
                    return 'hou';
                }
            });
        });

});







