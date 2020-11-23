var img = new SimpleImage('hilton.jpg');
print(img)

print(img.getWidth())

for (var pixel of img.values()){
    
    if (pixel.getX() < 1/3 * img.getWidth() ){
        var newR  = 255; 
        pixel.setRed(newR)
    }
    else if (pixel.getX() > 1/3 * img.getWidth() && pixel.getX() < 2/3 * img.getWidth()){
        var newG = 255;
        pixel.setGreen(newG);
    }else{
        var newB = 255;
        pixel.setBlue(newB);
    }
}

print(img)