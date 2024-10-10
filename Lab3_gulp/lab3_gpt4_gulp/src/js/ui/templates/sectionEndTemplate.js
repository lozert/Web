export const createUpContentTemplate = ({text, button:{href, title}}) => {
    const template = `
    <div class = "upContent">
        <h1 class = "textContent">${text}</h1>
            <div class = "qtextBox">
                <a href="${href}"><button class="textBox">${title}</button></a>
            </div>
    </div>
    `;
    return template;
};

export const createAdressTemplate = ({image:{src, alt}, adress}) => {
    const template = `
        <img class="logoImg" src="${src}" alt = "${alt}" />
            <p class = "mainAdress">${adress}</p>
    `;
    return template
};

export const createDiffReferenceTemplate = ({
    text,
    button1:{href1, title1},
    button2:{href2, title2},
    button3:{href3, title3},
    button4:{href4, title4}
})=>{
    const template = `
    <p class="headerEndPageRef">${text}</p>
            <a href="${href1}" class="endButton">${title1}</a>
            <a href="${href2}" class="endButton">${title2}</a>
            <a href="${href3}" class="endButton">${title3}</a>
            <a href="${href4}" class="endButton">${title4}</a>
    `;
    return template
};
export const createCompanyTemplate = ({
    text,
    button1:{href1, title1},
    button2:{href2, title2},
    button3:{href3, title3}
})=>{
    const template = `
    <p class="headerEndPageRef">${text}</p>
            <a href="${href1}" class="endButton">${title1}</a>
            <a href="${href2}" class="endButton">${title2}</a>
            <a href="${href3}" class="endButton">${title3}</a>
    `;
    return template
};
export const createContactTemplate = ({
    text,
    adress,
    number,
    button:{href, title}
})=>{
    const template = `
    <p class="headerEndPageRef">${text} </p>
            <p class="adressContact">${adress}</p>
            <p class="number">${number}</p>
            <a href="${href}" class="endButton">${title}</a>
    `;
    return template
};

export const sectionEndTemplate = ({up_content_data, adress_data,diff_reference_data, company_data,contact_data}) => {
    const UpContentTemplate = createUpContentTemplate(up_content_data)
    const AdressTemplate = createAdressTemplate(adress_data)
    const DiffReferenceTemplate = createDiffReferenceTemplate(diff_reference_data)
    const CompanyTemplate = createCompanyTemplate(company_data)
    const ContactTemplate = createContactTemplate(contact_data)
    const resultTemplate =`
    <div class = "upContent">
        ${UpContentTemplate}
    </div>
    <div class = "lowContent">
        <div class = "adress">
        ${AdressTemplate}
        </div>
        <div class = "diffReference">
        ${DiffReferenceTemplate}
        </div>
        <div class = "company">
        ${CompanyTemplate}
        </div>
        <div class = "contact">
        ${ContactTemplate}
        </div>
    </div>
    `;
    return resultTemplate
}

