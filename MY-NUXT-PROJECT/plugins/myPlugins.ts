export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    /*console.log(nuxtApp);*/
    /*return {
        provide: {
            sayHello: (msg: string) => console.log(`Hello ${msg}`),
        }
    }*/

    nuxtApp.hook('app:created', () => {
        console.log('----------- [app:created] hello from plugin -----------');
    })
})