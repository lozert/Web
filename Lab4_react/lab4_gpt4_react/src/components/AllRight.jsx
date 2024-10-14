import { allRightData } from "../mockData/allRightData";

export const AllRightContainer =({all_right_data:{text}}) => (
        <div>{text}</div>
)

export const AllRight =() => {

    const {all_right_data} = allRightData

    return(
        <AllRightContainer all_right_data={all_right_data}/>
    )
}
export default AllRight;