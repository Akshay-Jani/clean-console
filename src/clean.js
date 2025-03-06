import * as fs from 'fs';

function cleanFile(fileName) {
    if (fileName) {
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                console.error(err);
            }
            else {
                let newStr = data.split('\n').filter(function (str) {
                    let canBeRemoved = str.includes('console.') || str.includes('debugger');
                    return !canBeRemoved;
                }).join('\n');

                fs.writeFile(fileName, newStr, function (err) {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        });
    }
    else {
        console.log('File not found');
    }
}

function cleanDirectory(directoryPath) {
    fs.readdir(directoryPath, function (err, fileNames) {
        if (err) {
            console.error(err);
        }

        fileNames.forEach(function (fileName) {
            const name = `${directoryPath}/${fileName}`;
            if (fs.statSync(name).isDirectory() && !name.includes('node')) {
                console.log(`Going inside: ${name}, buckle up...`);
                cleanDirectory(name);
            }
            else if (name.includes('.js')) {
                console.log(`Cleaning file: ${name}, hasta la vista...`);
                cleanFile(name);
            }
        });
    });
}

export {
    cleanDirectory
}