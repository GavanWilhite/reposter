let inDev = false;

if (process && process.env.NODE_ENV === 'development') {
    inDev = true;
}

export {inDev};