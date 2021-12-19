import React from 'react';
import '../../../styles/screens/footerScreens/legals/privacyScreen.scss';

import { ScrollToTop } from './../../../utilities/index';
import ReactHelmetHeader from './../../../components/globalComponents/ReactHelmetHeader';

const PrivacyScreen = () => {
  ScrollToTop();

  return (
    <div className='privacyScreen'>
      <ReactHelmetHeader title='Puls | Puls privacy policy' />
      <h1 style={{textAlign:'left'}}>Puls privacy policy</h1>
      <p className='firstParagraph'>
        This Privacy Policy sets out Puls policy with respect to information, including in
        particular information which identifies you personally (known as 'personally identifiable
        information' in the USA or 'personal data' in the European Union, which together we refer to
        as "Personal Data") and other information that is collected from visitors and users of the
        Services. Additionally, by using our websites, applications, content, products, and
        communication channels ("Site"), you acknowledge and agree that Internet transmissions are
        never completely private or secure.
      </p>
      <p>
        Please read this privacy policy carefully so that you understand how we will treat your
        information. You understand that any message or information you send to the Site may be read
        or intercepted by others, even if there is a special notice that a particular transmission
        (for example, credit card information) is encrypted. By using any of our Services, you
        confirm that you have read, understood and agree to this privacy policy. If you do not agree
        to this policy, please do not use any of the Services. If you have any queries, please email
        us at
      </p>
      <a href='mailto:email@example.com'>support@puls.com</a>
    </div>
  );
};

export default PrivacyScreen;
