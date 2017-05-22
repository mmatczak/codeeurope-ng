## Getting started

### Install prerequisites

#### Git
Check if you have a Git client already installed:

```
git --version
```

If your OS can not recognize this command, install Git. For details please refer to [this page](http://git-scm.com).
When installing under Windows, please make sure you check the following option:

* Use git from Windows command prompt

#### Node.js

It is highly recommended to install the [Node Version Manager](https://github.com/creationix/nvm) which manages multiple active
[Node.js](https://nodejs.org/) versions on your machine. The windows version of nvm can be downloaded [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.3/nvm-setup.zip).

Having the [Node Version Manager](https://github.com/creationix/nvm) installed, install Node.js `6.10.2`:

```
nvm install 6.10.2
```

and set it to be used:

```
nvm use 6.10.2
```

#### Yarn

Having the Node.js installed you have also its package manager - [npm](https://www.npmjs.com/) installed which can be used to install [Yarn](https://yarnpkg.com/):

```
npm install -g yarn
```

Please note that this is not the only possibility available. Please refer to the [Yarn Installation Instructions](https://yarnpkg.com/en/docs/install) for more details on other possibilities.

#### Angular CLI

Having [Yarn](https://yarnpkg.com/) installed you can install [Angular CLI](https://github.com/angular/angular-cli) like this:

```
yarn global add @angular/cli
```

### Clone, install dependencies and run

Clone this repository:
```
git clone https://github.com/mmatczak/codeeurope-ng.git
```


Install dependencies using [Yarn](https://yarnpkg.com/):
```
cd codeeurope-ng
yarn
```
This may take several minutes...


Start the application using [Angular CLI](https://github.com/angular/angular-cli):
```
ng serve -o
```

The application should open in your default browser displaying: `Welcome to Angular workshop at Code Europe!` 

### How did I generate this project?
```
mkdir ce-book-app
ng new ce-book-app --style=scss --skip-install --directory ce-book-app
cd ce-book-app
yarn
yarn add bootstrap@next @ng-bootstrap/ng-bootstrap
```



