const canUserAccess = (to) => {
    switch (to.name) {
        case 'Dashboard':
            if (sessionStorage.authenticatedUser) {
                return true;
            }
            else {
                return false;
            }
    
        default:
            return true;
    }
}

export default canUserAccess;