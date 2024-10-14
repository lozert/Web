import { sectionEndData } from "../mockData/sectionEndData";

export const UpContent = ({up_content_data:{text, button:{href, title}}}) => {
    return(
        <div className = "upContent">
            <h1 className = "textContent">{text}</h1>
                <div className = "qtextBox">
                    <a href={href}><button className="textBox">{title}</button></a>
                </div>
        </div>
    )
};

export const Adress = ({adress_data:{image:{src, alt}, adress}}) => {
    return(
        <>
            <img className="logoImg" src={src} alt = {alt} />
            <p className = "mainAdress">{adress}</p>
        </>
    )
};

export const DiffReference = ({
    diff_reference_data:{text,
    button1:{href1, title1},
    button2:{href2, title2},
    button3:{href3, title3},
    button4:{href4, title4}
}})=>{
    return(
    <>
        <p className="headerEndPageRef">{text}</p>
        <a href={href1} className="endButton">{title1}</a>
        <a href={href2} className="endButton">{title2}</a>
        <a href={href3} className="endButton">{title3}</a>
        <a href={href4} className="endButton">{title4}</a>
    </>
    )
};
export const Company = ({
    company_data:{text,
    button1:{href1, title1},
    button2:{href2, title2},
    button3:{href3, title3}
}})=>{
    return(
        <>
            <p className="headerEndPageRef">{text}</p>
            <a href={href1} className="endButton">{title1}</a>
            <a href={href2} className="endButton">{title2}</a>
            <a href={href3} className="endButton">{title3}</a>
        </>
    )
}

export const Contact = ({
    contact_data: 
    {text,
    adress,
    number,
    button:{href, title}
}})=>{
    return(
        <>
            <p className="headerEndPageRef">{text} </p>
            <p className="adressContact">{adress}</p>
            <p className="number">{number}</p>
            <a href={href} className="endButton">{title}</a>
        </>
    )
};

const SectionEnd = ( ) => {
    
    const {up_content_data, adress_data,diff_reference_data, company_data,contact_data} = sectionEndData

    return (
    <>
        <div className = "upContent">
            <UpContent up_content_data={up_content_data}/>
        </div>
        <div className = "lowContent">
            <div className = "adress">
            <Adress adress_data={adress_data}/>
            </div>
            <div className = "diffReference">
            <DiffReference diff_reference_data={diff_reference_data}/>
            </div>
            <div className = "company">
            <Company company_data={company_data}/>
            </div>
            <div className = "contact">
            <Contact contact_data={contact_data}/>
            </div>
        </div>
    </>
    )
}

export default SectionEnd;

