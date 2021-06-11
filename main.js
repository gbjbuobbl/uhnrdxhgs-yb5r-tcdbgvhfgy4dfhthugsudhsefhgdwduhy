var canvas = new fabric.canvas('myCanvas');
Image_height = 30 ;
Image_width = 30 ;
player_x = 10 ;
player_y = 10 ;
var playerobject = "";

function player_update()

{

fabric.Image.fromURL("player.png", function (Img){

playerobject = Img;

playerobject.scaleToWidth(150);

player_object.scaleToHeight (140);

player_object.set({

top:player_y,

left:player_x

});

canvas.add(player_object);
});

}

function new_image(get_image)

{

fabric. Image.fromURL(get_image, function(Img) { 
    image_object = Img;
 image_object.scaleToWidth(image_width);
 image_object.scaleToHeight(image_height);

image_object.set({

top:player_y,

left:player_x

});
})
window.addEventListener("keydown", my_keydown());

 function my_keydown(e){
KeyPressed = e.KeyCode;
console.log(KeyPressed);
if (e.shiftKey == true && KeyPressed == "80") {
    console.log("shift + p is pressed together")
    image_width = image_width + 10 ;
    Image_height = Image_height + 10 ;
    document.getElementById("currunt-height").innerHTML = image_height ;
    document.getElementById("currunt-width").innerHTML = image_width ;
}
if (e.shiftKey == true && KeyPressed == "77") {
    console.log("shift + m is pressed together")
    image_width = image_width - 10 ;
    Image_height = Image_height - 10 ;
    document.getElementById("currunt-height").innerHTML = image_height ;
    document.getElementById("currunt-width").innerHTML = image_height ;
}
if(keyPressed == "38"){

    up();
    
    console.log("up arrow key");
    }
    
    if(keyPressed == "40")
    
    {
    
    down();
    
    console.log("down arrow key");
    }
    
    if(keyPressed == "37"){
    
    left(); console.log("left arrow key");
    
    } 
    if(keyPressed == "39"){
    
    right();
    
    console.log("right arrow key");
    }
    if(keyPressed == "49"){
    
        new_image("download (1).jpg");
        
        console.log("1 key");
        }
    if(keyPressed == "53"){
    
        new_image("download (5).jpg");
            
        console.log("5 key");
        }
    if(keyPressed == "68"){
    
        new_image("download.jpg");
                
        console.log("d key");
    }
    if(keyPressed == "105"){
    
        new_image("OIP.jpg");
        
        console.log("o key");
        }
        if(keyPressed == "106"){
    
            new_image("images.jpg");
            
            console.log("i key");
            }
    
               }
            }

            function up() {
                if(player_y >= 0){
                    player_y = player_y - image_height;
                    console.log("block height =" +image_height);
                    console.log("When up arrow is pressed X ="+ player_x + ", Y =" + player_y);
                    player_update();
                }
            }
            function down() {
                if(player_y >= 550){
                    player_y = player_y + image_height;
                    console.log("block height =" +image_height);
                    console.log("When down arrow is pressed X ="+ player_x + ", Y =" + player_y);
                    player_update();
                }
            }
            function left() {
                if(player_x >= 0){
                    player_x = player_x - image_width;
                    console.log("block width =" + image_width);
                    console.log("When left arrow is pressed X ="+ player_x + ", Y =" + player_y);
                    player_update();
                    }
                }
            function right() {
                if(player_x >= 750){
                    player_x = player_x + image_width;
                    console.log("block width =" +image_width);
                    console.log("When right arrow is pressed X ="+ player_x + ", Y =" + player_y);
                    player_update();
                    }
                }


        
              