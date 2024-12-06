
const StellarDrawingToolSketch = (p5) =>{

    var sideLength = p5.min(0.8*p5.windowWidth,700);
    var ratio= sideLength/p5.windowWidth;

    p5.setup = () => {
        p5.createCanvas(sideLength, sideLength*2/3, p5.WEBGL);
        p5.background(100);
        points = [];
    }
    
    
    var shape = 0;
    var points;
    var arrayOfSpirals = [];
    var arrayOfLines = [];
    var arrayOfLineLengths = [];
    var arrayOfLineColors = [];
    var lineColors = ['#E6E6FA','#FAFAD2', '#00CED1','#20B2AA']
    var arrayOfStars = [];
    var arrayOfStarSizes = [];
    var arrayOfStarColors = [];
    var starColors = ['#FFE4B599', '#FFE4E199','#9370DB99', '#DB709399','#98FB9899','#AFEEEE99'];
    var arrayOfSmallStars = [];
    var arrayOfSmallStarSizes = [];
    var arrayOfSmallStarColors = [];
    


    p5.draw = () => {
        ratio = sideLength/1200;
        p5.normalMaterial();
        p5.translate(-p5.width / 2, -p5.height / 2);

        p5.background(0);
        drawMyArray();
        // modifyMyArray();
    
    };

    const drawMyArray = () => {
        //print("For spirals press 1, for lines press 2, for diamonds press 3, when drawing diamonds drag for small diamonds")
        p5.noFill();
        p5.strokeWeight(1); 
        p5.stroke("pink")
        p5.strokeJoin(p5.ROUND);
        ratio = sideLength/p5.windowWidth;
        
        //SPIRALS
        for (var a = 0; a < arrayOfSpirals.length; a++){
            var aSpiral = arrayOfSpirals[a];
            p5.beginShape();
            var num = 0;
            for (var i = 0; i< aSpiral.length; i++){
                p5.fill(255,70,147,1150)
                var ithPoint = aSpiral[i];
                p5.circle(ithPoint.x, ithPoint.y, (40 - 0.5*i)*ratio/2);
                num = i;1
            }
            if (num<200 && p5.frameCount%2 == 0){
                for (var j = 0; j < 8; j++){ 
                    var theta = num*(2*p5.PI/8) + j*(2*p5.PI/8) + 0.2*num;
                    var pointx = aSpiral[0].x + 0.5*p5.cos(theta)*(p5.exp(0.1*theta))*ratio;
                    var pointy = aSpiral[0].y + 0.5*p5.sin(theta)*(p5.exp(0.1*theta))*ratio;
                    var aPoint = p5.createVector(pointx,pointy);
                    aSpiral.push(aPoint); //center is newSpiral[0]
                    console.log(aSpiral);
                }
            }
            p5.endShape();
        }
        
        //STARS
        for (var c = 0; c < arrayOfStars.length; c++){
            var aStar = arrayOfStars[c];
            p5.beginShape();
            var ind = arrayOfStarColors[c];
            p5.fill(starColors[ind]);
            p5.stroke(255);
            p5.strokeWeight(1);
            var size = arrayOfStarSizes[c];
            var xoffset = p5.random(-2,2);
            var yoffset = p5.random(-2,2);
            var x1 = aStar.x + xoffset;
            var y1 = aStar.y + 2*size + yoffset;
            var x2 = aStar.x + size + xoffset;
            var y2 = aStar.y + yoffset;
            var x3 = aStar.x + xoffset;
            var y3 = aStar.y - 2*size + yoffset;
            var x4 = aStar.x - size + xoffset;
            var y4 = aStar.y + yoffset;
            p5.quad(x1, y1, x2, y2, x3, y3, x4, y4)
        }
        
        //SMALL STARS
        for (var c = 0; c < arrayOfSmallStars.length; c++){
            var saStar = arrayOfSmallStars[c];
            p5.beginShape();
            var ind2 = arrayOfSmallStarColors[c];
            p5.fill(starColors[ind2]);
            p5.stroke(255);
            p5.strokeWeight(1);
            var ssize = arrayOfSmallStarSizes[c];
            var sxoffset = 0 //random(-2,2);
            var syoffset = 0 //random(-2,2);
            x1 = saStar.x + sxoffset;
            y1 = saStar.y + 2*ssize + syoffset;
            x2 = saStar.x + ssize + sxoffset;
            y2 = saStar.y + syoffset;
            x3 = saStar.x + sxoffset;
            y3 = saStar.y - 2*ssize + syoffset;
            x4 = saStar.x - ssize + sxoffset;
            y4 = saStar.y + syoffset;
            p5.quad(x1, y1, x2, y2, x3, y3, x4, y4)
        }
        
        //LINES
        for (var b = 0; b < arrayOfLines.length; b++){
            var aLine = arrayOfLines[b];
            p5.beginShape();
            var ind3 = arrayOfLineColors[b];
            p5.stroke(lineColors[ind3]);
            p5.strokeWeight(4)
            var length = arrayOfLineLengths[b]
            x1 = aLine.x + length*2*p5.sin(b + p5.millis()/1000)*p5.sin(b + p5.millis()/1000) //+ 100*sin(frameCount)
            y1 = aLine.y + length*p5.sin(b + p5.millis()/1000)
            x2 = aLine.x - length*2*p5.sin(b + p5.millis()/1000)*p5.sin(b + p5.millis()/1000) //- 100*sin(frameCount)
            y2 = aLine.y - length*p5.sin(b + p5.millis()/1000)
            p5.line( x1,y1,x2,y2);
        }
    }



    p5.mousePressed = () => {
        ratio = sideLength/p5.windowWidth;
        if (((0<=p5.mouseX) && (p5.mouseX<=p5.width)) &&((0<=p5.mouseY) && (p5.mouseY<=p5.height))){
            console.log('mouse pressed');
            if (shape == 1){
                var newSpiral = [];
                var spiralPoint = p5.createVector(p5.mouseX, p5.mouseY);
                newSpiral.push(spiralPoint); //center is newSpiral[0]
                arrayOfSpirals.push(newSpiral);
            } else if (shape == 2){
                var newLine = p5.createVector(p5.mouseX, p5.mouseY); //center point of newLine
                arrayOfLines.push(newLine);
                arrayOfLineLengths.push(p5.random(40,130)*ratio);
                arrayOfLineColors.push(p5.int(p5.random(lineColors.length)));
            } else if (shape == 3){
                for (var i = 0; i < p5.int(p5.random(5,12)); i++){
                    var newStar = p5.createVector(p5.mouseX + p5.random(-10,10)*ratio, p5.mouseY + p5.random(-8,8)*ratio);
                    arrayOfStars.push(newStar);
                    arrayOfStarSizes.push(p5.random(5,30)*ratio);
                    arrayOfStarColors.push(p5.int(p5.random(starColors.length)));
                }
            }
        }
    };

    p5.mouseDragged = () => {
        console.log('mouse dragged');
        if (shape == 3){
            for (var i = 0; i < p5.int(p5.random(3,5)); i++){
                var newSmallStar = p5.createVector(p5.mouseX + p5.random(-100,100)*ratio/2, p5.mouseY + p5.random(-30,30)*ratio/2);
                arrayOfSmallStars.push(newSmallStar);
                arrayOfSmallStarSizes.push(p5.random(1,7)*ratio*1.5);
                arrayOfSmallStarColors.push(p5.int(p5.random(starColors.length)));
                }
        }
        
    }
    
    //ARRAYOFARRAYS
    p5.keyPressed = () => {
        if (p5.key == " "){
            console.log('pressed space');
            arrayOfSpirals = [];
            arrayOfLines = []
            arrayOfLineLengths = []; 
            arrayOfStars = [];
            arrayOfStarSizes = [];
            arrayOfStarColors = [];
            arrayOfSmallStars = [];
            arrayOfSmallStarSizes = [];
            arrayOfSmallStarColors = [];
        }
        if (p5.key == "1"){
            shape = 1;
            console.log('pressed 1');
        } else if (p5.key == "2"){
            shape = 2;
            console.log('pressed 2');
        } else if (p5.key == "3"){
            shape = 3;
            console.log('pressed 3');
        }
    }

    // Resize the canvas when the browser's size changes.
    p5.windowResized = () => {
        sideLength = p5.min(p5.min(0.8*p5.windowWidth,700), p5.min(0.8*p5.windowHeight,700))
        p5.resizeCanvas(sideLength, sideLength*2/3);
    };

  };

///stellar drawing tool
    // var shape = 0;
    // var points;
    // var arrayOfSpirals = [];
    // var arrayOfLines = [];
    // var arrayOfLineLengths = [];
    // var arrayOfLineColors = [];
    // var lineColors = ['#E6E6FA','#FAFAD2', '#00CED1','#20B2AA']
    // var arrayOfStars = [];
    // var arrayOfStarSizes = [];
    // var arrayOfStarColors = [];
    // var starColors = ['#FFE4B599', '#FFE4E199','#9370DB99', '#DB709399','#98FB9899','#AFEEEE99'];
    // var arrayOfSmallStars = [];
    // var arrayOfSmallStarSizes = [];
    // var arrayOfSmallStarColors = [];

    // p5.setup = () => {
    //     p5.createCanvas(p5.windowWidth, p5.windowHeight,p5.WEBGL);
    //     p5.background(100);
    //     points = [];
    // }

    // p5.draw = () => {
    //     p5.background(0);
    //     drawMyArray();
    //     // modifyMyArray();
    // }

    // // const modifyMyArray =()=>{
    // //     for (var i = 0; i< points.length; i++){
    // //         //points[i].x += random(-1,1);
    // //         //points[i].y += random(-1,1);
    // //         //to move constantly downwards
    // //         //points[i].y += random(0,10);
            
    // //     }
    // // }
    
    // const drawMyArray = () => {
    //     //print("For spirals press 1, for lines press 2, for diamonds press 3, when drawing diamonds drag for small diamonds")
    //     p5.noFill();
    //     p5.strokeWeight(2);
    //     p5.stroke("pink")
    //     p5.strokeJoin(ROUND);
        
    //     //SPIRALS
    //     for (var a = 0; a < arrayOfSpirals.length; a++){
    //         var aSpiral = arrayOfSpirals[a];
    //         p5.beginShape();
    //         num = 0
    //         for (var i = 0; i< aSpiral.length; i++){
    //             p5.fill(255,70,147,150)
    //             var ithPoint = aSpiral[i];
    //             p5.circle(ithPoint.x, ithPoint.y, 40 - 0.5*i);
    //             num = i;
    //         }
    //         if (num<200 && frameCount%5 == 0){
    //             for (var j = 0; j < 8; j++){ 
    //                 var theta = num*(2*PI/8) + j*(2*PI/8) + 0.2*num
    //                 var pointx = aSpiral[0].x + 0.5*p5.cos(theta)*(p5.exp(0.1*theta))
    //                 var pointy = aSpiral[0].y + 0.5*p5.sin(theta)*(p5.exp(0.1*theta))
    //                 var aPoint = p5.createVector(pointx,pointy);
    //                 aSpiral.p5.push(aPoint); //center is newSpiral[0]
    //             }
    //         }
    //         endShape();
    //     }
        
    //     //STARS
    //     for (var c = 0; c < arrayOfStars.length; c++){
    //         var aStar = arrayOfStars[c];
    //         p5.beginShape();
    //         ind = arrayOfStarColors[c];
    //         p5.fill(starColors[ind]);
    //         p5.stroke(255);
    //         p5.strokeWeight(1);
    //         var size = arrayOfStarSizes[c];
    //         var xoffset = p5.random(-2,2);
    //         var yoffset = p5.random(-2,2);
    //         x1 = aStar.x + xoffset;
    //         y1 = aStar.y + 2*size + yoffset;
    //         x2 = aStar.x + size + xoffset;
    //         y2 = aStar.y + yoffset;
    //         x3 = aStar.x + xoffset;
    //         y3 = aStar.y - 2*size + yoffset;
    //         x4 = aStar.x - size + xoffset;
    //         y4 = aStar.y + yoffset;
    //         p5.quad(x1, y1, x2, y2, x3, y3, x4, y4)
    //     }
        
    //     //SMALL STARS
    //     for (var c = 0; c < arrayOfSmallStars.length; c++){
    //         var saStar = arrayOfSmallStars[c];
    //         p5.beginShape();
    //         ind = arrayOfSmallStarColors[c];
    //         p5.fill(starColors[ind]);
    //         p5.stroke(255);
    //         p5.strokeWeight(1);
    //         var ssize = arrayOfSmallStarSizes[c];
    //         var sxoffset = 0 //random(-2,2);
    //         var syoffset = 0 //random(-2,2);
    //         x1 = saStar.x + sxoffset;
    //         y1 = saStar.y + 2*ssize + syoffset;
    //         x2 = saStar.x + ssize + sxoffset;
    //         y2 = saStar.y + syoffset;
    //         x3 = saStar.x + sxoffset;
    //         y3 = saStar.y - 2*ssize + syoffset;
    //         x4 = saStar.x - ssize + sxoffset;
    //         y4 = saStar.y + syoffset;
    //         p5.quad(x1, y1, x2, y2, x3, y3, x4, y4)
    //     }
        
    //     //LINES
    //     for (var b = 0; b < arrayOfLines.length; b++){
    //         var aLine = arrayOfLines[b];
    //         p5.beginShape();
    //         ind = arrayOfLineColors[b];
    //         p5.stroke(lineColors[ind]);
    //         p5.strokeWeight(5)
    //         var length = arrayOfLineLengths[b]
    //         x1 = aLine.x + length*2*p5.sin(b + p5.millis()/1000)*p5.sin(b + p5.millis()/1000) //+ 100*sin(frameCount)
    //         y1 = aLine.y + length*p5.sin(b + p5.millis()/1000)
    //         x2 = aLine.x - length*2*p5.sin(b + p5.millis()/1000)*p5.sin(b + p5.millis()/1000) //- 100*sin(frameCount)
    //         y2 = aLine.y - length*p5.sin(b + p5.millis()/1000)
    //         p5.line( x1,y1,x2,y2);
    //     }
    // }
    
    
    // //ARRAYOFARRAYS
    // p5.mousePressed = () => {
    //     console.log('mouse pressed');
    //     if (shape == 1){
    //         var newSpiral = [];
    //         var spiralPoint = p5.createVector(p5.mouseX, p5.mouseY);
    //         newSpiral.p5.push(spiralPoint); //center is newSpiral[0]
    //         arrayOfSpirals.p5.push(newSpiral);
    //     } else if (shape == 2){
    //         var newLine = p5.createVector(p5.mouseX, p5.mouseY); //center point of newLine
    //         arrayOfLines.p5.push(newLine);
    //         arrayOfLineLengths.p5.push(p5.random(40,130));
    //         arrayOfLineColors.p5.push(p5.int(p5.random(lineColors.length)));
    //     } else if (shape == 3){
    //         for (var i = 0; i < p5.int(p5.random(5,12)); i++){
    //             var newStar = p5.createVector(p5.mouseX + p5.random(-10,10), p5.mouseY + p5.random(-8,8));
    //             arrayOfStars.p5.push(newStar);
    //             arrayOfStarSizes.p5.push(p5.random(5,30));
    //             arrayOfStarColors.p5.push(p5.int(p5.random(starColors.length)));
    //         }
    //     }
        
    // }
    
    
    // p5.mouseDragged = () => {
    //     console.log('mouse dragged');
    //     if (shape == 3){
    //         for (var i = 0; i < p5.int(p5.random(3,8)); i++){
    //             var newSmallStar = p5.createVector(p5.mouseX + p5.random(-100,100), p5.mouseY + p5.random(-30,30));
    //             arrayOfSmallStars.p5.push(newSmallStar);
    //             arrayOfSmallStarSizes.p5.push(p5.random(1,7));
    //             arrayOfSmallStarColors.p5.push(p5.int(p5.random(starColors.length)));
    //             }
    //     }
        
    // }
    
    // //ARRAYOFARRAYS
    // p5.keyPressed = () => {
    //     if (p5.key == " "){
    //         console.log('pressed space');
    //         arrayOfSpirals = [];
    //         arrayOfLines = []
    //         arrayOfLineLengths = []; 
    //         arrayOfStars = [];
    //         arrayOfStarSizes = [];
    //         arrayOfStarColors = [];
    //         arrayOfSmallStars = [];
    //         arrayOfSmallStarSizes = [];
    //         arrayOfSmallStarColors = [];
    //     }
    //     if (p5.key == "1"){
    //         shape = 1;
    //         console.log('pressed 1');
    //     } else if (p5.key == "2"){
    //         shape = 2;
    //         console.log('pressed 2');
    //     } else if (p5.key == "3"){
    //         shape = 3;
    //         console.log('pressed 3');
    //     }
    // } 

// }

export default StellarDrawingToolSketch;
