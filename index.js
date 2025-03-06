#! /usr/bin/env node

import { cleanDirectory } from './src/clean.js';
import { canProceed } from './src/utility.js';

if (canProceed(process.argv)) {
    let rootPath = process.cwd();
    cleanDirectory(rootPath);
}

//To-do: Add Ts support