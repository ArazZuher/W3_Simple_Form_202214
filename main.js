
// select your button
const submitBtn = document.getElementById('button')

// select all things take your info
const studentName =document.getElementById('student-name')
const studentAge =document.getElementById('student-age')
const studentGender =document.getElementById('student-gender')
const isStudent =document.getElementById('is-student')
const studentCity =document.getElementById('student-city')


// select other things give you info 
let genders = document.querySelectorAll('.gender')


function showInfo(e){
	e.preventDefault()// don't take things by default i take all things

	// select all things give you info 
	const fName = document.getElementById('f-name').value
	const sName = document.getElementById('s-name').value
	const age = document.getElementById('age').value
	const city = document.getElementById('city').value
	const student = document.getElementById('student').value

	let gender=""
	for(let i=0;i<genders.length ; i++){
		if(genders[i].checked){
			gender = genders[i].value
			break;
		}
	}

	// convert value taked info 
	studentName.innerText = `${fName} ${sName}`// this is single cotetion with ```` not this '''''
	studentAge.innerText= age 
	studentGender.innerText = `${gender}` 

	if(student.checked){
		isStudent.innerText = `Yes`
	}
	else{
		console.log('i runed'+student.checked)
		isStudent.innerText = `No`
	}

	studentCity.innerText=city
}

// by default there argument actived 
submitBtn.addEventListener('click',showInfo)


