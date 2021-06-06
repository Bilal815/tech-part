import { InputNumber } from 'antd';
import { useState } from 'react';
const ZipCode = () => {
    const [zipCode, setZipCode] = useState("");
    const hanldeChange = (value) => {
        console.log('changed', value);
    }
    return (
        <>
            <InputNumber min={1} max={10} defaultValue={3} onChange={hanldeChange} value={zipCode} />
        </>
    )
}
export default ZipCode;