function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("output").innerHTML= (valNum-32)/1.8 ;  
};

function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("output1").innerHTML=  (valNum * 9.0/5.0) + 32.0;
      
};

function fun(){  
    document.getElementById("output").innerText = '';
    document.getElementById("output1").innerText = '';
    document.getElementById("inputF").innerText = '';
    document.getElementById("inputC").innerText = '';
    document.getElementById("output").reset();
    
  };

