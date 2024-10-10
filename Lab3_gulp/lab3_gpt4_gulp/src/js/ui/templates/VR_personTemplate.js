export const createImageTemplate = ({src, alt}) => {
    const template = `
        <div class="image">
            <img
                class="person_section__img"
                src="${src}"
                alt="${alt}"
            />
        </div>
  `;
  
    return template;
  };


export const createTextContentPersonTemplate = ({
    header, 
    text, 
    button: {href, title}
}) => {
    const template = `
        <div class="text_content_person">
            <h4 href="${href}" class="right_cta">${title}</h4>
            <h2 class="person_content"> ${header}</h2>
            <p class="container__content">${text}</p>
            <a href="${href}" class="right_cta_a">${title}</a>
        </div>
    `;

    return template;
    };

  export const VR_personTemplate = ({imageData, text_content_personData}) => {
    const imageItemsTemplate = createImageTemplate(imageData)
    const textContentPersonItemTemplate = createTextContentPersonTemplate(text_content_personData)
    
    const resultTemplate = `  
        ${imageItemsTemplate}  
        ${textContentPersonItemTemplate}
    `;

    return resultTemplate
  }