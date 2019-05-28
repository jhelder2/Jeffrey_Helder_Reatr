(() => {

//link test

	console.log('js link sucessful');

//var

	let
		backCircle = document.getElementById("BackgoundCircle"),
		backHead =  document.getElementById("PurpHead"),
		frontHead =  document.getElementById("GreenHead"),

	//back face
		backHeadFace = document.getElementById("HeadPurp"),
		backHeadStreak =  document.getElementById("StreakPurp"),
		backHeadEyeL =  document.getElementById("EyeLeftPurp"),
		backHeadEyeR =  document.getElementById("EyeRightPurp"),
	//front face
		frontHeadFace = document.getElementById("HeadGreen"),
		frontHeadStreak =  document.getElementById("StreakGreen"),
		frontHeadEyeL =  document.getElementById("EyeLeftGreen"),
		frontHeadEyeR =  document.getElementById("EyeRightGreen"),

		circleButton = document.querySelector(".circle"),
		backButton = document.querySelector(".back"),
		frontButton = document.querySelector(".front"),

		circleColourButton = document.querySelector(".circleColour"),
		backColourButton = document.querySelector(".backColour"),
		frontColourButton = document.querySelector(".frontColour");

//functions 

	function logMyId() {
		console.log(this.id);
	}

	function removeCircle() {
		backCircle.classList.remove()
		backCircle.classList.toggle("selected")
	}

	function removeBack() {
		backHead.classList.remove()
		backHead.classList.toggle("selected")
	}	

	function removeFront() {
		frontHead.classList.remove()
		frontHead.classList.toggle("selected")
	}

	function circleColour() {
		backCircle.classList.remove()
		backCircle.classList.toggle("cls-7")
	}

	function backColour() {
		backHeadFace.classList.remove()
		backHeadFace.classList.toggle("cls-6")
		backHeadStreak.classList.remove()
		backHeadStreak.classList.toggle("cls-7")
		backHeadEyeL.classList.remove()
		backHeadEyeL.classList.toggle("cls-8")
		backHeadEyeR.classList.remove()
		backHeadEyeR.classList.toggle("cls-8")
	}

	function frontColour() {
		frontHeadFace.classList.remove()
		frontHeadFace.classList.toggle("invertDG")
		frontHeadStreak.classList.remove()
		frontHeadStreak.classList.toggle("invertLG")
		frontHeadEyeL.classList.remove()
		frontHeadEyeL.classList.toggle("invertEyes")
		frontHeadEyeR.classList.remove()
		frontHeadEyeR.classList.toggle("invertEyes")
	}
//events 

	circleButton.addEventListener("click", logMyId)
	circleButton.addEventListener("click", removeCircle)

	backButton.addEventListener("click", logMyId)
	backButton.addEventListener("click", removeBack)

	frontButton.addEventListener("click", logMyId)
	frontButton.addEventListener("click", removeFront)


	circleColourButton.addEventListener("click", logMyId)
	circleColourButton.addEventListener("click", circleColour)

	backColourButton.addEventListener("click", logMyId)
	backColourButton.addEventListener("click", backColour)

	frontColourButton.addEventListener("click", logMyId)
	frontColourButton.addEventListener("click", frontColour)



})();
