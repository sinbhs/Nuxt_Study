export default defineNuxtRouteMiddleware((to, from) => {
    console.log('from:',from);
    console.log('to:', to);

    const isLoggedIn = false;

    // to is the destination
    if(isLoggedIn) {
        // redirect to the page we want to go
        return navigateTo(to.fullPath);
    }

    /*return navigateTo("/login");*/
    //redirect to a login page

    console.log('----------- hello from middleware -----------');
})