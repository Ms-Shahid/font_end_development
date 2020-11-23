img = new SimpleImage('duke_blue_devil.png');
print(img)


    for (var pixel of img.values()){
        
        var newRed = 255 - pixel.getRed();
        var newGreen = 204 + pixel.getGreen();
        var newBlue = 227 - pixel.getBlue();
        
        
        pixel.setRed(newRed);
        pixel.setGreen(newGreen);
        pixel.setBlue(newBlue);
        
       
    }
    
    print(img)




