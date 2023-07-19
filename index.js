#! /usr/bin/env node

import { cleanDirectory } from './src/clean.js';
import { getArgs } from './src/utility.js';

if(getArgs(process.argv)){
    let rootPath = process.cwd();
    cleanDirectory(rootPath);
}