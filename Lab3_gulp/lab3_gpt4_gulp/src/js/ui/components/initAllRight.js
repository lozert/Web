import {allRightTemplate} from "../templates/allRightTemplate.js";
import {allRightData} from "../../mockData/allRightData.js";

const initAllRight = (allRightNode) => {
    allRightNode.insertAdjacentHTML("beforeend", allRightTemplate(allRightData));
};

export default initAllRight;