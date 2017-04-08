            var t0 = performance.now();
            
            function getRandomColor() {
                var letters = '0123456789';
                var newcolor = "#";
                for (var i = 0; i < 6; i++) {
                    var rando = letters[Math.round(Math.random()*9)]
                    newcolor += rando;
                };
                console.log(newcolor)
                return newcolor;
            }
            
            function makeNewShape() {
               var x = Math.round(Math.random() * 800);
               var y = Math.round(Math.random() * 400);
            
               document.getElementById('three').style.position = "relative";
               document.getElementById('three').style.left = x + "px";
               document.getElementById('three').style.top = y + "px";
            
               var soc = Math.round(Math.random() * 1);
            
               if (soc === 1) {
                document.getElementById('three').style.borderRadius = "50%";
               }
            
               document.getElementById('three').style.backgroundColor = getRandomColor() 
                
               document.getElementById('three').style.display = "block";
                
               t0 = performance.now();
                
            }
            
            function appearAfterDelay() {
                
                setTimeout(makeNewShape, Math.random()*2000);
            }
            
            document.getElementById('three').onclick = function () {
                var t1 = performance.now();
                
                var timed = (t1-t0)/1000;
                
                
                document.getElementById('three').style.display = "none";
                
                document.getElementById('time').innerHTML = timed + "s"
                
                appearAfterDelay();
                
            };