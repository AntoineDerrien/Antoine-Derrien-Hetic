// affichage des données de la page Instagram Pokemon via Javascript. 
// 1ère instruction de chaque bloc : création d'une variable définissant la donnée à afficher
// 2ème instruction de chaque bloc : création d'une variable retournant l'élément HTML à afficher en Javascript
// 3ème bloc : affectation de la donnée Java 

// affichage image logo Instagram
const instagramImage = "./src/img/logo_menu.png";
const instagram = document.querySelector(".logo")
instagram.src = instagramImage

// afichage d'image Pokemon dans le compte Instagram 
const logoSacha = "./src/img/profil_picture.jpg";
const sacha = document.querySelector(".profil-picture")
sacha.src = logoSacha

// affichage texte pokemon 
const titleTexte = "pokemon";
const title = document.querySelector(".name")
title.textContent = titleTexte

// affichage du texte 9 pour le nombre de posts
const nbpostTexte = "9";
const nbpost = document.getElementById("nombrepost")
nbpost.textContent = nbpostTexte

// affichage du texte post 
const postTexte = "post";
const post = document.getElementById("post")
post.textContent = postTexte

// affichage du texte 77 pour le nombre de followers
const nbfollowersTexte = "77";
const nbfollowers = document.getElementById("nbfollowers")
nbfollowers.textContent = nbfollowersTexte

// affichage du texte followers
const followersTexte = "followers";
const followers = document.getElementById("followers")
followers.textContent = followersTexte

// affichage du texte 83 pour le nombre de follow 
const nombrefollowTexte = "83";
const nombrefollow = document.getElementById("nombrefollow")
nombrefollow.textContent = nombrefollowTexte

// affichage du texte follow
const followTexte = "follow";
const follow = document.getElementById("follow")
follow.textContent = followTexte

//  affichage du texte @pokemon_company
const lienPokemonTexte = "@pokemon_company";
const pokemon = document.querySelector(".id")
pokemon.textContent = lienPokemonTexte

//  affichage du texte Official Instagram for The Pokémon Company International
const descriptionTexte = "Official Instagram for The Pokémon Company International";
const description = document.querySelector(".description")
description.textContent = descriptionTexte

// affichage du séparateur posts 
const postseparateur = "posts";
const postsp = document.querySelector(".post-title")
postsp.textContent = postseparateur

// boucle foEach permettant d'afficher tous les posts de la page 
const imagePost = ["./src/img/pokemon-picture-1.jpg", "./src/img/pokemon-picture-2.jpg", "./src/img/pokemon-picture-3.jpg", "./src/img/pokemon-picture-4.jpg", "./src/img/pokemon-picture-5.jpg", "./src/img/pokemon-picture-6.jpg", "./src/img/pokemon-picture-7.jpg", "./src/img/pokemon-picture-8.jpg", "./src/img/pokemon-picture-9.jpg"]
const image = document.querySelectorAll(".galerie img")
imagePost.forEach((elm, i) => { image[i].src = elm })










