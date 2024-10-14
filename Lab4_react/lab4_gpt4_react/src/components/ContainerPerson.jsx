import { VR_personData } from "../mockData/VR_personData";

export const Image = ({imageData:{src, alt}}) => {
    return(
    <div className = "image">
        <img
            className = "person_section__img"
            src={src}
            alt={alt}
        />
    </div>
    )
  };


export const TextContentPerson = ({
    text_content_personData:{header, 
    text, 
    button: {href, title}}
}) => {
    return(
        <div class="text_content_person">
            <h4 href={href} className="right_cta">{title}</h4>
            <h2 className="person_content"> {header}</h2>
            <p className="container__content">{text}</p>
            <a href={href} className="right_cta_a">{title}</a>
        </div>)
    };

const ContainerPerson = () => {
    const { text_content_personData, imageData} = VR_personData

    return(
    <>
        <Image imageData={imageData} />
        <TextContentPerson text_content_personData={text_content_personData} />
    </>
    )
    
  }

export default ContainerPerson;