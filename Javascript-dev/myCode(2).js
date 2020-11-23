img = new SimpleImage('eastereggs.jpg');
print(img)

function swapRedGreen(pixel){
    for (var pixel of img.values()){
         var newR = pixel.getRed();
        var newG = pixel.getGreen();
        var newB = pixel.getBlue();
        
        temp = newR;
        newR = newG;
        newG = temp;
        
        pixel.setRed(newR);
        pixel.setGreen(newG);
        pixel.setBlue(newB);
    }
    
    return img

}

print(swapRedGreen(0));