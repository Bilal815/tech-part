import { useState } from "react";
import { Tabs } from 'antd';
import "../../styles/components/globalComponents/review.scss"
const { TabPane } = Tabs;

const Review = () => {
    const [active, setActive] = useState(false)
    const [data, setData] = useState([
        { id: 1, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg" },
        { id: 2, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg" },
        { id: 3, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg" },
        { id: 4, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg" },
        { id: 5, src: "https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg" },
    ])
    return (
        <Tabs defaultActiveKey="1" centered>
            {
                data.map((x, index) => {
                    return (<TabPane tab={
                        <img onClick={() => { setActive(x.id) }} className={active === x.id ? "tech-img-clicked rounded-circle" : "tech-img rounded-circle"} src={x.src} ></img>
                    } key={index}>
                        Content of Tab Pane 1
                    </TabPane>)
                })
            }


        </Tabs>

    )
}
export default Review;