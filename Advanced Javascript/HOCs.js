const withLogging = callbackFunction => (data) => {
    console.log(new Date()); // This is the actual Logging
    callbackFunction(data);
}

const withSecurity = cb => (isSecure) => {
    if (isSecure){
        cb();
    }
    else{
        console.log('error');
    }
}

// ----- Previous ----- //
const OLD_addToLog = (data) => {
    console.log(data);
}


const addUser = (user) => {
    console.log(user);
}

withLogging(addUser)(user);

const addAdmin = (admin) => {
    addToLog(addUser)(user)
}

export const realAddAdmin = admin =>  withSecurity(withLogging(addAdmin))(admin);

withLogging(addAdmin)(admin);

const addProduct = (addProduct) => {
    addToLog(addProduct);
}

withLogging(addProduct)(product);