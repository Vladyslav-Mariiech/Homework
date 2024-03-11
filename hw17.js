class GameDeveloper {
    constructor(name, skill, exp) {
        this.name = name;
        this.skill = skill;
        this.exp = exp; 
    }
}

class Game {
    constructor(gameName, genre, releaseDate) {
        this.gameName = gameName;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }

    showInfo() {
        console.log(`Game: ${this.gameName}, Genre: ${this.genre}, Release Date: ${this.releaseDate}`); 
    }
}

class GameProject {
    constructor(name, game, developmentStage) {
        this.name = name;
        this.game = game;
        this.developers = []; 
        this.developmentStage = developmentStage;
    }

    addDev(developer) {
        this.developers.push(developer);
    }

    updateDevStage(stage) {
        this.developmentStage = stage;
    }

    showInfo() {
        console.log(`- Project: ${this.name}, Game: ${this.game.gameName}, Stage: ${this.developmentStage}`); 
        console.log('-- Dev_Team:');
        this.developers.forEach(dev => {
            console.log(`--- ${dev.name}, Skills: ${dev.skill}, Experience: ${dev.exp} years`); 
        });
    }
}

class GameCompany {
    constructor(name) {
        this.name = name;
        this.projects = []; 
    }

    addProject(project) {
        this.projects.push(project);
    }

    showProjectsInfo() {
        console.log(`Company: ${this.name}`);
        this.projects.forEach(project => {
            project.showInfo();
            
        });
    }
}

/* Primer ispolzovaniya

const developer1 = new GameDeveloper('John', 'Junior', 1);
const developer2 = new GameDeveloper('Lucy', 'Middle', 3);

const game = new Game('Spyro', 'Platform', 1998);

const project = new GameProject('ProjectX', game);

project.addDeveloper(developer1);
project.addDeveloper(developer2);
project.updateDevelopmentStage('Develope');

const company = new GameCompany('BestCompany');
company.addProject(project);

company.displayProjectsInfo();*/



// Create dev's
const dev1 = new GameDeveloper('John', 'Junior', 1);
const dev2 = new GameDeveloper('Lucy', 'Middle', 3);
const dev3 = new GameDeveloper('Mark', 'Senior', 7);

// Create game
const adventureGame = new Game('NameSoon1', 'Adventure', 2023);
const strategyGame = new Game('NameSoon2', 'Strategy', 2024);

// Create project
const adventureProject = new GameProject('Untitled1', adventureGame);
const strategyProject = new GameProject('Untitled2', strategyGame);

// Add Dev's to projects
adventureProject.addDev(dev1);
adventureProject.addDev(dev3); 

strategyProject.addDev(dev2);
strategyProject.addDev(dev1); 

// Update develope stage
adventureProject.updateDevStage('Beta');
strategyProject.updateDevStage('EarlyAccess');

// Create company and add projects
const gameCompany = new GameCompany('BestCompany');
gameCompany.addProject(adventureProject);
gameCompany.addProject(strategyProject);

// Info about company and projects
gameCompany.showProjectsInfo();
