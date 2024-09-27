const ButterflyDandelionsSketch = (p5) =>{

    var sideLength = p5.min(p5.min(0.8*p5.windowWidth,700), p5.min(0.8*p5.windowHeight,700));
    p5.setup = () => p5.createCanvas(sideLength, sideLength, p5.WEBGL);
    var ratio= sideLength/600; 

    p5.draw = () => {
        ratio = sideLength/600;
        p5.normalMaterial();
        p5.translate(-p5.width / 2, -p5.height / 2);

        p5.background(240,219,220);
        p5.noLoop();
        p5.noStroke();
        p5.fill(255,150,190);
        var ang = 0;

        //lightblue = (82,184,192)
        //darkblue = (25,32,118)
        //yellow = (244,185,94)
        //green = (122,151,112)
        //orange = (186,92,76)
        
        p5.rectMode(p5.CENTER)
        for (var i = 0; i < 6; i++){
            ang += 45;

            for (var j = 0; j < 6; j++){
                ang+=45;
                p5.push();
                p5.translate((j*100 + 50)*ratio, (100*i + 50)*ratio);
                p5.rotate(p5.random(1,3)*(p5.PI));
                for(var k = 0; k < 5; k++){
                    p5.strokeWeight(2);
                    p5.stroke(10);
                    p5.noFill();
                    p5.arc((50-10*k)/2*ratio, 35*ratio, 50-20*k*ratio,30*ratio, p5.PI, 2*p5.PI);
                    p5.arc(35*ratio, (50-10*k)/2*ratio, 30,50-20*k*ratio, (1/2)*p5.PI, (3/2)*p5.PI);
                }
                p5.line(-50*ratio,-50*ratio,0,0)
                p5.circle(0,0,20*ratio)
                p5.arc(0,0,30*ratio,30*ratio,3*p5.PI/2,p5.PI)
                p5.line(-30*ratio,-20*ratio,-20*ratio,-30*ratio)
                var r = p5.random(50,150)*ratio
                p5.arc(0,0,r,r,p5.PI,3*p5.PI/2)
                
                p5.stroke(255);
                p5.arc(100*ratio,100*ratio,100*ratio,100*ratio,3*p5.PI/2,p5.PI)
                
                p5.noFill();
                // arc(-10, 5, 6, 5, PI, 2*PI);
                // arc(10, 5, 6, 5, PI, 2*PI);
                // arc(0, 11, 6, 5, 0, PI);
                
                //square(random(-x, x),random(-y,y),30)
                p5.pop()
            }
        } 
    };

    p5.mousePressed = () => {
        if (((0<=p5.mouseX) && (p5.mouseX<=p5.width)) &&((0<=p5.mouseY) && (p5.mouseY<=p5.height))){
            p5.loop();
        }
    };

    // Resize the canvas when the
    // browser's size changes.
    p5.windowResized = () => {
        sideLength = p5.min(p5.min(0.8*p5.windowWidth,700), p5.min(0.8*p5.windowHeight,700))
        p5.resizeCanvas(sideLength, sideLength);
    };

  };

  export default ButterflyDandelionsSketch;