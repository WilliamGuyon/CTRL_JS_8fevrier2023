window.onload= init();

function init()
{
	p=0; // position dans le tableau des 4 images
	score=0;
	symboles = ['ananas.png','pomme.png','tomate.png','pasteque.png']
	nbClic=0;
	
	// insertion de la table dans le HTML
	var position=document.getElementsByTagName("table");
	position.item(0).innerHTML=creerTabAff(5,5);
	
	//effacement de la case symbole
	document.getElementById("symbole").style.backgroundColor="white";
	
	// initialisation de tabYX
	tabYX = new Array();
	oTR = document.getElementsByTagName('tr');
	for(var i=0;i<5;i++){tabYX[i]=oTR[i].getElementsByTagName('td');}
	
	// initialisation d'un tableau de 5x5 destiné à recevoir les symboles'
	tabSymbolesVide= new Array();
	for(var i=0;i<5;i++){tabSymbolesVide[i]=new Array(5);}
		
	
/**************************************************************/	
		
//Q1 - à compléter ci-dessous
		// on cache le gameOver

/* votre code ici */


//Q2 - à compléter ci-dessous
		// on affiche le score 

/* votre code ici */

	
// Décommenter l'alert pour test de Q3
//	alert(p);
		
	initSymbole(symboles); //  cette fonction est a commenter à la question 7
		
	tabSymboles =creerTabSymb(tabSymbolesVide,symboles)	
		
	affichage(tabYX,tabSymboles);	

} // fin de la fonction init()

//Q3 compléter la fonction alea()
		// on génére un nombre aléatoire compris entre 0 et 3
function alea()
{
	var numAlea;
	
/* votre code ici */

	return numAlea;
}
		
//Q4 completer la fonction initSymbole()
				// on place aleatoirement un fruit dans le cadre des symboles
function initSymbole(S)
{
	
/* votre code ici */

}
		
// Q5 completer la fonction creerTabSymb(T,S)
				// on stoke la position des symboles
function creerTabSymb(T,S)
{
	// T est initialement vide
	
	/* votre code ici */

	// T contient maintenant des symboles aléatoirement répartis
return T;  
	
}
	
// Q6 completer la fonction affichage(tabHTML,tabSymb)
				// on affiche les symboles sur le plateau
function affichage(tabHTML,tabSymb)
{	
				
			/* votre code ici */	

}
		
//Q7 completer la fonction play()
			// on efface les fruits sur le plateau et on affiche le fruit a rechercher
function play()
{

	/* votre code ici */
	
}
		
// Q8 Completer la fonction next()
			// on mofifie le symbole affiché
function next()
{	

	/* votre code ici */

}

//Q9-1 -- Bonus 1 -- Completer la fonction verif(pos) 
		// affiche le symbole s'il correspond ou une croix sinon
		// comptabilise les click
		// appelle game over aprés le 25ème click

function verif(pos)  //
{	
		

	/* votre code ici */
	
}

		
//Q9-2 --Bonus 2 -- completer la fonction gameOver()
			// On fait apparaitre l'image gameOver
			// on rend le bouton suivant inactif --> code donné
function gameOver() // bonus 2
{
	
	/* votre code ici */
	
	document.getElementById("next").setAttribute("disabled", "disabled");	
}

function mix()
{
	// non traité
}
		


function creerTabAff(l,c) // fonction généreusement donnée pour créer le tableau de jeu
{
	var stringTab="";
	for(var i=0;i<l;i++)
	{
		stringTab+="<tr>";
		for(var j=0;j<c;j++)
		{
			stringTab+='<td id="'+i.toString()+j.toString()+'" onclick="verif(this.id)"></td>';
		}
		stringTab+="</tr>";
	}	
	return stringTab;
}