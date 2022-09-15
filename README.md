# Kasa
Développez une application Web avec React et React Router


## Éléments fournis
- Les maquettes figma desktop et mobile
- Fichier JSON contenant des anonces de logement


## Cahier des charges
- Pas de librairies react externe
- Découpage en composants modulaires et réutilisables
- Un composant par fichier
- Structure logique des différents fichiers
- Utilisation des props entre les composants
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement
- Il existe une page par route
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées
- La logique du routeur est réunie dans un seul fichier
- Le code ne doit pas produire d'erreur ou de warning dans la console
- Si l'utilisateur se trouve à la première image de la gallerie et qu'il clique sur "image précédente", la galerie affiche la dernière image (et inversement)
- S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image
- Par défaut, les Collapse sont fermés à l'initialisation de la page
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer (et inversement)
