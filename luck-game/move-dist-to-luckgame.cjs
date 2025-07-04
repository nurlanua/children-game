const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const source = path.join(__dirname, 'dist');
const target = path.join(__dirname, 'temp-deploy', 'luck-game');

// Clear the temp-deploy folder
fse.removeSync(path.join(__dirname, 'temp-deploy'));

// Copy dist to temp-deploy/luck-game
fse.copySync(source, target);

console.log('Moved dist/ into temp-deploy/luck-game/');
