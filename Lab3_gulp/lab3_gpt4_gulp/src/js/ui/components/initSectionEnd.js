import { sectionEndData} from "../../mockData/sectionEndData.js";
import { sectionEndTemplate} from "../templates/sectionEndTemplate.js";

const initSectionEnd = (sectionEndNode) => {
    sectionEndNode.insertAdjacentHTML("beforeend", sectionEndTemplate(sectionEndData));
};

export default initSectionEnd;