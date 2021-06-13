import React, { useState } from 'react';
import '../../../styles/screens/footerScreens/company/faqScreen.scss';

import { Collapse } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { ScrollToTop } from './../../../utilities/index';

const { Panel } = Collapse;

const FaqScreen = () => {
  ScrollToTop();

  // links
  // 5, 10, 12, 13
  // 2, 5
  // 1, 7
  // 6
  // 6
  // 4
  // 4, 8

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      title: 'General',
      faqList: [
        {
          id: 1,
          question: `Who is Puls?`,
          answer: `Puls is a San Francisco based company with more than 4,000 fully vetted technicians across the nation - from Los Angeles, CA, to Raleigh, NC, and hundreds of cities in between. We were founded in 2015 and have been expanding steadily ever since then. We can install and repair almost every device in your home, from dishwashers to garage doors to TVs.`,
        },
        {
          id: 2,
          question: `Who are the Puls technicians?`,
          answer: `Convenience, trust and safety are very important to us. Puls technicians are experts in their field and are enthusiastic about using their expertise to solve your problems and bring you peace of mind. All Puls technicians have been carefully vetted and screened. We only select the top 10% of technicians who apply, and we require a comprehensive background check for every technician.`,
        },
        {
          id: 3,
          question: `Does Puls provide a guarantee on installations and repairs?`,
          answer: `Yes! All of our services come with at minimum a 90-day guarantee.`,
        },
        {
          id: 4,
          question: `How soon can I schedule a technician?`,
          answer: `In many cases, we can be at your doorstep today. The technology behind our platform allows us to quickly find a trusted Puls technician in your area and match them to your job. We often respond faster than our competitors. If you do not need a same-day appointment, we can schedule an appointment for a time that is most convenient to you. Scheduling ultimately depends on our technicians' availability and on your desired appointment time.`,
        },
        {
          id: 5,
          question: `Once I have an appointment, how can I contact Puls?`,
          answer: `Please email our team at support@puls.com.`,
        },
        {
          id: 6,
          question: `How do I know when the technician will arrive?`,
          answer: `Your Puls technician will text or call you when they are on the way. Unlike other services, you typically do not have to wait long for us to arrive.`,
        },
        {
          id: 7,
          question: `Do I need to let the technician into my home?`,
          answer: `For many Puls services, such as appliance repair or TV mounting, you will need to let our technician into your home. For other services, such as mobile device repair, we are happy to meet you at your office, gym, or even a nearby coffee shop.`,
        },
        {
          id: 8,
          question: `Do I need to be there with the technician the entire time?`,
          answer: `Not necessarily. Many customers enjoy observing the technician and seeing how the work gets done, but you're more than welcome to run errands, attend to work, or focus on anything else during that time. Our goal is always to make your day easier.`,
        },
        {
          id: 9,
          question: `How do I pay Puls?`,
          answer: `We don't request payment from you until after the repair or installation is complete. At that time, you can simply pay our technician using his or her mobile phone. We accept all major credit and debit cards, as well as PayPal.`,
        },
        {
          id: 10,
          question: `How much will it cost?`,
          answer: `Please visit our pricing page for a summary of the costs for each of our services. Our prices include parts, labor, and a 90-day guarantee, but they do not include local sales tax, which varies by city and state. Once you have booked an appointment, you will see an estimate of your total price.`,
        },
        {
          id: 11,
          question: `How do I become a Puls technician?`,
          answer: `We are always looking to add qualified technicians to our team. To apply, simply click here and fill out an application.`,
        },
        {
          id: 12,
          question: `How can my company partner with Puls?`,
          answer: `We're always interested in new partnership opportunities. You can reach out to our Strategic Partnerships team at partnerships@puls.com.`,
        },
        {
          id: 13,
          question: `Who do I contact about PR or marketing opportunities?`,
          answer: `You are welcome to email our marketing department: marketing@puls.com.`,
        },
      ],
    },
    {
      id: 2,
      title: 'Puls+ Membership',
      faqList: [
        {
          id: 1,
          question: `How does the Puls+ membership work?`,
          answer: `Puls+ Membership holders are eligible for discounts on certain services, as well as other benefits. Actual benefits may change from time to time so you are encouraged to periodically review the most up-to-date premium features and benefits by visiting puls.com/membership.`,
        },
        {
          id: 2,
          question: `How much does it cost?`,
          answer: `There are several tiers of membership, starting at $79. To see the different membership levels, visit puls.com/membership.`,
        },
        {
          id: 3,
          question: `How long does it last?`,
          answer: `Puls+ is an annual membership. Once you have paid for a membership, it will be active until the one year anniversary of the date of purchase.`,
        },
        {
          id: 4,
          question: `Can I cancel my membership?`,
          answer: `You may cancel your recurring membership at any time prior to your anniversary date of purchase. You will not receive a refund or credit for any remaining time; however, you will retain any premium features or benefits through the end of your Puls+ Membership Term. Subscription fees paid are final and nonrefundable.`,
        },
        {
          id: 5,
          question: `What are the benefits?`,
          answer: `Each membership tier has different benefits associated with it. You can see all of the benefits for each tier at puls.com/membership.`,
        },
        {
          id: 6,
          question: `Do you store my credit card information for renewal?`,
          answer: `We store your credit card information for automatic renewal one year after your purchase date. You will be notified in advance when your membership will renew. If you would like to cancel your auto-renewal, please email memberships@puls.com with your request.`,
        },
      ],
    },
    {
      id: 3,
      title: 'Handyman Services',
      faqList: [
        {
          id: 1,
          question: `How do handyman services work?`,
          answer: `Let us handle it! Puls offers a wide range of handyman services to repair or improve your home. Click here to schedule an appointment in seconds. We will arrive at your doorstep as soon as today to help you out.`,
        },
        {
          id: 2,
          question: `What is included in my handyman service?`,
          answer: `Every service call from a Puls Handyman begins with an estimate of the cost of the service. During this process, your handyman will discuss the scope of the service you are requesting and provide you with the cost prior to completing any work.`,
        },
        {
          id: 3,
          question: `Is your estimate free?`,
          answer: `We do not charge you a fee for the estimate as long as you choose Puls to perform your handyman work. If you decline the service from Puls, then we will ask you to pay a $79 fee to cover the visit.`,
        },
        {
          id: 4,
          question: `How much will it cost for the service?`,
          answer: `Our handyman will provide you with a cost estimate prior to completing any work.`,
        },
        {
          id: 5,
          question: `Does your handyman service come with a guarantee?`,
          answer: `Each handyman service comes with a guarantee that the service was performed correctly.`,
        },
        {
          id: 6,
          question: `How long will it take for the service?`,
          answer: `Our handyman will provide you with a cost estimate prior to completing any work.`,
        },
        {
          id: 7,
          question: `What types of services does Puls provide?`,
          answer: `We provide many different handyman services including furniture assembly, wall hanging, interior painting, appliance install, drywall repair, fan install, window treatments, power washing, light install, electrical services, gutter cleaning and more. Click hereto see the most up-to-date services we provide in your area.`,
        },
      ],
    },
    {
      id: 4,
      title: 'Appliance Repair',
      faqList: [
        {
          id: 1,
          question: `How does appliance repair with Puls work?`,
          answer: `Get your beloved appliances working again. A Puls technician can repair your dishwasher, dryer, washing machine, refrigerator, oven, or stove so you can get back to the important things in life. Use our website to schedule an appointment with just a few clicks. We will arrive at your doorstep as soon as today to get it fixed. No more piles of dirty dishes or dirty clothes!`,
        },
        {
          id: 2,
          question: `How much does it cost?`,
          answer: `Your technician will fully inspect your appliance and provide a quote for the recommended repair. The inspection is free if you choose to move forward with the recommendation from Puls. If you decline the recommended repair, we will ask you to pay $79 to cover the cost of the inspection.`,
        },
        {
          id: 3,
          question: `Does your appliance repair service come with a guarantee?`,
          answer: `Yes! All of our repair services are backed by our 90-day guarantee.`,
        },
        {
          id: 4,
          question: `How long will it take to repair my appliance?`,
          answer: `On average, most of our appliance repairs are completed in under an hour. In some cases, we must schedule a follow-up appointment so we can order the right part(s). We aim to have all repairs completed within 48 hours of our first visit to your home.`,
        },
        {
          id: 5,
          question: `How do I know if Puls can repair a specific brand of appliance?`,
          answer: `We support all brands of refrigerators, dishwashers, dryers, washing machines, ovens, and stoves.`,
        },
        {
          id: 6,
          question: `How do I book an appliance repair appointment?`,
          answer: `Please use this link to schedule an appointment. You should select the type of appliance you need repaired and enter your contact information. You'll be able to schedule a time that is convenient for you. Your Puls technician will arrive at your doorstep and will bring all necessary parts and tools to repair your appliance.`,
        },
      ],
    },
    {
      id: 5,
      title: 'TV Mounting',
      faqList: [
        {
          id: 1,
          question: `How does TV mounting work?`,
          answer: `Leave all the heavy lifting to us! Puls technicians can mount your big screen TV on the wall so you can start viewing your favorite shows. We can be there as soon as today. Puls technicians can handle TVs of almost any size, and we can provide almost any style of bracket.`,
        },
        {
          id: 2,
          question: `Does your TV mounting service come with a guarantee?`,
          answer: `Yes! All of our installation services are backed by our 90-day guarantee.`,
        },
        {
          id: 3,
          question: `How long will it take to mount my TV?`,
          answer: `On average, most TV installations are completed within 45-60 minutes.`,
        },
        {
          id: 4,
          question: `Can you install my brand of TV?`,
          answer: `Yes, we support all TV brands.`,
        },
        {
          id: 5,
          question: `What size TVs do you install?`,
          answer: `No TV is too large or too small. Just let us know ahead of time how big your TV is so we can bring a second technician if necessary.`,
        },
        {
          id: 6,
          question: `How do I book a TV mounting appointment?`,
          answer: `Please use this link to schedule an appointment. You should select your TV type, wall type, preferred bracket type (or opt to use your own), and enter your contact information. You'll be able to choose a time that is most convenient for you. Your Puls technician will arrive at your doorstep and will bring all necessary parts and tools to mount your TV.`,
        },
        {
          id: 7,
          question: `Do I need a TV bracket?`,
          answer: `Our standard TV mounting prices do not include the price of the TV bracket itself, but we make it easy to purchase a fixed, tilting or full motion TV bracket when booking your service. In that case, your technician will bring the brand new bracket to your appointment.`,
        },
        {
          id: 8,
          question: `What if I already purchased a TV bracket?`,
          answer: `No problem! We are happy to do the installation with your bracket. Just select the option that says “I already have a bracket” when scheduling your appointment.`,
        },
        {
          id: 9,
          question: `What kind of TV brackets does Puls offer?`,
          answer: `We offer fixed, tilting and full motion brackets for any TV size.`,
        },
        {
          id: 10,
          question: `What additional services can you provide for my TV or home theater?`,
          answer: `We offer many add-on services you can select as part of your TV mounting appointment. For example, we can conceal your wires, program your remotes, install a shelf or sound bar, wire up your audio/video setup, or configure your XBOX. Just let us know ahead of time!`,
        },
        {
          id: 11,
          question: `Can Puls mount a TV on my wall if it's not drywall?`,
          answer: `Yes! Our technicians are skilled and experience at mounting TVs on all types of walls, including drywall, wood, concrete, and brick.`,
        },
      ],
    },
    {
      id: 6,
      title: 'Mobile Phone Repair',
      faqList: [
        {
          id: 1,
          question: `What is the benefit of using Puls?`,
          answer: `Imagine traveling to a repair store, searching for parking, and being separated from your device for hours. Our service alleviates all the hassle of the conventional device repair process, while ensuring that your data is kept private and secure. Our website makes it easy to schedule an appointment and we send a technician as soon as today. Get it fixed now so you can get on with your life!`,
        },
        {
          id: 2,
          question: `Do you provide a guarantee on mobile phone repairs?`,
          answer: `Yes! Our mobile phone repair service has a 90 day guarantee. You can count on Puls to use top quality parts for all your repairs.`,
        },
        {
          id: 3,
          question: `How long will it take to repair my mobile phone?`,
          answer: `On average, most mobile phone repairs are completed within 30-40 minutes.`,
        },
        {
          id: 4,
          question: `How do I schedule an appointment for mobile phone repair?`,
          answer: `Please use this link to start the repair process. Simply choose your device type and enter your contact information. You can then schedule an appointment with a Puls technician at a time that is convenient for you. We can meet you at your home, your office, or another location.`,
        },
        {
          id: 5,
          question: `What happens if I crack my screen again or my phone gets damaged again?`,
          answer: `Our guarantee does not apply toward future accidents or unrelated damage that occurs after we have repaired your device. For example, if the screen cracks again then there will be a cost for the additional repairs needed.`,
        },
        {
          id: 6,
          question: `What kind of devices do you repair?`,
          answer: `The specific models we service can vary by location. When you book an appointment, you'll be able to see if we service your specific device in your specific zip code. You can contact us via phone or email to inquire about support or repair for other devices.`,
        },
        {
          id: 7,
          question: `My issue isn't listed as an option - can you fix it?`,
          answer: `We'd be happy to connect you with a technician who can perform a Service call on your phone and determine whether Puls can repair it. We do charge a fee for Service call tests. However, if the technician is able to diagnose and solve the issue, we'll waive the Service call fee and simply charge you for the needed repair.`,
        },
        {
          id: 8,
          question: `What happens if my device can't be fixed?`,
          answer: `Puls technicians are able to provide screen replacements, new battery installation, and charging port replacements. If your device has another issue and the technician is unable to fix it, we won't charge you anything beyond the Service call fee.`,
        },
      ],
    },
    {
      id: 7,
      title: 'Garage Door Repair',
      faqList: [
        {
          id: 1,
          question: `How does garage door repair work?`,
          answer: `Let's get your garage door working smoothly! Puls technicians can identify what's wrong with your garage door and then repair it so you can get back to the things that are important. We can be there as soon as today.`,
        },
        {
          id: 2,
          question: `What is included in my garage door repair service?`,
          answer: `Every service call from a Puls garage door technician includes a 25-point safety check for your garage door and its components. During this check, our technician will inspect your garage door system to guarantee it is working as it should. If we spot damaged parts that need to be replaced or signs of upcoming problems, we'll advise you on the best way to fix the problem before it becomes more serious.`,
        },
        {
          id: 3,
          question: `Is your garage door inspection free?`,
          answer: `We do not charge you any fee for the inspection as long as you choose Puls to perform your garage door repair. If you decline the recommended repair from Puls, then we will ask you to pay a $39 fee to cover the cost of the inspection.`,
        },
        {
          id: 4,
          question: `How much will it cost to fix my garage door?When we arrive at your home, we will fully inspect your garage door and provide you with a quote for the recommended repairs. You can view our pricing page for more details.`,
        },
        {
          id: 5,
          question: `Does your garage door repair service come with a guarantee?`,
          answer: `Yes! All of our repair services are backed by our 90-day guarantee.`,
        },
        {
          id: 6,
          question: `How long will it take to repair my garage door?`,
          answer: `On average, most of our garage door repairs are completed in under an hour. In some cases, we must schedule a follow-up appointment so we can order the right part(s). We aim to have all repairs completed within 48 hours of our first visit to your home.`,
        },
        {
          id: 7,
          question: `What type of garage doors does Puls repair?`,
          answer: `Puls can repair just about any type of garage door.`,
        },
        {
          id: 8,
          question: `How do I book a garage door repair appointment?`,
          answer: `Please use this link to schedule an appointment. You'll be able to choose a time that is convenient for you. At the scheduled time, your Puls technician will arrive at your doorstep and will bring all necessary parts and tools to successfully repair your garage door.`,
        },
      ],
    },
    {
      id: 8,
      title: 'Smart Home Installation',
      faqList: [
        {
          id: 1,
          question: `What does a smart home installation entail?`,
          answer: `A technician comes to your house and installs your smart device, including connecting it to the internet for you.`,
        },
        {
          id: 2,
          question: `Do you install Ring doorbells?`,
          answer: `Yes, we install Ring doorbells and all types of smart doorbells and security cameras.`,
        },
        {
          id: 3,
          question: `Can you connect all of my smart devices to a single hub?`,
          answer: `Yes, assuming that your smart device is compatible with your hub.`,
        },
        {
          id: 4,
          question: `Do I need a Wifi connection in order to use smart home devices?`,
          answer: `To experience the full features and functionality of your devices, a Wifi connection is required upon installation. Please have your Wifi password accessible to connect your new devices as well.`,
        },
        {
          id: 5,
          question: `Will the technician educate me on the product and how to use it?`,
          answer: `Yes! Our technicians will give you a brief tutorial on how to use the corresponding application with your new device, as well as a demonstration of its main features.`,
        },
        {
          id: 6,
          question: `Can smart home devices be used outside?`,
          answer: `Some smart home devices are specifically designed to withstand weather and outdoor conditions (security cameras, doorbells, etc…). However, some may not be able to operate or function properly outside. Ask your technician for best practices with your selected smart home device.`,
        },
        {
          id: 7,
          question: `Will I have to create an account for the app to use my new smart home device?`,
          answer: `Most smart home devices require you to create a user account in order to use it to its fullest potential.`,
        },
        {
          id: 8,
          question: `My wifi has poor signal where I want to install my new smart home device. Will that be an issue?`,
          answer: `Poor internet connections can cause your new device to not function as expected. WiFi repeaters and extenders can be a quick fix for this issue. Talk to your technician for the best solution for your home.`,
        },
      ],
    },
  ]);

  // function callback(key) {
  //   console.log(key);
  // }

  const outerHeader = (accordianHeaderTitle) => {
    return (
      <div className='outerAccordianHeader sb'>
        <span>{accordianHeaderTitle}</span>
        <IoIosArrowDown className='dropdown-icon' size='25px' />
      </div>
    );
  };

  const innerHeader = (accordianHeaderTitle) => {
    return (
      <div className='innerAccordianHeader sb '>
        <span>{accordianHeaderTitle}</span>
        <div className='icon'>
          <AiOutlinePlus className='plus-icon' size='25px' />
          <AiOutlineMinus className='minus-icon' size='25px' />
        </div>
      </div>
    );
  };

  return (
    <div className='faqScreen container-60'>
      <h1>Got questions? We're here to help</h1>
      <p>
        Use the sections below to find answers to frequently asked questions. You’re also welcome to
        email us at <a href='mailto:support@puls.com'>support@puls.com</a>
      </p>
      <div className='container-y-100 faq'>
        <Collapse expandIconPosition='right'>
          {faqs &&
            faqs.map((faq) => (
              <Panel
                className='outer-collapse'
                header={outerHeader(faq.title)}
                key={`${faq.id}`}
                showArrow={false}
              >
                <Collapse accordion expandIconPosition='right'>
                  {faq.faqList &&
                    faq.faqList.map((f) => (
                      <Panel header={innerHeader(f.question)} key={`${f.id}`} showArrow={false}>
                        <p>{f.answer}</p>
                      </Panel>
                    ))}
                </Collapse>
              </Panel>
            ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FaqScreen;
