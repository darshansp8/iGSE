# Project Overview
**iGSE(Great Shangri-La Energy)** is a publicly owned company providing affordable and sustainable enery supplies to Shangri-La. The purpose behind this was to allow the residents of **Shangri-La** to access a platform through which they can manage their energy needs. Functionalities of the web-app are as follows: 

- User Functionalities
	- Register / Login 
	- Submit Meter Reading
	- View & Pay Bill
	- Top Up with valid EVC Code
- Admin Functionalities
	- View all meter readings
	- Set Tariff Rates
	- Statistics


## Frameworks Used
For frontend **Angular** is used and for backend **Flask** is used.

### Pre-requisites
- Install [Node.js](https://nodejs.org/en/) which includes [Node Package Manager](https://docs.npmjs.com/getting-started)
- Install [Python](https://www.python.org/downloads/)
		
## Development Setup

### Angular
Install Angular CLI globally:
````
npm install -g @angular/cli
````
Move to project directory and run server:
`cd [PROJECT NAME]`
`ng serve`

###Flask
Install Flask inside project directory
`$ pip install flask`

Export Path Variable
`export $FLASK_PATH=api/`
`echo FLASK_PATH`

Install requirements
`$ pip install -r requirements.txt`

Move to project directory and run server
`cd [PROJECT NAME]`
`$ python main.py`

Flask Shell for DB
Incase tables are not created:
Set Path variable and then run the following command
`flask shell`
Inside shell `db.create_all()` to create the tables


# IGSEUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
