// Dependencies
import * as React from 'react'

// Internals
import Afterpay from '../..'
import SquarePaymentsForm from '../../../../SquarePaymentsForm'
import type { AfterpayProps } from '../..'
import { forwardRef } from 'react'

const CustomButton = forwardRef<HTMLButtonElement, { id: string }>(
  (props, ref) => {
    return (
      <button id={props.id} ref={ref}>
        Custom Button
      </button>
    )
  }
)

const CustomButtonStory: React.FC<AfterpayProps> = (props) => {
  return (
    <SquarePaymentsForm
      /**
       * This is a sandbox application ID. You can find your application ID in the Square Dashboard.
       *
       * You will not be charged using this credentials
       */
      applicationId="sandbox-sq0idb-7KE3zXHZLG_X5EmLLptTYw"
      cardTokenizeResponseReceived={(token, buyer) => {
        console.info({ token, buyer })
      }}
      createPaymentRequest={() => ({
        countryCode: 'US',
        currencyCode: 'USD',
        total: { amount: '1.00', label: 'Total' },
        requestShippingContact: true,
      })}
      createVerificationDetails={() => ({
        amount: '1.00',
        /* collected from the buyer */
        billingContact: {
          addressLines: ['123 Main Street', 'Apartment 1'],
          familyName: 'Doe',
          givenName: 'John',
          countryCode: 'GB',
          city: 'London',
        },
        currencyCode: 'GBP',
        intent: 'CHARGE',
      })}
      /**
       * This is a sandbox location ID. You can find your location ID in the Square Dashboard > Locations.
       *
       * You will not be charged using this credentials
       */
      locationId="4P550BZQ0TQZA"
    >
      <Afterpay CustomButton={CustomButton} {...props} />
    </SquarePaymentsForm>
  )
}

export { CustomButtonStory as CustomButton }
