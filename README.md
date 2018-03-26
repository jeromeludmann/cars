# README

## Installation

Installer les dépendances :
```
cd cars/
npm install
```

## Développement

Démarrer le build automatique :
```
npm run watch
```
Cette commande surveille chaque changement de code et recompile les parties nécessaires automatiquement.

Lors d'un `npm run watch`, deux sous commandes s'exécutent en parallèle :
- le watch  du front `watch:client`
- le watch du back `watch:server`

Si besoin, il est possible de lancer les builds séparément avec `npm run watch:client` et `npm run watch:server`.

## Production

La commande suivante génère le bundle de production :
```
npm run build
```
