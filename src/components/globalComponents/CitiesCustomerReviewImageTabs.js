import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import '../../styles/components/globalComponents/citiesCustomerReviewImageTabs.scss';
const { TabPane } = Tabs;

const CitiesCustomerReviewImageTabs = ({ data, setCurrentReview }) => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    setActive(data[0].id);
    setCurrentReview(data[0]);
  }, []);

  return (
    <Tabs defaultActiveKey='1' centered className='citiesCustomerReviewImageTabs'>
      {data.map((x, index) => {
        return (
          <TabPane
            style={{ borderColor: 'brown' }}
            tab={
              <img
                onClick={() => {
                  setActive(x.id);
                  setCurrentReview(x);
                }}
                className={
                  active === x.id ? 'tech-img-clicked rounded-circle' : 'tech-img rounded-circle'
                }
                alt="tab"
                src={x.src}
              ></img>
            }
            key={index + 1}
          ></TabPane>
        );
      })}
    </Tabs>
  );
};
export default CitiesCustomerReviewImageTabs;
