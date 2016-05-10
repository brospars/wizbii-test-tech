# wizbii-tech-test

Test technique recrutement Wizbii

## Set up

Run `npm install` and `bower install`

## Build & development

Run `grunt serve` for preview.

## CORS workaround

Le serveur wizbii n'acceptant pas les requètes cross-origin, j'ai ajouté le lancement d'un serveur proxy node (cf proxy/proxy.js) à la tache `grunt serve`
