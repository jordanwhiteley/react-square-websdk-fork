// Dependencies
import * as React from 'react'
import type * as Square from '@square/web-sdk'
import type * as Stitches from '@stitches/react'

// Internals
import { LoadingCard, PayButton } from './styles'
import { useForm } from '../../contexts/FormContext'
import { useEventListener } from '../../hooks/useEventListener'

interface GiftCardInputProps extends Square.GiftCardOptions {
  /**
   * Sets the style for the Gift Card Button using a CSS object
   *
   * @example
   * ```js
   * const overrideStyles = {
   *  background: "rgba(0, 0, 0, 1)",
   *  "&:hover": {
   *    background: "rgba(0, 0, 0, 0.85)"
   *  }
   * }
   * ```
   */
  overrideStyles?: Stitches.ComponentProps<typeof PayButton>['css']
}

/**
 * Renders a Gift Card Input to use in the Square Web Payment SDK, pre-styled to meet Square branding guidelines.
 *
 * **_But with the option to override styles_**
 *
 * @example
 * ```tsx
 * <SquareForm {...props}>
 *  <GiftCardInput />
 * </SquareForm>
 * ```
 */
const GiftCardInput = ({
  overrideStyles,
  ...props
}: GiftCardInputProps): JSX.Element | null => {
  const [giftCard, setGiftCard] = React.useState<Square.GiftCard | undefined>(
    () => undefined
  )
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
  const { cardTokenizeResponseReceived, payments } = useForm()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  /**
   * Handle the on click of the Gift Card button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */
  const handlePayment = async () => {
    setIsSubmitting(true)

    try {
      const result = await giftCard?.tokenize()

      if (result) {
        setIsSubmitting(false)

        return cardTokenizeResponseReceived(result)
      }
    } catch (ex) {
      setIsSubmitting(false)

      console.error(ex)
    }
  }

  React.useEffect(() => {
    /**
     * Initialize the Gift Card instance to be used in the component
     */
    const abortController = new AbortController()
    const { signal } = abortController
    const start = async (signal: AbortSignal) => {
      const gCard = await payments
        ?.giftCard({
          ...props,
        })
        .then((res) => {
          if (!signal.aborted) {
            setGiftCard(res)

            return res
          }

          return null
        })

      await gCard?.attach('#gift-card-container')
    }

    start(signal)

    return () => {
      abortController.abort()
    }
  }, [payments])

  React.useEffect(() => {
    giftCard?.configure(props)
  }, [props])

  useEventListener({
    listener: handlePayment,
    type: 'click',
    element: buttonRef,
    options: {
      passive: true,
    },
  })

  return (
    <>
      <div id="gift-card-container" style={{ minHeight: 89 }}>
        {!giftCard && <LoadingCard />}
      </div>

      <PayButton
        aria-disabled={!giftCard || isSubmitting}
        // @ts-ignore - This is a workaround for a bug in TypeScript
        css={overrideStyles}
        disabled={!giftCard || isSubmitting}
        id="pay-with-gift-card"
        ref={buttonRef}
        type="button"
      >
        Pay with Gift Card
      </PayButton>
    </>
  )
}

export default GiftCardInput
export type { GiftCardInputProps }
