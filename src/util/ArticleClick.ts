import router from '../router/index'
export default (id:string) :void=>{
    router.push({ path: `/ArticleDetail/${id}`})

}
