const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

const winningScoreSelect = document.querySelector('#number');

const result = document.querySelector('#result');

let p1score = 0;
let p2score = 0;
let winningScore = 2;
let isOver = false;

winningScoreSelect.addEventListener('change', function() {

    winningScore = parseInt(this.value);
    reset();
})


b1.addEventListener('click',function()
{
    if(!isOver){
        p1score += 1;
        
        if(p1score === winningScore){
            isOver = true;
            
        }
        p1.textContent = p1score;
      }   
      else{
          if(p1score > p2score){
            result.innerHTML = '<span style="color:#8cfc03">Pranju won!!!</span>';
          }
      }
           
    
});

b2.addEventListener('click',function() 
{
    if(!isOver){
        p2score += 1;
       
        if(p2score === winningScore){
            isOver = true;
        }
        p2.textContent = p2score;
      }    
      else{
        if(p1score < p2score){
            result.innerHTML = '<span style="color:#8cfc03" >Akansha won!!!</span>';
        
        
        }
    }
    

     

});

b3.addEventListener('click',reset);

function reset(){
   
    result.textContent = "ScoreKeeper";
    isOver = false;
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;

}