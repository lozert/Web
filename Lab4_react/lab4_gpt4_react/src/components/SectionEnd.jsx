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

export const Button = ({ DiffRef: { type, title} } ) => {
    switch (type) {
      case "text":
       return <p class="headerEndPageRef">{title}</p>;
  
      case "button":
        return (
            <a href="" class="endButton">{title}</a>
        );
  
      default:
        return null;
    }
  };
  export const Button1 = ({ Comp: { type, title} } ) => {
    switch (type) {
      case "text":
       return <p class="headerEndPageRef">{title}</p>;
  
      case "button":
        return (
            <a href="" class="endButton">{title}</a>
        );
  
      default:
        return null;
    }
  };

export const DiffReference = ({DiffRef})=>{
    return(
        <div className="diffReference">
        {DiffRef.map((DiffRef, index) => (
          <Button key={index} DiffRef={DiffRef} />
        ))}
      </div>
    )
};
export const Company = ({Comp})=>{
    return(
        <div className="company">
        {Comp.map((Comp, index) => (
          <Button1 key={index} Comp={Comp} />
        ))}
      </div>
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
            <DiffReference DiffRef ={diff_reference_data}/>
            </div>
            <div className = "company">
            <Company Comp={company_data}/>
            </div>
            <div className = "contact">
            <Contact contact_data={contact_data}/>
            </div>
        </div>
    </>
    )
}

export default SectionEnd;

