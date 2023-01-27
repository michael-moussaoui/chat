const questio =
	"quelle est la capitale qui pourrait être dans le pays egypte ?";
const questioArray = questio.split(" ");

var data = [
	{
		keywords: ["egypte", "capitale"],
		response: "la capitale de l’egypte est le Caire",
	},
	{
		keywords: ["blague", "carambar"],
		response: "Combien font 0 + 0 ? la tête a toto",
	},
	{
		keywords: ["beau", "fort", "inteligent"],
		response: "ali",
	},
	{
		keywords: ["homme", "rapide", "monde"],
		response: "Usan Bolt",
	},
	{
		keywords: ["style", "musique", "quel"],
		response: "j'écoute de la musique latine",
	},
	{
		keywords: ["plat", "préféré", "repas"],
		response: "J'adore les lasagnes",
	},
	{
		keywords: [],
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
		keywords: [],
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

const matchWords = () => {
	questioArray.forEach((word) => {
		search(word);
	});
};

function search(word) {
	data.forEach((row, index) => {
		for (let i = 0; i < row.keywords.length; i++) {
			if (row.keywords[i] === word) {
				console.log("voici la réponse:", row.response);
			} else {
				console.log("NOT MATCH");
			}
		}
	});
}
matchWords();

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

	newBoxQuestion.innerText = question.value;

	//ici j'utilise la variable userQuestion, je stock toutes les question user dans une variable.
	// const userQuestion = question.value;
	// userQuestion.forEach((question)=>{
	// 	if (verifQuestion =userQuestion.includes(data[0]) && userQuestion.includes("capitale");) {

	// 	}
	// })

	// console.log(verifQuestion);

	//console.log(question.value.includes("capitale" & "egypte"));

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
			case "default":
				// const test = getRandomGroot();
				ToastDefault.showToast();
				break;

			case "groot":
				// const test = getRandomGroot();
				ToastGroot.showToast();

				break;

			case "debugMe":
				ToastDebug.showToast();
				// const testDebugME = getRandomDebugMe();
				break;

			default:
				console.log("rien");
		}
	});
});
let ToastGroot = Toastify({
	text: "je s'appelle Groot",
	duration: 2000,
	style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
});
let ToastDebug = Toastify({
	text: "Mode DebugMe",
	duration: 2000,
	style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
});

let ToastDefault = Toastify({
	text: "Mode normal",
	duration: 2000,
	style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
});
