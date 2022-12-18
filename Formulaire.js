const submit = document.getElementById('submit')

const nom = document.getElementById('nom')
const cnib = document.getElementById('cnib')
const mail = document.getElementById('email')

const cancel = document.getElementById('cancel')

submit.addEventListener('click', (event)=> {
	let checked = 0

	event.preventDefault()

	const cnibc = cnib.value
	
	if(cnibc== ""){
		document.getElementById('aa').innerText = 'Le numéro de la CNIB ne doit pas être vide !'
		document.getElementById('aa').hidden = false
		document.getElementById('aa').setAttribute('class', 'aa')
	}

	else if (!cnibc.match(/^([B])[0-9]{1,7}$/)  || (cnibc.length != 8)) {
		document.getElementById('aa').innerText = "Le numero de la CNIB  doit commencer par B suivi de 07 chiffres";
		document.getElementById('aa').hidden = false
		document.getElementById('aa').setAttribute('class', 'aa')
	}

	else{
		checked++
	}

	const email = mail.value

	if(email == ""){
		document.getElementById('c').innerText = 'Le e-mail  ne doit pas être vide !'
		document.getElementById('c').hidden = false
		document.getElementById('c').setAttribute('class', 'c')
	}

	else if (!email.match( /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)) {
		document.getElementById('c').innerText = "Le e-mail est invalide . Il faut un @ et . "
		document.getElementById('c').hidden = false
		document.getElementById('c').setAttribute('class', 'c')
	}

	else{
		checked++
	}
	

	const nom_prenom = nom.value
	

	if(nom_prenom === ""){
		document.getElementById('b').innerText = 'Le nom ne doit pas être vide !'
		document.getElementById('b').hidden = false
		document.getElementById('b').setAttribute('class', 'b')
	}


	else if ((!nom_prenom.match(/^[A-Z]{2,}.[A-Z][a-z]{2,}$/))) {
		document.getElementById('b').innerText = " Le nom  en majuscule et le prénom commençant par une majuscule puis minuscules";
		document.getElementById('b').hidden = false
		document.getElementById('b').setAttribute('class', 'b')
	

	}

	
	

	else{
		checked++
	}

	const res = document.getElementById('res')
	if(checked===3){
		console.log(checked)
		res.innerText = 'inscription achevée '
		res.hidden = false
		res.setAttribute('class', 'success')
	}
	else{
		res.innerText = 'error veuillez vérifier vos saisies !'
		res.hidden = false
		res.setAttribute('class', 'error')
	}

})

	cancel.addEventListener('click', (event)=> {
		event.preventDefault()
		nom.value = ''
		cnib.value = ''
		mail.value = ''
	})
	