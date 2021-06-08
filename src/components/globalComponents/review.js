import { useState } from "react"
import ImageTabs from "./ImageTabs"
const Review = (props) => {
    const [reviewText, setReviewText] = useState("")
    const [data, setData] = useState([
        { id: 1, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg", message: "asdasd" },
        { id: 2, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg", message: "a123sdasd" },
        { id: 3, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg", message: "45gasd" },
        { id: 4, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg", message: "asuyksd" },
        { id: 5, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg", message: "a456sd" },
    ])
    return (<>
        <h1 className="text-center">What customers in  {props.city} are saying</h1>
        <p className="text-center">{reviewText}</p>
        <ImageTabs data={data} setReviewText={setReviewText} />
    </>)
}
export default Review;