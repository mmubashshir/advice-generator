  


async function getAdvice()
  {
    let randomNum = Math.floor(Math.random() * 224);
  const url= `https://api.adviceslip.com/advice/${randomNum}`;
    const response=await fetch(url);
    const data=await response.json();
    const adviceId=data.slip.id;
    const advice=data.slip.advice;

    const advId=document.getElementById("adviceNo");
    const advText = document.getElementById("adviceText");

    advId.innerHTML=`ADVICE #${adviceId}`;
    advText.innerHTML = advice;
  }

getAdvice();