import { Dropdown, ListGroup } from "react-bootstrap"
import "../../../styles/components/globalComponents/Dropdowns/ServiceDropdown.scss"
import asdf from "../../../assets/icons/regular/disinfection.svg"
const ServicesDropDown = (props) => {
    if (props.show && props.show === true) {
        return (
            <div className="shadow drp">
                <ListGroup>
                    <ListGroup.Item className="clickable">
                        <span >
                            <img src={asdf}></img>
                        </span>
                        <span>
                            Action
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="clickable">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className="clickable">Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className="clickable">Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className="clickable">Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
    else {
        return (<></>)
    }
}
export default ServicesDropDown;