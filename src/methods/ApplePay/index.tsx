// Dependencies
import * as React from 'react'
import type * as Square from '@square/web-sdk'

// Internals
import { ApplePayContainer } from './styles'
import { useForm } from '../../contexts/FormContext'
import { useEventListener } from '../../hooks/useEventListener'

/**
 * Renders a Apple Pay button to use in the Square Web Payment SDK, pre-styled to meet Apple Pay's branding guidelines.
 *
 * **Remember** that you need to set `createPaymentRequest()` in `SquareForm`
 * if you going to use this Payment Method
 *
 * @example
 * ```tsx
 * <SquareForm {...props}>
 *  <ApplePay />
 * </SquareForm>
 * ```
 */
const ApplePay = (): JSX.Element | null => {
  const [applePay, setApplePay] = React.useState<Square.ApplePay | undefined>(
    () => undefined
  )
  const { cardTokenizeResponseReceived, createPaymentRequest, payments } =
    useForm()
  const divRef = React.useRef<HTMLDivElement>(null)

  if (!createPaymentRequest) {
    throw new Error(
      '`createPaymentRequest()` is required when using digital wallets'
    )
  }

  /**
   * Handle the on click of the Apple Pay button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */
  const handlePayment = async (e: Event) => {
    e.preventDefault()

    try {
      const result = await applePay?.tokenize()

      if (result) {
        return cardTokenizeResponseReceived(result)
      }
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => {
    /**
     * Initialize the Apple Pay instance to be used in the component
     */
    const start = async () => {
      const paymentRequest = payments?.paymentRequest(createPaymentRequest)

      try {
        // @ts-ignore - PaymentRequest is defined in the types
        await payments?.applePay(paymentRequest).then((res) => {
          setApplePay(res)

          return res
        })
      } catch (error) {
        console.error(error)

        throw new Error(error as any)
      }
    }

    start()
  }, [createPaymentRequest, payments])

  useEventListener({
    listener: handlePayment,
    type: 'click',
    element: divRef,
    options: {
      passive: true,
    },
  })

  return (
    <ApplePayContainer
      // We need to make this styles to be able to use event listener
      css={{
        display: applePay ? 'block' : 'none',
        opacity: applePay ? 1 : 0.5,
        pointerEvents: applePay ? 'auto' : 'none',
        visibility: applePay ? 'visible' : 'hidden',
      }}
      id="apple-pay-button"
      ref={divRef}
    ></ApplePayContainer>
  )
}

export default ApplePay
