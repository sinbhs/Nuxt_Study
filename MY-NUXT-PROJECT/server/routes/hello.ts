/* routes 폴더 안에 만들면 경로는 '/hello' */
export default defineEventHandler(() => {
    return {
        api: 'hello from route folder'
    }
})
