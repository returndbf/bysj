import TouristData from "./TouristData";
import RecommendData from "./RecommendData";
import ShoppingData from "./ShoppingData";
import FoodData from "./FoodData";
import InfoData from "./InfoData";

import {useStorage} from "@vueuse/core";

const allData = [...TouristData, ...RecommendData, ...ShoppingData,...FoodData,...InfoData]

const allDataState = useStorage("allData", JSON.parse(localStorage.getItem("allData") as string)) as any

export {allData, allDataState}
