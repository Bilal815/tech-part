import { useState,useEffect } from "react";
import { Tabs } from 'antd';
import "../../styles/components/globalComponents/imageTabs.scss"
const { TabPane } = Tabs;

const Review = (props) => {
    const [active, setActive] = useState(1)
    useEffect(() => {
        setActive(props.data[0].id);
        props.setReviewText(props.data[0].message)
    },[])
    return (
        <Tabs defaultActiveKey="1" centered>
            {
                props.data.map((x, index) => {
                    return (<TabPane tab={
                        <img onClick={() => { setActive(x.id); props.setReviewText(x.message) }} className={active === x.id ? "tech-img-clicked rounded-circle" : "tech-img rounded-circle"} src={x.src} ></img>
                    } key={index + 1}>
                        Content of Tab Pane 1
                    </TabPane>)
                })
            }


        </Tabs>

    )
}
export default Review;