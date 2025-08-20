let scoreStr=localStorage.getItem('score');
    let score=JSON.parse(scoreStr) ||{
        win:0,
        lost:0,
        tie:0,
    };
     function work(user){
            let computerChoice=computer();
            let result_=result(user,computerChoice);
            display_=display(user,computerChoice,result_);
        }
        function computer(){
            let rand=Math.random()*3;
            if(rand>=0 && rand<=1){
                return 'Bat';
            }else if(rand>1 && rand<=2){
                return 'Ball';
            }else{
                return 'Stump';
            }
        }
        function result(user,comp){
            if(user==='Bat'){
                if(comp==='Bat'){
                    score.tie++;
                    return 'Game Was Drawed, Play Again!';
                }else if(comp==='Ball'){
                    score.win++;
                    return 'You Win! Bat beats Ball';
                }else if(comp==='Stump'){
                    score.lost++;
                    return 'Computer Won! Stump beats Bat';
                }
            }else if(user==='Ball'){
                if(comp==='Ball'){
                    score.tie++;
                    return 'Game Was Drawed, Play Again';
                }else if(comp==='Stump'){
                    score.win++;
                    return 'You Win! Stump beats Ball';
                }else if(comp==='Bat'){
                    score.lost++;
                    return 'Computer Won! Bat beats Ball';
                }
            }else if(user==='Stump'){
                if(comp==='Stump'){
                    score.tie++;
                    return 'Game Was Drawed, Play Again';
                }else if(comp==='Bat'){
                    score.win++;
                    return 'You Win! Bat beats Stump';
                }else if(comp==='Ball'){
                    score.lost++;
                    return 'Computer Won! Ball beats Stump';
                }
            }
        }
        function display(user,comp,result){
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.choice').innerHTML=`You Have Chosen ${user} | Computer Choice is ${comp}`;

            document.querySelector('.result').innerHTML=`${result}`;

            const res_ele=document.querySelector('.result');
            res_ele.innerHTML=result;

            if (result.includes("You Win")) {
                res_ele.style.backgroundColor = "green";
            } else if (result.includes("Computer Won")) {
                res_ele.style.backgroundColor = "red";
            } else {
                res_ele.style.backgroundColor = "black";
            }

            document.querySelector('#user-score').innerHTML=`${score.win}`;

            document.querySelector('#comp-score').innerHTML=`${score.lost}`;

        }
        function resetScore() {
            localStorage.removeItem('score');
            score = { win: 0, lost: 0, tie: 0 };
            document.querySelector('#user-score').innerHTML="0";
            document.querySelector('#comp-score').innerHTML="0";
            
            alert("Score has been reset!");
        }
        document.addEventListener('keydown',function(event){
            if(event.key==='Enter'){
                resetScore();
            }
        });