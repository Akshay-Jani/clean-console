#! /usr/bin/env node

import { cleanDirectory } from './src/clean.js';
import { getArgs } from './src/utility.js';

if(getArgs(process.argv)){
    let rootPath = process.cwd();
    cleanDirectory(rootPath);
}

//To-do: Add Ts support
//To-do: Add support to remove 'debugger' statements as well