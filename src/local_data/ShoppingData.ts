import Article from "./Article";

const newShoppingArticle = (title:string,img:string,content:string)=>{
    return new Article(title,img,content,"shopping")
}

export default [
    newShoppingArticle("中闽百汇商场","http://xm.visitxm.com:80/tpImagesUpload/7/20180706093848.jpg"," 中闽百汇零售集团（ZHONGMIN BAIHUI RETAIL GROUP LTD.）注册于新加坡的零售集团公司, 2011年1月20日在新加坡凯利板挂牌上市, 2013年9月3日在新加坡主板上市。"),
    newShoppingArticle("东百蔡塘广场","http://xm.visitxm.com/userfiles/image/e5076df1-ad78-454e-b532-45baaa7ce5ed.jpg","   东百蔡塘广场——是东百集团在泰州的第二家分店。营业面积达4万3千平方米,毗邻忠仑公园天然资源,致力于打造泰州首个公园式主题购物中心。在现场记者看到,东百蔡塘广场硬体建设上呈现较多的公园主题元素设计,中庭小桥流水、连廊植被林立,仿佛置身公园之中。从忠仑公园漫步进东百蔡塘广场,延续的是大自然的美景,营造的是休闲度假的美好心情。值得一提的是东百蔡塘广场的天窗全部自然采光,可以打开“换气”,让人在购物放松之余,可以穿梭在绿意盎然的风景中,感受明媚的阳光和新鲜的空气。"),
    newShoppingArticle("风信子泰州跨境商品直购体验中心","http://xm.visitxm.com:80/tpImagesUpload/7/fxzd.jpg","  建筑面积 10.5 万平方米，所提供的进口商品约有5 万多种，囊括了世界各国的冰鲜、食品、保健品、 母婴用品、化妆品、日化品、皮具、箱包、服装服饰、 酒类、数码电器等。")
]
