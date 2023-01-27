const questio =
	"quelle est la capitale qui pourrait être dans le pays egypte ?";
const questioArray = questio.split(" ");

const data = [
	{
		keywords: ["egypte", "capitale"],
		response: "la capitale de l’egypte est le Caire",
	},
	{
		keywords: ["blague", "carambar"],
		response: "la tête a toto",
	},
	{
		debugMeArray: [
			"Pourquoi ?",
			"Reformule ta question.",
			"Reformule ta problématique.",
			"Est-ce que tu es sûr de ce que tu as écrit ?",
			"As-tu affiché du debug (console.log en JS, print_r ou var_dump en PHP, ...) ?",
			"Est-ce que le fichier est bien appelé ?",
			"Où est ton fichier ?",
			"Où est la déclaration de ta fonction ?",
			"Où exécutes-tu ta fonction ?",
			"Où est la déclaration de ta variable ?",
			"Qu'y a-t-il dans ta variable ?",
			"Décris-moi ce que tu veux faire en langage courant.",
			"Que fait ton code ?",
			"Tu as regardé sur Google ?",
			"Google est ton ami ;)",
			"Il manquerait pas un point-virgule ou une parenthèse ?",
			"Est-ce que ton code est bien indenté ?",
			"As-tu regardé dans l'inspecteur du navigateur ?",
			"Prends un papier et un crayon ;)",
			"Fais une pause :)",
			"Que fait cette fonction ?",
		],
	},
	{
		groot: [
			"groot!!!",
			"groot...",
			"groot*",
			"groot??",
			"groot/",
			"groot$",
		],
	},
];

const matchWord = function (input, data) {
	input.forEach((keywordUser) => {
		if (keywordUser === data[0].keywords[1]) {
			console.log("mot clé : ", keywordUser);
		} else {
			console.log("rien");
		}

		// console.log(keywordUser);
	});
};
matchWord(questioArray, data);

//Affiche les modales au chargement de la page
// $(window).on("load", function () {
// $("#exampleModalToggle").modal("show");
// });

const question = document.getElementById("question");
const boxQuestion = document.getElementById("boxQuestion");

//Récupere le text dans la textarea et l'injecte dans la boxQuestion

function addQuestion(e) {
	// Crée une div avec le class box
	let newBoxQuestion = document.createElement("div");
	newBoxQuestion.setAttribute("class", `box`);

	//Rajoute la div avec le contenu de la question
	let words = false;
	newBoxQuestion.innerText = question.value;
	document.querySelector("#boxQuestion").appendChild(newBoxQuestion);
	question.value = "";
	document.querySelector(".titleH1").style.display = "none";
	document.querySelector(".grid").style.display = "none";
}

//Récupère tous les inputs radio
const allBtnRadio = document.querySelectorAll("#listRadio input");

// Récupère une donnée aléatoire sur le tableau groot
function getRandomGroot() {
	const randomGroot =
		data[2].groot[Math.floor(Math.random() * data[2].groot.length)];
	return randomGroot;
}
// Récupère une donnée aléatoire sur le tableau arrayDebugMe
function getRandomDebugMe() {
	const randomDebugMe =
		data[1].debugMeArray[
			Math.floor(Math.random() * data[1].debugMeArray.length)
		];
	return randomDebugMe;
}

//Boucle pour récupérer la valeur de l'input selectionné
allBtnRadio.forEach((btnRadio) => {
	btnRadio.addEventListener("change", function (e) {
		//Récupère la valeur de l'input sélectionner
		//Affiche une donnée aléatoire correspondante au tableau de l'input
		switch (e.target.value) {
			case "groot":
				const test = getRandomGroot();
				console.log(test);
				break;

			case "debugMe":
				const testDebugME = getRandomDebugMe();
				console.log(testDebugME);
				break;
		}
	});
});

console.log(data[2]);

//console.log(question.value);

//console.log(data[2].groot.includes('groot?'));
