const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const sourceDir = path.join(__dirname, 'Main-v1', 'libs');
const targetDir = path.join(__dirname, 'Main-v1-prod', 'libs-prod');
  
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('error reading dir', err);
        return;
    }

    files.forEach(file => {
        const sourceFilePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, `${path.basename(file, path.extname(file))}.prod.js`);

        fs.readFile(sourceFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`read error ${file}`, err);
                return;
            }

            const obfuscationResult = JavaScriptObfuscator.obfuscate(data, {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 1,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 1,
                debugProtection: true,
                debugProtectionInterval: 4000,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: true,
                renameGlobals: false,
                selfDefending: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 5,
                stringArray: true,
                stringArrayCallsTransform: true,
                stringArrayEncoding: ['rc4'],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 5,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 5,
                stringArrayWrappersType: 'function',
                stringArrayThreshold: 1,
                transformObjectKeys: true,
                unicodeEscapeSequence: false
            });

            fs.writeFile(targetFilePath, obfuscationResult.getObfuscatedCode(), 'utf8', err => {
                if (err) {
                    console.error(`write error ${targetFilePath}`, err);
                } else {
                    console.log(`OBF ${file} to ${targetFilePath}`);
                }
            });
        });
    });
});