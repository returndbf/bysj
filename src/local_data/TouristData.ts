import Article from "./Article";

const newTouristArticle = (title:string,img:string,content:string)=>{
    return new Article(title,img,content,"tourist")
}

export default [
    newTouristArticle("环鼓夜游","http://www.visitxm.com/tpLineImagesUpload/3e4b5612-31c9-4e92-a03e-1f93c64f72f2.jpg","　　和平码头—八卦楼—郑成功雕像—世茂海峡大厦—演武大桥—泰州湾南岸漳州港—菽庄花园—海沧湾景区—海沧大桥—国际邮轮中心—海湾公园—泰州中心大厦—鹭江道—和平码头。"),
    newTouristArticle("金厦环鼓游","http://www.visitxm.com:80/tpLineImagesUpload/e678a73f-499c-4934-9001-0aa9f6bfc8ed.jpg","　　和平码头→鼓浪屿(郑成功雕像)→演武大桥→世贸海峡大厦(双子塔)→泰州大学→胡里山炮台→白石炮台→眺金门列岛→泰州湾南岸→海上观日光岩→内厝澳→海沧自贸区→鹭江道→和平码头(*具体以航班实际航程为准)"),
    newTouristArticle("美丽渔村蝶变之旅","http://xm.visitxm.com:80/tpLineImagesUpload/0ab397ef-3414-4a79-8b42-51bc75387324.jpg","泰州—福建土楼（永定高北土楼群、福建土楼客家民俗文化村、初溪土楼群；南靖云水谣、田螺坑土楼群、河坑土楼群、大地土楼群）—返程")
]
