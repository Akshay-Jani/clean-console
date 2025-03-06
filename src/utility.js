function canProceed(args) {
    let flag = false;
    if (args && args.includes('make-them-go')) {
        flag = true;
    }
    else {
        flag = false;
    }
    return flag;
}

export {
    canProceed
}