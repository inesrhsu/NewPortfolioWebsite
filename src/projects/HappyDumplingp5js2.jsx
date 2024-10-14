
const HappyDumplingsSketch2 = (p5) =>{

    var sideLength = p5.min(0.8*p5.windowWidth,700);
    p5.setup = () => p5.createCanvas(sideLength, sideLength, p5.WEBGL);
    var ratio= sideLength/600;
    
    var ang = -30;
    var mode = 0;
    var dumplingColors = ['#FF96BE','#FFE4B5', '#FFE4E1','#9370DB', '#DB7093','#98FB98','#AFEEEE','#FF9D5C'];
    var backgroundColors = ['#FF96BE00','#FFE4B550', '#FFE4E150','#9370DB50', '#DB709350','#98FB9850','#AFEEEE50','#FF9D5C50'];

    

  p5.draw = () => {
    ratio = sideLength/600;

    p5.normalMaterial();
    p5.translate(-p5.width / 2, -p5.height / 2);

    var ind = p5.int(p5.random(dumplingColors.length));
    p5.background(240,219,220);
    if (mode == 1){
        p5.background(backgroundColors[ind]);
    }
    p5.noStroke();
    p5.fill(255,150,190);
    var x = 0;
    var y = 0;
    p5.rectMode(p5.CENTER);
    //eyes&mouth
    var eyew = 6;
    var eyeh = 5;
    var eyerotl = 2*p5.PI;
    var eyerotr = 2*p5.PI;
    var mouthw = 6;
    var mouthrot = p5.PI;
    if (mode == 0){
        eyew = 6;
        eyeh = 5;
        eyerotl = 2*p5.PI;
        eyerotr = 2*p5.PI;
        mouthw = 6;
        mouthrot = p5.PI;
    } else if(mode == 1){
        p5.fill(dumplingColors[ind])
        eyew = p5.random(5,10);
        eyeh = p5.random(5,10);
        eyerotl = p5.random([3*p5.PI,2*p5.PI]);
        eyerotr = p5.random([3*p5.PI,2*p5.PI]);
        mouthw = p5.random(5,15);
        mouthrot = p5.random([p5.PI,2*p5.PI]);

    } 
    for (var i = 0; i < 6; i++){
        ang += 45;
        x += 1;
        y += 1;
        for (var j = 0; j < 6; j++){
            ang+=45;
            p5.push();
            p5.translate((j*100 + 50)*ratio, (100*i + 50)*ratio);
            p5.rotate(p5.radians(ang));
            p5.ellipse(0,11*ratio,60*ratio,45*ratio);
            p5.rotate(p5.radians(35));
            p5.ellipse(9*ratio,-1*ratio,45*ratio,35*ratio);
            p5.rotate(p5.radians(-70));
            p5.ellipse(-9*ratio,-1*ratio,45*ratio,35*ratio);
            p5.rotate(p5.radians(35));
            p5.stroke(10);
            p5.noFill();
            p5.arc(-10*ratio, 5*ratio, eyew*ratio, eyeh*ratio, p5.PI, eyerotl);
            p5.arc(10*ratio, 5*ratio, eyew*ratio, eyeh*ratio, p5.PI, eyerotr);
            p5.arc(0, 11*ratio, mouthw*ratio, 5*ratio, 0, mouthrot);
            p5.pop();
            
            p5.push();
            p5.translate((j*100 + 50)*ratio, (100*i + 50)*ratio);
            p5.rotate(p5.radians(ang));
            p5.translate(4*ratio, -13*ratio);
            p5.rotate(p5.radians(140));
            p5.ellipse(0*ratio,0*ratio,20*ratio,10*ratio);
            p5.pop();

            p5.push();
            p5.translate((j*100 + 50)*ratio, (100*i + 50)*ratio);
            p5.rotate(p5.radians(ang));
            p5.translate(-4*ratio, -13*ratio);
            p5.rotate(p5.radians(40));
            p5.ellipse(0*ratio,0*ratio,20*ratio,10*ratio);
            p5.pop();

            p5.push();
            p5.translate((j*100 + 50)*ratio, (100*i + 50)*ratio);
            p5.rotate(p5.radians(ang));
            p5.translate(0*ratio, -13*ratio);
            p5.rotate(p5.radians(90));
            p5.ellipse(0*ratio,0*ratio,20*ratio,10*ratio);
            p5.pop();
            
        }
    }
    p5.noLoop();
    };

    p5.mousePressed = () => {
        if (((0<=p5.mouseX) && (p5.mouseX<=p5.width)) &&((0<=p5.mouseY) && (p5.mouseY<=p5.height))){
            p5.loop();
            ang += p5.radians(45);
            mode = 1;
        }
    };

    // Resize the canvas when the
    // browser's size changes.
    p5.windowResized = () => {
        sideLength = p5.min(p5.min(0.8*p5.windowWidth,700), p5.min(0.8*p5.windowHeight,700))
        p5.resizeCanvas(sideLength, sideLength);
    };

    // if (mode == 0){
    // 				arc(-10, 5, 6, 5, p5.PI, 2*p5.PI);
    // 				arc(10, 5, 6, 5, p5.PI, 2*p5.PI);
    // 				arc(0, 11, 6, 5, 0, p5.PI);
    // 			} else if (mode == 1){
    // 				var eyew = random(5,10);
    // 				var eyeh = random(5,10);
    //                 	arc(-10, 5, eyew, eyeh, p5.PI, random([3*p5.PI,2*p5.PI]));
    //                 	arc(10, 5, eyew, eyeh, p5.PI, random([3*p5.PI,2*p5.PI]));
    //                 	arc(0, 11, random(5,15), 5, 0, random([p5.PI,2*p5.PI]));
    //                 }


  };

  export default HappyDumplingsSketch2;