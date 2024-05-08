/* api 폴더 안에 만들면 경로는 'api/hello' */
/* route명은 항상 목적에 따라 세분화 필요. ex) board.get.ts, board.post.ts, board.delete.ts */
export default defineEventHandler((event) => {
    //console.log(event);
    return {
        hello: 'world'
    }
})
