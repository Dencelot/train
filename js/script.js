


function ibg(){

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }
   }
   }
   
   ibg();


//___________активируем ссылочки_______добавляем прокрутку______

let fullbodyClick = document.getElementById('fullbody');

function setFullbody() {
   let fullbody = document.querySelector('.fullbody');
   fullbody.scrollIntoView(false);
}
fullbodyClick.addEventListener('click', setFullbody);



let aboutClick = document.getElementById('about');

function setAbout() {
   let about = document.querySelector('.about');
   about.scrollIntoView(top);
}
aboutClick.addEventListener('click', setAbout);


let warmClick = document.getElementById('warm');

function setWarm() {
   let warm = document.querySelector('.warm');
   warm.scrollIntoView(top);
}
warmClick.addEventListener('click', setWarm);


let trainClick = document.getElementById('train');

function setTrain() {
   let train = document.querySelector('.train');
   train.scrollIntoView(top);
}
trainClick.addEventListener('click', setTrain);


//________________________активируем train1 train2_______

let train1 = document.querySelector('.train1');

document.addEventListener('mouseover', function(event){
   if (event.target.closest('.train1')) {
      train1.classList.add('active');
      
   }
   if (!event.target.closest('.train1')) {
		train1.classList.remove('active');
		
	}
});


let train2 = document.querySelector('.train2');
document.addEventListener('mouseover', function(event){
   if (event.target.closest('.train2')) {
      train2.classList.add('active');
      
   }
   if (!event.target.closest('.train2')) {
		train2.classList.remove('active');
		
	}
});

function opening(exersice, link, block, id){
   
   let listener = function(event){
      let button = document.getElementById(`${id}`);
      if (event.code === 'Enter') {
         console.log(button);
         button.click();
      }
      }

   let opening = document.getElementById(`${exersice}`);

   document.addEventListener('click', function(event){
   if (event.target.closest(`${link}`)) {
      opening.classList.toggle('opening');
      document.addEventListener('keyup', listener );

   }
   if (!event.target.closest(`${block}`)) {
		opening.classList.remove('opening');
      document.removeEventListener('keyup', listener );
	}
   });
   document.addEventListener('keyup', function(event){
      if (event.code === 'Escape') {
         opening.classList.remove('opening');
      }
   });
}

let exersiceBenchHammer = ('benchHammer');
let benchHammer = ('.benchHammer');
let oneGirls = ('.oneGirls');
opening(exersiceBenchHammer, benchHammer , oneGirls, 'buttonBenchHammer');

let exersiceMahiGirls = ('mahiGirls');
let mahiGirls = ('.mahiGirls');
let twoGirls = ('.twoGirls');
opening(exersiceMahiGirls, mahiGirls, twoGirls, 'buttonMahiGirls');

let exersicetLiftGirls= ('liftGirls');
let liftGirls = ('.liftGirls');
let threeGirls = ('.threeGirls');
opening(exersicetLiftGirls, liftGirls, threeGirls, 'buttonLiftGirls');

let exersicePressLegsGirls = ('pressLegsGirls');
let pressLegsGirls = ('.pressLegsGirls');
let fourGirls = ('.fourGirls');
opening(exersicePressLegsGirls, pressLegsGirls , fourGirls, 'buttonPressLegsGirls');

let exersiceLungesGirls = ('lungesGirls');
let lungesGirls = ('.lungesGirls');
let fiveGirls = ('.fiveGirls');
opening(exersiceLungesGirls, lungesGirls , fiveGirls, 'buttonLungesGirls');

let exersiceLiftLegsGirls = ('liftLegsGirls');
let liftLegsGirls = ('.liftLegsGirls');
let sixGirls = ('.sixGirls');
opening(exersiceLiftLegsGirls, liftLegsGirls , sixGirls, 'buttonLiftLegsGirls');

let exersiceBenchInclined = ('benchInclined');
let benchInclined = ('.benchInclined');
let one = ('.one');
opening(exersiceBenchInclined, benchInclined , one, 'buttonInclined');

let exersiceBars = ('bars');
let bars = ('.bars');
let two = ('.two');
opening(exersiceBars, bars , two, 'buttonBars');

let exersiceMahi = ('mahi');
let mahi = ('.mahi');
let three = ('.three');
opening(exersiceMahi, mahi, three, 'buttonMahi');

let exersicetLift = ('lift');
let lift = ('.lift');
let four = ('.four');
opening(exersicetLift, lift, four, 'buttonLift');

let exersicePressLegs = ('pressLegs');
let pressLegs = ('.pressLegs');
let five = ('.five');
opening(exersicePressLegs, pressLegs , five, 'buttonPressLegs');

let exersiceLiftLegs = ('liftLegs');
let liftLegs = ('.liftLegs');
let six = ('.six');
opening(exersiceLiftLegs, liftLegs , six, 'buttonLiftLegs');


//_______________логика подбора веса____________________


function weightPyramid(w, r, wF, wS, wT, rF, rS, rT) {

   console.log('weightPyramid');
   
   let weightFirst = +document.getElementById(wF).value;
   let weightSecond = +document.getElementById(wS).value;
   let weightThird = +document.getElementById(wT).value;

   let repsFirst = +document.getElementById(rF).value;
   let repsSecond = +document.getElementById(rS).value;
   let repsThird = +document.getElementById(rT).value;
   
   if ((weightFirst == 0 || weightSecond == 0 || weightThird == 0) && (repsFirst == 0 || repsSecond == 0 || repsThird == 0)){
      console.log('not value');
      return;
   }


   if(repsFirst > 6 + r || repsSecond > 6 + r || repsThird > 6 + r){
      console.log('reps > 6')

      document.getElementById(wF).value = +weightThird + w;
      document.getElementById(wS).value = +weightThird + w;
      document.getElementById(wT).value = +weightThird + w;

      document.getElementById(rF).value = 6 + r;
      document.getElementById(rS).value = 6 + r;
      document.getElementById(rT).value = 6 + r;
   }else{
      if(weightFirst !== weightSecond && weightFirst < weightSecond){
         console.log('some value !==');
   
         if(repsFirst === repsSecond && repsSecond === repsThird && repsFirst == 6 + r){
            console.log('true');
            
            document.getElementById(wF).value = +weightFirst + w;
            document.getElementById(wT).value = +weightThird + w;   
         }else{console.log('false');}
      
         if(repsFirst > 3 + r && repsFirst <= 6 + r && repsSecond > 3 + r && repsSecond <= 6 + r && repsThird > 3 + r && repsThird <= 6 + r){
            console.log('repsFirst == 6 && reps > 3 && reps < 6');
            if(repsFirst <= 6 + r && repsSecond < 6 + r && repsThird < 6 + r){
               console.log('reps < 6');
               document.getElementById(wS).value = +weightSecond - w;
   
               document.getElementById(rF).value = 6 + r;
               document.getElementById(rS).value = 6 + r;
               document.getElementById(rT).value = 6 + r;
            }else{         
               document.getElementById(rF).value = 6 + r;
               document.getElementById(rS).value = 6 + r;
               document.getElementById(rT).value = 6 + r;
            }
         }else{console.log('not 3 < reps <= 6')
         document.getElementById(wF).value = +weightFirst - w;
         document.getElementById(wS).value = +weightSecond - w;
         document.getElementById(wT).value = +weightThird - w;
   
         document.getElementById(rF).value = 6 + r;
         document.getElementById(rS).value = 6 + r;
         document.getElementById(rT).value = 6 + r;
         }
      
   
      }else{
         if (weightThird > weightFirst){
            console.log('weightThird > weightFirst');
            document.getElementById(wF).value = +weightThird;
            document.getElementById(wS).value = +weightThird;
            document.getElementById(wT).value = +weightThird;
      
            document.getElementById(rF).value = 6 + r;
            document.getElementById(rS).value = 6 + r;
            document.getElementById(rT).value = 6 + r;
         }
         
         if (weightThird < weightFirst){
            console.log('weightThird < weightFirst');
            document.getElementById(wF).value = +weightSecond;
            document.getElementById(wS).value = +weightSecond;
            document.getElementById(wT).value = +weightSecond;
      
            document.getElementById(rF).value = 6 + r;
            document.getElementById(rS).value = 6 + r;
            document.getElementById(rT).value = 6 + r;}
         
         if (weightSecond < weightFirst){
            console.log('weightSecond < weightFirst');
            document.getElementById(wF).value = +weightSecond;
            document.getElementById(wS).value = +weightSecond;
            document.getElementById(wT).value = +weightSecond;
      
            document.getElementById(rF).value = 6 + r;
            document.getElementById(rS).value = 6 + r;
            document.getElementById(rT).value = 6 + r;}
         }
   
   
      if (weightFirst === weightSecond && weightSecond === weightThird){
         console.log('some value ==='); 
   
         if(repsFirst === repsSecond && repsSecond === repsThird && repsFirst == 6  + r){
            console.log('true');
            let result = +weightSecond + w;
            document.getElementById(wS).value = result;
            
         }else{console.log('false')}
   
         if(repsFirst > 3 + r && repsFirst <= 6 + r && repsSecond > 3 + r && repsSecond <= 6 + r && repsThird > 3 + r && repsThird <= 6 + r){
            console.log('3 < reps <= 6' ,' ', repsFirst,' ', repsSecond,' ', repsThird );
            if(repsFirst <= 6 + r && repsSecond < 6 + r && repsThird < 6 + r) {
               document.getElementById(wF).value = +weightSecond - w;
               document.getElementById(wT).value = +weightSecond - w;
   
               document.getElementById(rF).value = 6 + r;
               document.getElementById(rS).value = 6 + r;
               document.getElementById(rT).value = 6 + r;
            }else{
   
               document.getElementById(rF).value = 6 + r;
               document.getElementById(rS).value = 6 + r;
               document.getElementById(rT).value = 6 + r;
            }
         }else{console.log('not 3 < reps <= 6')
               document.getElementById(wF).value = +weightSecond - w;
               document.getElementById(wS).value = +weightSecond - w;
               document.getElementById(wT).value = +weightSecond - w;
   
               document.getElementById(rF).value = 6 + r;
               document.getElementById(rS).value = 6 + r;
               document.getElementById(rT).value = 6 + r;
   
               }
   

      }   
   }


}

function repsPyramid(w, wE, wF, wS, wT, rF, rS, rT){
   console.log('repsPyramid');
   
   let weightFirst = +document.getElementById(wF).value;
   let weightSecond = +document.getElementById(wS).value;
   let weightThird = +document.getElementById(wT).value;

   let repsFirst = +document.getElementById(rF).value;
   let repsSecond = +document.getElementById(rS).value;
   let repsThird = +document.getElementById(rT).value;
   function pyra(w){
      if (weightFirst === weightSecond && weightSecond === weightThird){
         if(repsFirst > 11 && repsSecond > 11 && repsThird > 11){
            document.getElementById(wF).value = +weightFirst + w;
            document.getElementById(wS).value = +weightSecond + w;
            document.getElementById(wT).value = +weightThird + w;
      
            document.getElementById(rF).value = 8;
            document.getElementById(rS).value = 8;
            document.getElementById(rT).value = 8;
         }
         else{
            if(repsFirst > 9 && repsSecond > 9 && repsThird > 9){
               console.log('reps > 9');
               document.getElementById(wF).value = +weightFirst;
               document.getElementById(wS).value = +weightSecond;
               document.getElementById(wT).value = +weightThird;
         
               document.getElementById(rF).value = 12;
               document.getElementById(rS).value = 12;
               document.getElementById(rT).value = 12;
   
            }
            else if(repsFirst > 7 && repsSecond > 7 && repsThird > 7){
               console.log('reps > 7');
               document.getElementById(wF).value = +weightFirst;
               document.getElementById(wS).value = +weightSecond;
               document.getElementById(wT).value = +weightThird;
         
               document.getElementById(rF).value = 10;
               document.getElementById(rS).value = 10;
               document.getElementById(rT).value = 10;
               
            }
            else if(repsFirst > 5 && repsSecond > 5 && repsThird > 5){
               console.log('reps > 5');
               document.getElementById(wF).value = +weightFirst;
               document.getElementById(wS).value = +weightSecond;
               document.getElementById(wT).value = +weightThird;
         
               document.getElementById(rF).value = 8;
               document.getElementById(rS).value = 8;
               document.getElementById(rT).value = 8;
            }else{
               console.log('reps < 5');
   
               document.getElementById(wF).value = +weightFirst - w;
               document.getElementById(wS).value = +weightSecond - w;
               document.getElementById(wT).value = +weightThird - w;
         
               document.getElementById(rF).value = 8;
               document.getElementById(rS).value = 8;
               document.getElementById(rT).value = 8;
   
            }
         }
      }else{
         if(weightSecond > weightThird){
               console.log("weightSecond > weightThird");
               document.getElementById(wF).value = +weightSecond;
               document.getElementById(wS).value = +weightSecond;
               document.getElementById(wT).value = +weightSecond;
         
               document.getElementById(rF).value = +repsFirst - 2;
               document.getElementById(rS).value = +repsSecond -2;
               document.getElementById(rT).value = +repsThird -2;
         }else{
            console.log("weightSecond < weightThird");
            document.getElementById(wF).value = +weightThird;
            document.getElementById(wS).value = +weightThird;
            document.getElementById(wT).value = +weightThird;
      
            document.getElementById(rF).value = +repsFirst - 2;
            document.getElementById(rS).value = +repsSecond -2;
            document.getElementById(rT).value = +repsThird -2;
         }
      }
   }
   if ((weightFirst == 0 || weightSecond == 0 || weightThird == 0) && (repsFirst == 0 || repsSecond == 0 || repsThird == 0)){
      console.log('not value');
      return;
   }
   else{
      if(weightFirst >= 10 && weightSecond >= 10 && weightFirst >= 10){
         console.log('weight > 9');
         pyra(w);
         if((weightFirst == 10 && weightSecond == 10 && weightFirst == 10) && (repsFirst < 6 || repsSecond < 6 || repsThird < 6)){
            console.log('reps < 6');
            pyra(wE);
         }
         
      }else{
         console.log('weight <= 9');
         pyra(wE);
      }
   }
   

}

let buttonBenchHammer = document.getElementById('buttonBenchHammer');
buttonBenchHammer.addEventListener('click', repsPyramid.bind(buttonBenchHammer, 2.5, 1, 'firstWeightBenchHammer','secondWeightBenchHammer',  'thirdWeightBenchHammer', 'firstRepsBenchHammer', 'secondRepsBenchHammer', 'thirdRepsBenchHammer'));

let buttonMahiGirls = document.getElementById('buttonMahiGirls');
buttonMahiGirls.addEventListener('click', repsPyramid.bind(buttonMahiGirls, 5, 5, 'firstWeightMahiGirls','secondWeightMahiGirls',  'thirdWeightMahiGirls', 'firstRepsMahiGirls', 'secondRepsMahiGirls', 'thirdRepsMahiGirls'));

let buttonLiftGirls = document.getElementById('buttonLiftGirls');
buttonLiftGirls.addEventListener('click', repsPyramid.bind(buttonLiftGirls, 5, 5, 'firstWeightLiftGirls','secondWeightLiftGirls',  'thirdWeightLiftGirls', 'firstRepsLiftGirls', 'secondRepsLiftGirls', 'thirdRepsLiftGirls'));

let buttonPressLegsGirls = document.getElementById('buttonPressLegsGirls');
buttonPressLegsGirls.addEventListener('click', weightPyramid.bind(buttonPressLegsGirls, 10, 6, 'firstWeightPressLegsGirls','secondWeightPressLegsGirls',  'thirdWeightPressLegsGirls', 'firstRepsPressLegsGirls', 'secondRepsPressLegsGirls', 'thirdRepsPressLegsGirls'));

let buttonLungesGirls = document.getElementById('buttonLungesGirls');
buttonLungesGirls.addEventListener('click', repsPyramid.bind(buttonLungesGirls, 2.5, 1, 'firstWeightLungesGirls','secondWeightLungesGirls',  'thirdWeightLungesGirls', 'firstRepsLungesGirls', 'secondRepsLungesGirls', 'thirdRepsLungesGirls'));

let buttonLiftLegsGirls = document.getElementById('buttonLiftLegsGirls');
buttonLiftLegsGirls.addEventListener('click', weightPyramid.bind(buttonLiftLegsGirls, 2.5, 6, 'firstWeightLiftLegsGirls','secondWeightLiftLegsGirls',  'thirdWeightLiftLegsGirls', 'firstRepsLiftLegsGirls', 'secondRepsLiftLegsGirls', 'thirdRepsLiftLegsGirls'));

let buttonInclined = document.getElementById('buttonInclined');
buttonInclined.addEventListener('click', weightPyramid.bind(buttonInclined, 2.5, 0, 'firstWeightInclined','secondWeightInclined',  'thirdWeightInclined', 'firstRepsInclined', 'secondRepsInclined', 'thirdRepsInclined'));

let buttonBars = document.getElementById('buttonBars');
buttonBars.addEventListener('click', weightPyramid.bind(buttonBars, 5, 2, 'firstWeightBars','secondWeightBars',  'thirdWeightBars', 'firstRepsBars', 'secondRepsBars', 'thirdRepsBars'));

let buttonMahi = document.getElementById('buttonMahi');
buttonMahi.addEventListener('click', repsPyramid.bind(buttonMahi, 2.5, 1, 'firstWeightMahi','secondWeightMahi',  'thirdWeightMahi', 'firstRepsMahi', 'secondRepsMahi', 'thirdRepsMahi'));

let buttonLift = document.getElementById('buttonLift');
buttonLift.addEventListener('click', repsPyramid.bind(buttonLift, 5, 5, 'firstWeightLift','secondWeightLift',  'thirdWeightLift', 'firstRepsLift', 'secondRepsLift', 'thirdRepsLift'));

let buttonPressLegs = document.getElementById('buttonPressLegs');
buttonPressLegs.addEventListener('click', weightPyramid.bind(buttonPressLegs, 10, 2, 'firstWeightPressLegs','secondWeightPressLegs',  'thirdWeightPressLegs', 'firstRepsPressLegs', 'secondRepsPressLegs', 'thirdRepsPressLegs'));

let buttonLiftLegs = document.getElementById('buttonLiftLegs');
buttonLiftLegs.addEventListener('click', weightPyramid.bind(buttonLiftLegs, 5, 2, 'firstWeightLiftLegs','secondWeightLiftLegs',  'thirdWeightLiftLegs', 'firstRepsLiftLegs', 'secondRepsLiftLegs', 'thirdRepsLiftLegs'));


