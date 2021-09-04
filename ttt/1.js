var i=0;
var s1=document.getElementById('e1');
var s2=document.getElementById('e2');
var s3=document.getElementById('e3');
var s4=document.getElementById('e4');
var s5=document.getElementById('e5');
var s6=document.getElementById('e6');
var s7=document.getElementById('e7');
var s8=document.getElementById('e8');
var s9=document.getElementById('e9');
var tb=document.getElementById('tb');
var btn=document.getElementById('btn');
var i1=document.getElementById('i1').value;
var i2=document.getElementById('i2').value;
var agn=document.getElementById('again');
var pt1=document.getElementById('i1');
var pt2=document.getElementById('i2');
var audio=new Audio('wn.wav');
var audio1=new Audio('dr.mp3');
let p=23;
const win=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
let con1=[];
let con2=[];
let one=0;
let two=0;
let three=0;
let four=0;
flag=true;
player=true;
var mn=document.getElementById("mn");
// tb.style.opacity="0.1";
tb.style.filter="blur(3px)";
tb.style.boxShadow="13px 11px 31px yellow ";
agn.style.display="none";
var nam=document.getElementById('d');
// tb.style.filter="drop-shadow(8px 8px 10px black)"
str1=0;

function strt(){

    str1++;
    if(str1<2){
        count =false;
    tb.style.opacity="1";
    tb.style.filter="blur(0px)"
    count=true;
   btn.style.opacity="0.3";
   if(player==true){
  i1=document.getElementById('i1').value;
i2=document.getElementById('i2').value;
if(i1.length==0){
    i1="Player1"; 
} 
if(i2.length==0){
    i2="Player2"; 
} 
  player=false; }
  if(player==false){
      pt1.style.filter="blur(1px)"
      pt2.style.filter="blur(1px)"
  }
}
if(str1>1)
alert("Game already start")
}


    function main(i,s,p,player1,player2){
        
        if(i==5){
            // console.log("ghjw");
            con2.push(p)
            con2.sort();
            // console.log(con2);
            for(j=0;j<win.length;j++){
                // console.log(win[j]);
            if(JSON.stringify(win[j])==JSON.stringify(con2)){
                 s.innerHTML="X";
                 audio.play();
                nam.innerHTML= `${player1} win this game &#129395 &#127881 &#127880 &#9829 `;
                tb.style.filter="blur(3px)";
                btn.style.display="none";
                agn.style.display="block";
                // tb.innerHTML="dak";
                count=false;
              flag=false;
              break;
            }
            }
        }
        if(i==7){
            
            con2.push(p)
            con2.sort();
            for(j=0;j<8;j++){
                sum=0;
                for(k=0;k<3;k++){
                    for(m=0;m<4;m++){
                        if(win[j][k]==con2[m]){
                        sum++;
                    break;}
                    }
                }if(sum==3){
                    audio.play();
                     s.innerHTML="X";
                     nam.innerHTML=`${player1} win this game &#129395 &#127881 &#127880 &#9829 `;
                tb.style.filter="blur(3px)";
                btn.style.display="none";
                agn.style.display="block";
                    count=false;
             flag=false;
             break; 
                }
            }
           
        }
        if(i==6){
        con1.push(p)
        con1.sort();
        for(j=0;j<win.length;j++){
        if(JSON.stringify(win[j])==JSON.stringify(con1)){
            audio.play();
             s.innerHTML="O";
             nam.innerHTML=`${player2} win this game &#129395 &#127881 &#127880 &#9829 `;
                tb.style.filter="blur(3px)";
                btn.style.display="none";
                agn.style.display="block";
            count=false;
          flag=false;
          break;
        }
        }
        // if(flag)
        // tb.innerHTML="Draw";
        }
        if(i==8){
            con1.push(p)
            con1.sort();
            for(j=0;j<8;j++){
                sum=0;
                for(k=0;k<3;k++){
                    for(m=0;m<4;m++){
                        if(win[j][k]==con1[m]){
                        sum++;
                    break;}
                    }
                }if(sum==3){
                    audio.play();
                     s.innerHTML="O";
                     nam.innerHTML=`${player2} win this game &#129395 &#127881 &#127880 &#9829 `;
                tb.style.filter="blur(3px)";
                btn.style.display="none";
                agn.style.display="block";
                    count=false;
             flag=false;
             break; 
                }
            }
           
            }
            if(i==9){
       con2.push(p)
                con2.sort();
       for(j=0;j<8;j++){
           sum=0;
           for(k=0;k<3;k++){
               for(m=0;m<5;m++){
                   if(win[j][k]==con2[m]){
                   sum++;
               break;}
               }
           }if(sum==3){
               audio.play();
                s.innerHTML="X";
               nam.innerHTML=`${player1} win this game &#129395 &#127881 &#127880 &#9829 `;
                tb.style.filter="blur(3px)";
                btn.style.display="none";
                agn.style.display="block";
              count=false;

              flag=false;
        break; 
           }
       } 
       if(flag){
        nam.innerHTML=`Game Draw `;
        audio1.play();
         s.innerHTML="X";
                tb.style.filter="blur(3px)";
                btn.style.display="none";
                agn.style.display="block";
           count=false;
       } 
   }
        else if(i%2==0 ){
        s.innerHTML="O";
        if(i<5)
         con1.push(p);}
        else{
        s.innerHTML="X";
        if(i<5)
         con2.push(p);}
        }
    
   count1=true;
   count2=true;
   count3=true;
   count4=true;
   count5=true;
   count6=true;
   count7=true;
   count8=true;
   count9=true;
   function fn1(){
    p=1;
    if(count)
    {if(count1){i++;
   main(i,s1,p,i1,i2);
      } 
    else alert("You can't click one box more than one")
    } count1=false;
    }
    function fn2(){
        p=2;
        if(count)
        {if(count2){i++;
        main(i,s2,p,i1,i2);
                }
            else alert("You can't click one box more than one")
            }       count2=false;
         }
         function fn3(){
             
             p=3;
             if(count)
             {if(count3){i++;
            main(i,s3,p,i1,i2);
                      } 
                    else alert("You can't click one box more than one")
                    }           count3=false;
             }
             function fn4(){
                 
                 p=4;
                 if(count)
                 {if(count4){i++;
                main(i,s4,p,i1,i2);
                      }  
                    else alert("You can't click one box more than one")
                    }   count4=false;
                 }
                 function fn5(){
                    
                     p=5;
                     if(count)
                     {if(count5) {i++; 
                    main(i,s5,p,i1,i2);
                        }  
                    else alert("You can't click one box more than one")
                    }    count5=false;
                     }
                     function fn6(){
                         
                         p=6;
                         if(count)
                         {if(count6){ i++; 
                        main(i,s6,p,i1,i2);
                                                }   
                                            else alert("You can't click one box more than one")
                                            }                  count6=false;
                         } function fn7(){
                             
                             p=7; 
                             if(count)
                             {if(count7){ i++; 
                            main(i,s7,p,i1,i2);
                    }  
                else alert("You can't click one box more than one")
                }   count7=false;
                             }
                             function fn8(){
                                
                                 p=8;
                                 if(count)
                                 {if(count8){ i++; 
                                main(i,s8,p,i1,i2);
                        }  
                    else alert("You can't click one box more than one")
                    }     count8=false;
                                 }
                                 function fn9(){
                                     p=9;
                                     
                                     if(count)
                                     {if(count9){i++;
                                    main(i,s9,p,i1,i2);
                                        } 
                                    else alert("You can't click one box more than one")
                                    }  count9=false;
                                     }
                                    function again(){
                                         window.location.reload();
                                     }

                  