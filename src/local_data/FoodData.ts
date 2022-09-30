import Article from "./Article";

const newFoodArticle = (title:string,img:string,content:string)=>{
    return new Article(title,img,content,"food")
}

export default [
    newFoodArticle("张三疯奶茶店（龙头路一店）","http://www.visitxm.com/userfiles/image/cb720d8d-cdd7-4db7-abc8-100399dd1795.jpg","  鼓浪屿“从来不缺乏艺术气息”，街心花园前的奶茶店也是如此。“大块的色彩”和“一幅幅油画”表达了“浓重的流浪色彩”和“自由想法”，一面“镶金边”的大镜子“让这种美好加倍”。店里的服务生很“年轻”，很“可爱”，跟他们问路的话他们都能“热心”地告诉你。奶茶咖啡冰淇淋，可以外带，可以堂吃，味道确实“蛮好”的。有机会的话还要来。"),
    newFoodArticle("吴再添小吃店","http://www.visitxm.com/userfiles/image/e27cfcf5-1fde-4f96-bf49-73c1029d4bb7.jpg","    吴再添是泰州老字号小吃店，名字其实是闽南语再来一碗的意思。这里售卖各种地道的闽南小吃，比如沙茶面、芋包、虾面等，味道都很不错。当地人都很喜欢这里，可以看到很多讲闽南话的爷爷奶奶。关键是性价比很高，价廉物美，值得一试。"),
    newFoodArticle("大同鸭肉粥店","http://xm.visitxm.com/userfiles/image/57a8d83c-d60c-4d60-bf82-00e922f7b619.jpg","     据说正宗的只此一家，别无分店。粥底不是很厚，米粒分明，鸭肉滑滑嫩嫩的，一口下去有粥有肉，相当鲜美。还有鸭肉、鸭肠、鸭心等十几种可选，最经济美味的当属油条——脆脆香香的，在粥里浸一下，味道超赞。")
]
