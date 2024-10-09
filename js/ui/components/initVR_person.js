import { VR_personData } from "../../mockData/VR_personData.js";
import { VR_personTemplate} from "../templates/VR_personTemplate.js";

const initVR_person = (VR_personNode) => {
    VR_personNode.insertAdjacentHTML("beforeend", VR_personTemplate(VR_personData));
};

export default initVR_person;