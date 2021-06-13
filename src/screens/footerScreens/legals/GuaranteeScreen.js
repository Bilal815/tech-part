import React, { useState } from 'react';
import '../../../styles/screens/footerScreens/legals/guaranteeScreen.scss';

import { ScrollToTop } from './../../../utilities/index';

const GuaranteeScreen = () => {
  ScrollToTop();
  const [data, setData] = useState([
    {
      mainHeading: 'Guarantee',
      mainDescription: `Puls aims to provide the best possible customer experience before, during, and after each appointment.  We offer a limited lifetime guarantee on smartphone repairs and we also offer a 90-day guarantee on all in-home services booked through Puls.
      Below, we’ve outlined coverage and exclusions.`,
      details: [
        {
          innerHeading: 'HANDYMAN SERVICES',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [`90 day guarantee on all handyman services`],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Post-appointment damages unrelated to the original repair, caused by mishandling, water damage, or any other unrelated issues. For example, if a pipe bursts and damages the same wall, the guarantee does not apply.`,
              `Repairs that are repaired or modified by anyone other than a Puls technician prior to or after our service.`,
            ],
          },
        },
        {
          innerHeading: 'PULS+ ESSENTIAL MEMBERSHIP',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [`180 day guarantee on all Puls services`],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Pre-existing conditions or post-appointment damages unrelated to the original repair, caused by mishandling, water damage, or any other unrelated issues. For example, if a pipe bursts and damages the same wall, the guarantee does not apply.`,
              `Repairs that are repaired or modified by anyone other than a Puls technician prior to or after our service.`,
            ],
          },
        },
        {
          innerHeading: 'PULS+ STANDARD MEMBERSHIP',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [`365 day guarantee on all Puls services`],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Pre-existing conditions or post-appointment damages unrelated to the original repair, caused by mishandling, water damage, or any other unrelated issues. For example, if a pipe bursts and damages the same wall, the guarantee does not apply.`,
              `Repairs that are repaired or modified by anyone other than a Puls technician prior to or after our service.`,
            ],
          },
        },
        {
          innerHeading: 'PULS+ PRO MEMBERSHIP',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [`365 day guarantee on all Puls services`],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Pre-existing conditions or post-appointment damages unrelated to the original repair, caused by mishandling, water damage, or any other unrelated issues. For example, if a pipe bursts and damages the same wall, the guarantee does not apply.`,
              `Repairs that are repaired or modified by anyone other than a Puls technician prior to or after our service.`,
            ],
          },
        },
        {
          innerHeading: 'SMARTPHONE',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `Lifetime guarantee on labor and parts used for the original service. For example, if your screen is replaced and later appears to be defective, we will gladly replace it at no cost.`,
              `Limited one year guarantee is offered on all battery replacements.`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Pre-existing conditions or post-appointment damages unrelated to the original repair, caused by mishandling, liquid damage, software related defects, or any other unrelated issues. For example, if the device comes into contact with another object and the screen is damaged, the guarantee does not apply.`,
              `Loss of data - please back up your device prior to your appointment.`,
              `Devices that are repaired or modified by anyone other than a Puls technician prior to or after our service.`,
            ],
          },
        },
        {
          innerHeading: 'TV MOUNT',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `90 day guarantee on labor and parts used for the original service. For example, if a Puls-provided bracket is faulty, we will reinstall the TV with a new mount at no cost.`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Any damage to the TV, unrelated to the original installation, caused by mishandling, and or manufacturing defects.`,
              `Bracket, full-motion mishandling, and TV placement modifications done by anyone other than a Puls technician.`,
            ],
          },
        },
        {
          innerHeading: 'GARAGE DOOR',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `90 day guarantee on labor and parts used during the original service. For example, if the torsion spring later appears to be defective, we will replace the part at no cost.`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Subsequent damage or mishandling to the Garage Door unrelated to the original service.`,
              `Repairs and tune-ups recommended as needed by Puls, but not serviced (customer opts out), as noted during the 25 point inspection.`,
              `Incidental damages, including injury to a person or property, due to a garage door not operating properly.`,
            ],
          },
        },
        {
          innerHeading: 'HOME APPLIANCE',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `90 day guarantee on labor and parts used during the original service. For example, if the water inlet valve on the washer later appears to be defective, we will replace the part at no cost.`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Subsequent damage or mishandling to the home appliance, unrelated to the original service.`,
              `Repairs and tune-ups recommended as needed by Puls, but not serviced (customer opts out), as noted during the original Service call.`,
            ],
          },
          boldDescription: `THE GUARANTEE IS VALID EXCLUSIVELY TO THE CUSTOMER WHO PURCHASED THE SERVICE AND WHOSE NAME IS ON THE GUARANTEE/INVOICE. THE GUARANTEE WILL NOT BE TRANSFERABLE IF THE DEVICE, HOME APPLIANCE, OR GARAGE DOOR OWNERSHIP IS TRANSFERRED TO ANOTHER INDIVIDUAL OR BUSINESS.`,
        },
      ],
    },
    {
      mainHeading: 'Extended Guarantee Plans',
      details: [
        {
          innerHeading: '180 DAYS GUARANTEE EXTENSION PACKAGE',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `Guarantee is extended from 90 days to 180 days.`,
              `Guarantee on labor and parts used during the original service up to XX. For example, if the water inlet valve on the washer later appears to be defective, we will replace the part at no cost.`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Subsequent damage or mishandling to the home appliance, unrelated to the original service.`,
              `Repairs and tune-ups recommended as needed by Puls, but not serviced (customer opts out), as noted during the original Service call.`,
              `Damage due to lack of care and consistent maintenance`,
            ],
          },
        },
        {
          innerHeading: '365 DAYS GUARANTEE EXTENSION PACKAGE',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `Guarantee is extended from 90 days to 365 days.`,
              `Guarantee on labor and parts used during the original service up to XX. For example, if the water inlet valve on the washer later appears to be defective, we will replace the part at no cost.`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Subsequent damage or mishandling to the home appliance, unrelated to the original service.`,
              `Repairs and tune-ups recommended as needed by Puls, but not serviced (customer opts out), as noted during the original Service call.`,
              `Damage due to lack of care and consistent maintenance`,
            ],
          },
        },
      ],
    },
    {
      mainHeading: 'PLUMBING',
      details: [
        {
          innerHeading: '180 DAYS GUARANTEE EXTENSION PACKAGE',
          included: {
            heading: 'WHAT IS INCLUDED:',
            descriptionList: [
              `90 day guarantee with no extended guarantee for plumbing services`,
              `This is inclusive of Puls+ members with Essential, Standard, and Pro memberships`,
            ],
          },
          notIncluded: {
            heading: 'WHAT IS NOT INCLUDED:',
            descriptionList: [
              `Puls Technologies Inc Guarantee shall not cover any defect or damage which may be caused or partly caused by or arise through:`,
              `Failure on the part of the customer to properly maintain repair`,
              `Failure on the part of the customer to follow any instructions or guidelines provided by the technician/plumbe`,
              `The continued use of repair done by a technician after any defect becomes apparent or would have become apparent to a reasonably prudent operator or user`,
              `Fair wear and tear`,
              `Silicone work does not carry a guarantee`,
              `The guarantee shall cease and the technician/plumber shall thereafter in no circumstances be liable under the terms of the guarantee if the workmanship is repaired, altered, or overhauled by the customer`,
            ],
          },
        },
      ],
    },
  ]);

  return (
    <div className='guaranteeScreen'>
      <div className='container-40'>
        {data &&
          data.map((item) => (
            <>
              {item.mainHeading && <h1 className='heading-1 center'>{item.mainHeading}</h1>}
              <div className='terms'>
                {item.mainDescription && <p className='description '>{item.mainDescription}</p>}

                {item.details &&
                  item.details.map((term) => (
                    <>
                      {term.innerHeading && (
                        <h1 className='heading-3 center my-5'>{term.innerHeading}</h1>
                      )}

                      {term.included && <h1 className='heading-3'>{term.included.heading}</h1>}
                      <ul>
                        {term.included.descriptionList &&
                          term.included.descriptionList.map((i) => <li>{i}</li>)}
                      </ul>

                      {term.notIncluded && <h1 className='heading-3'>{term.included.heading}</h1>}
                      <ul>
                        {term.notIncluded.descriptionList &&
                          term.notIncluded.descriptionList.map((i) => <li>{i}</li>)}
                      </ul>
                      {term.boldDescription && (
                        <h1 className='heading-3 my-5'>{term.boldDescription}</h1>
                      )}
                    </>
                  ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default GuaranteeScreen;
