import registrationData from "../mockData/registrationData";

export const LeftContainer = ({left_container_regData: {text, button: {href, title}}}) => {
    return(
        <div className="left_container_reg">
            <h4 href={href} className="cta_reg">{title}</h4>
            <h3 className="content_reg">{text}</h3>
        </div>
    )
  };

export const RightContainer = ({right__container_regData:{button: {href, title}}}) => {
    return (
        <div className="right__container_reg">
          <a href={href}><button className="cta_buttons__start btn">{title}</button></a>
        </div>
    )
}

const Registration = () => {

    const {left_container_regData, right__container_regData} = registrationData

    return (
        <>
            <LeftContainer left_container_regData={left_container_regData}/>
            <RightContainer right__container_regData={right__container_regData}/>
        </>
    )

}

export default Registration;
