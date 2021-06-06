import { useEffect } from "react";
import { useSelector } from "react-redux"
const ScreenSizes = (props) => {
    const tvSizes = useSelector(state => state.tvSizes)
    useEffect(() => {
        console.log(tvSizes)
    })
    const handleClick = (value) => {
        console.log(value)
    }
    return (
        <div>
            {
                tvSizes.sizes.map(x => {
                    return <div className="shadow rounded  p-3 mb-4 clickable text-center" onClick={() => { handleClick(x) }}>{x}</div>
                })
            }
        </div>
    )

}
export default ScreenSizes;