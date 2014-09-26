# HEALTH.COM.AU v3 - Angular style

Woohoo! The new health site is on its way. Please read the following before you start developing!

## Installation
After cloning, make sure you run `$ npm install && bower install`.

`$ npm install` will install all dependancies. 
The most important to note are:
* Grunt
* Bower
* Yo

## Grunt

Grunt has 2 primary tasks: `serve` and `build`.

`serve` creates a development server @ `127.0.0.1:9000` where you can preview everything, live reload as you work.

`build` builds a production ready package. You shouldn't have to worry about this one though.

`test` for running e2e tests.

## Bower

Bower is super cool - this is used for additional components, i.e. angular plugins. 

Please use the `--save` operator when using bower install, so we all get the sexy packages.

`$ bower install bower-component --save`

## Yo

This project uses the Yeoman generator to scaffold angular files. **PLEASE USE YEOMAN WHEN CREATING NEW FILES**. Although it may seem easy to create new files, we would like to keep a strict structure, as well as create all the necessary test docs (that we need to write later.......).

use it like so: 

`$ yo angular:controller MyController`
`$ yo angular:view my-view`
`$ yo angular:directive my-directive`
`$ yo angular:service MyService`
`$ yo angular:factory MyService`

More here: [More on $ yo angular here](https://github.com/yeoman/generator-angular)

# Contributing

Please push your own branch, and submit a pull request. I'll code review & merge it all in!