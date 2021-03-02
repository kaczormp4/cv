function EducationAnimation(){
    var education = document.getElementById("fourthBoxLeft");
    var fourthBoxRightText = document.getElementById("fourthBoxRightText");
    var fourthBoxRightText2 = document.getElementById("fourthBoxRightText2");
    window.addEventListener("scroll",  e =>{
        var rect = education.getBoundingClientRect();
        //console.log(Math.round(rect.top));
        //console.log(document.body.scrollHeight);
        if(rect.top<372){
            education.style.flexWrap = "wrap-reverse"
            // fourthBoxRightText2.style.border = "4px solid rgba(0, 255, 0,0.4)";
            // fourthBoxRightText2.style.backgroundColor = "rgba(0, 255, 0,0.05)";            
            fourthBoxRightText.style.border = "";
            fourthBoxRightText.style.backgroundColor = "";

        }else{
            education.style.flexWrap = "wrap";

            // fourthBoxRightText.style.border = "4px solid rgba(0, 255, 0,0.4)";
            // fourthBoxRightText.style.backgroundColor = "rgba(0, 255, 0,0.05)";
            fourthBoxRightText2.style.border = "";
            fourthBoxRightText2.style.backgroundColor = "";
        }
    })
}

function GihubLinkAnimation(){
    var githubLink = document.getElementById("secondBox");
    var tab=[];
    for(var i = 0; i < githubLink.innerText.length; i++){
        tab.push(githubLink.innerText[i])      
    }
    var zero = 0;
    setInterval(() => {
        var redColor = Math.floor(Math.random()*254);
        var greenColor = Math.floor(Math.random()*100);
        var blueColor = Math.floor(Math.random()*100);
        tab[zero] = tab[zero].toUpperCase();
        tab[zero] = `<span style="color:rgb(${redColor},${greenColor},${blueColor})">${tab[zero]}</span>`


        zero++;
        var x = tab.join("");
        //console.log(zero)
        if(zero == tab.length){
            zero=0;
            tab=[];
            for(let i = 0; i < githubLink.innerText.length; i++){
                tab.push(githubLink.innerText[i])      
            }
            for(let i = 0 ; i < tab.length ; i ++){
                tab[i] = tab[i].toLowerCase();
            }
        }
        githubLink.innerHTML = x;
    }, 200); 
    
}

function SkillAnimation(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width)
    if(width > 800){   
        
        var skill1 = document.getElementById("fifthBoxSkillsBoxSquares1");
        var skill2 = document.getElementById("fifthBoxSkillsBoxSquares2");
        var skill3 = document.getElementById("fifthBoxSkillsBoxSquares3");
        var skill4 = document.getElementById("fifthBoxSkillsBoxSquares4");
        
        console.log(skill4.style.width)
        var fifthBoxAnimationDiv = document.getElementById("fifthBoxAnimationDiv");

        skill1.addEventListener("mousemove",e => {
            fifthBoxAnimationDiv.style.left = `${e.layerX}px`;
            skill1.style.boxShadow ="0 0 10px lightblue";
            skill1.style.transform ="scale(1.4)";
            skill1.style.zIndex = "10";
            

        })
        skill1.addEventListener("mouseout",e => {
            fifthBoxAnimationDiv.style.left = `${e.layerX}px`;
            skill1.style.boxShadow ="";
            skill1.style.transform ="scale(1)";
            skill1.style.zIndex = "1";
            
        })


        skill2.addEventListener("mousemove",e => {
            fifthBoxAnimationDiv.style.left = `${e.clientX - 420}px`;
            skill2.style.boxShadow ="0 0 10px gold";
            skill2.style.transform ="scale(1.4)";
            skill2.style.zIndex = "10";
        })
        skill2.addEventListener("mouseout",e => {
            fifthBoxAnimationDiv.style.left = `${e.clientX - 420}px`;
            skill2.style.boxShadow ="";
            skill2.style.transform ="scale(1)";
            skill2.style.zIndex = "1";
        })

        skill3.addEventListener("mousemove",e => {
            fifthBoxAnimationDiv.style.left = `${e.clientX - 420}px`;
            skill3.style.boxShadow ="0 0 10px blue";
            skill3.style.transform ="scale(1.4)";
            skill3.style.zIndex = "10";
        })
        skill3.addEventListener("mouseout",e => {
            fifthBoxAnimationDiv.style.left = `${e.clientX - 420}px`;
            skill3.style.boxShadow ="";
            skill3.style.transform ="scale(1)";
            skill3.style.zIndex = "1";
        })


        skill4.addEventListener("mousemove",e => {
            fifthBoxAnimationDiv.style.left = `${e.clientX - 420}px`;
            skill4.style.boxShadow ="0 0 10px orange";
            skill4.style.transform ="scale(1.4)";
            skill4.style.zIndex = "10";
        })
        skill4.addEventListener("mouseout",e => {
            fifthBoxAnimationDiv.style.left = `${e.clientX - 420}px`;
            skill4.style.boxShadow ="";
            skill4.style.transform ="scale(1)";
            skill4.style.zIndex = "1";
        })
    }
}
function AvatarAnimation(){
    var old = document.getElementById("firstBoxPhotoImg");
    var divAnime = document.getElementById("firstBoxPhotoAnimation");
    divAnime.addEventListener("mouseover", e =>{
        old.style.opacity = "0"
        old.src= "img/myphoto2.png";
        setTimeout(() => {            
            old.style.opacity = "1"
        }, 500);

    })
    divAnime.addEventListener("mouseout", e =>{
        old.style.opacity = "0"
        old.src= "img/myphoto.png";
        setTimeout(() => {           
            old.style.opacity = "1"
        }, 500);
    })
}

function StarsAnime(){

    var fifthBoxSkillsBoxSquares1 = document.getElementById("fifthBoxSkillsBoxSquares1");
    var fifthBoxSkillsBoxSquares2 = document.getElementById("fifthBoxSkillsBoxSquares2");
    var fifthBoxSkillsBoxSquares3 = document.getElementById("fifthBoxSkillsBoxSquares3");
    var fifthBoxSkillsBoxSquares4 = document.getElementById("fifthBoxSkillsBoxSquares4");


    var fifthBoxSkillsBoxSquaresStars1 = document.getElementById("fifthBoxSkillsBoxSquaresStars1");
    var fifthBoxSkillsBoxSquaresStars2 = document.getElementById("fifthBoxSkillsBoxSquaresStars2");
    var fifthBoxSkillsBoxSquaresStars3 = document.getElementById("fifthBoxSkillsBoxSquaresStars3");
    var fifthBoxSkillsBoxSquaresStars4 = document.getElementById("fifthBoxSkillsBoxSquaresStars4");

    

    fifthBoxSkillsBoxSquares1.addEventListener("mouseover", e=>{
        fifthBoxSkillsBoxSquaresStars1.style.display = "block"
        setTimeout(() => {
            fifthBoxSkillsBoxSquaresStars1.style.transitionDuration ="1s"          
            fifthBoxSkillsBoxSquaresStars1.style.transform="scale(1.5)"
        }, 700);
    })
    fifthBoxSkillsBoxSquares1.addEventListener("mouseout", e=>{
        fifthBoxSkillsBoxSquaresStars1.style.display = "none";
        fifthBoxSkillsBoxSquaresStars1.style.transform="scale(1)"
    })
    ///////////////////2
    fifthBoxSkillsBoxSquares2.addEventListener("mouseover", e=>{
        fifthBoxSkillsBoxSquaresStars2.style.display = "block"
        setTimeout(() => {
            fifthBoxSkillsBoxSquaresStars2.style.transitionDuration ="1s"          
            fifthBoxSkillsBoxSquaresStars2.style.transform="scale(1.5)"
        }, 700);
    })
    fifthBoxSkillsBoxSquares2.addEventListener("mouseout", e=>{
        fifthBoxSkillsBoxSquaresStars2.style.display = "none"
        fifthBoxSkillsBoxSquaresStars2.style.transform="scale(1)"
    })
    ///////////////////3
    fifthBoxSkillsBoxSquares3.addEventListener("mouseover", e=>{
        fifthBoxSkillsBoxSquaresStars3.style.display = "block"
        setTimeout(() => {
            fifthBoxSkillsBoxSquaresStars3.style.transitionDuration ="1s"          
            fifthBoxSkillsBoxSquaresStars3.style.transform="scale(1.5)"
        }, 700);
    })
    fifthBoxSkillsBoxSquares3.addEventListener("mouseout", e=>{
        fifthBoxSkillsBoxSquaresStars3.style.display = "none"
        fifthBoxSkillsBoxSquaresStars3.style.transform="scale(1)"
    })
    ///////////////////4
    fifthBoxSkillsBoxSquares4.addEventListener("mouseover", e=>{
        fifthBoxSkillsBoxSquaresStars4.style.display = "block"
        setTimeout(() => {
            fifthBoxSkillsBoxSquaresStars4.style.transitionDuration ="1s"          
            fifthBoxSkillsBoxSquaresStars4.style.transform="scale(1.5)"
        }, 700);
    })
    fifthBoxSkillsBoxSquares4.addEventListener("mouseout", e=>{
        fifthBoxSkillsBoxSquaresStars4.style.display = "none"
        fifthBoxSkillsBoxSquaresStars4.style.transform="scale(1)"
    })
}
function AboutMeTextAnimaion(){
    var amF = document.getElementById("aboutMeFlex");
    var amt = document.getElementById("aboutMeText");
    var ambTitle = document.getElementById("ambTitle");
    ambTitle.addEventListener("click", e =>{
        
        if(amt.style.display==="block"){
            ambTitle.innerText="click here to read more about me again"
            amt.style.display="none";
            amF.style.display="none";
        }else{
            ambTitle.innerText="click here to close window"
            amF.style.display="flex";
            amt.style.display="block";
        }
    })
}


EducationAnimation();
GihubLinkAnimation();
SkillAnimation();
//AvatarAnimation();
StarsAnime();
AboutMeTextAnimaion();