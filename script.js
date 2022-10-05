const dateofBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton =  document.querySelector("#check-number");
const outputBox = document.querySelector("#p");
checkNumberButton.addEventListener(
    'click', function checkBirthdayIsLucky(){

        const dob= dateofBirth.value;
        const sum= calculateSum(dob);
        
        compareValues(sum,luckyNumber.value)
        
       
  

        
    })
    
    function calculateSum(dob){
        dob= dob.replaceAll("-","");
        let sum = 0;
        for(let index=0 ; index<dob.length; index++){
            sum = sum + Number(dob.charAt(index));
        }
      return sum;
    }

    function compareValues(sum,luckyNumber){
        if(luckyNumber%sum===0){
            p.innerText= "Your Birthday is Lucky";
        }
        else{
            p.innerText="Your birthday is not lucky";
        }


    }

