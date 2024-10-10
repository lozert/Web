export const createAllRightTemplate = ({text})=> {
    const template = `
    <div>${text} </div>
    `;
    return template;
};

export const allRightTemplate =({all_right_data}) => {
    const AllRightTemplate = createAllRightTemplate(all_right_data)
    const resulttemplate = `
        ${AllRightTemplate}
    `;  
    return resulttemplate;
}