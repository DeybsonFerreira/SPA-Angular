# FIRST
> To execute the project , first open the server with through json-server with command "json-server --watch .\databaseMock.json"

> npm install
> then execute "ng server"


# Sites
https://angular.io/
https://www.npmjs.com/


# Frameworks
https://material.angular.io/
https://www.npmjs.com/package/json-server
https://getbootstrap.com/
https://valor-software.com/ngx-bootstrap/#/
https://www.npmjs.com/package/npm-check-updates


Created by Google

# Notas
> 3 Formas de Binding no angular
- Two-way binding [(ngModel)] ="mão dupla"
- property-binding = {} = "componente > view"
- event-binding = {} = "view > componente"

# Siglas
- S.P.A > Single page application
- PWA > Progressive Web Apps
- Modelo tradicional > Server-side
- Angular não é uma linguagem > é um FRAMEWORK (Mobile/Desktop)



# Version
AngularJS e Angular (São totalmente diferente)

- 2010 | AngularJS 1.x by javascript strategy
- 2015 | Angular 2 "Just Angular" based on webComponents by typescript
- 2016 | Angular 4 (Grande mudança de 4 para 2)
- 2017 | Angular 5
- 2018 | Angular 6-7
- 2019 | Angular 8-9
- 2020 | Angular 10-11
- ( Versão nova a cada 6meses *espectativa )


# Version Semantic
Versionamento do angular
> 2 . 3 . 1
- 2 Major > breaking changes "Versão principal"
- 3 Minor > new feature not breaking
- 1 Patch Bugfixes, not breaking


# Requisitos
- Instalar ou atualizar NodeJs e NPM
- Instalar o Angular CLI

# Dicas
- communModule (é usado para modulo não principal)
- para não criar arquivo spec, no json.config basta encontrar o schematics/skipTests e usar como 'true'
- Declarations > components
- Imports > modulos
- Providers : servicos
- Através do json-server podemos simular uma api a partir de um JSON (json-server --watch myJson.json)
- Npm checkupdates (biblioteca npm, para verificar se alguma biblioteca esta diposnível em outra versão)
- angular ivy (novo copilador a partir da v8) (basta add no angular.json> aot:true)


# Comandos
- ng new --minimal AppProject (criação de minimo projeto)
- ng serve -c production  (configuration for production simulation)
- ng build -c production (generate configuration files for production)
- ng g c xxxx (ng generate component xxxx)
- npm install npm@latest -g
- json-server --watch "jsonjame" (simular uma api com base de json)