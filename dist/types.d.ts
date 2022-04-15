import * as React from "react";
import * as Square from "@square/web-sdk";
import * as Stitches from "@stitches/react";
export type ErrorScreenProps = {
    development?: boolean;
};
export const ErrorScreen: ({ development, }: ErrorScreenProps) => React.ReactElement;
export interface SquarePaymentsFormProps {
    applicationId: string;
    locationId: string;
    formId?: string;
    children?: React.ReactNode;
    cardTokenizeResponseReceived: (props: Square.TokenResult, verifiedBuyer?: Square.VerifyBuyerResponseDetails | null) => void;
    createPaymentRequest?: () => Square.PaymentRequestOptions;
    createVerificationDetails?: () => Square.ChargeVerifyBuyerDetails | Square.StoreVerifyBuyerDetails;
    overrides?: {
        scriptSrc?: string;
    };
}
export const SquarePaymentsForm: ({ applicationId, locationId, formId, overrides, ...props }: SquarePaymentsFormProps) => React.ReactElement | null;
declare const Line: import("@stitches/react/types/styled-component").StyledComponent<"div", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
declare const SpanText: import("@stitches/react/types/styled-component").StyledComponent<"span", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export interface SeparatorProps {
    overrideLineStyles?: Stitches.ComponentProps<typeof Line>['css'];
    overrideSpanStyles?: Stitches.ComponentProps<typeof SpanText>['css'];
    text?: string;
}
export const Separator: ({ overrideLineStyles, overrideSpanStyles, text, }: SeparatorProps) => React.ReactElement;
declare const PayButton: import("@stitches/react/types/styled-component").StyledComponent<"button", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
declare const SvgIcon: import("@stitches/react/types/styled-component").StyledComponent<"svg", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export interface AchPayProps extends Square.AchTokenOptions {
    children?: React.ReactNode;
    overrideSvgStyles?: Stitches.ComponentProps<typeof SvgIcon>['css'];
    overrideStyles?: Stitches.ComponentProps<typeof PayButton>['css'];
}
export const AchPay: ({ children, overrideSvgStyles, overrideStyles, ...props }: AchPayProps) => JSX.Element | null;
export const ApplePay: () => JSX.Element | null;
declare const _PayButton1: import("@stitches/react/types/styled-component").StyledComponent<"button", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export type PayButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'aria-disabled' | 'disabled' | 'id' | 'type'> & {
    css?: Stitches.ComponentProps<typeof _PayButton1>['css'];
};
export type CreditCardInputChildren = {
    Button: (props?: PayButtonProps) => React.ReactElement;
};
export interface CreditCardInputProps extends Square.CardOptions {
    cardBrandChanged?(event: Square.SqEvent<Square.CardInputEvent>): void;
    cardContainerId?: string;
    children?: (props: CreditCardInputChildren) => React.ReactElement | React.ReactNode;
    errorClassAdded?(event: Square.SqEvent<Square.CardInputEvent>): void;
    errorClassRemoved?(event: Square.SqEvent<Square.CardInputEvent>): void;
    focus?: Square.CardFieldNamesValues;
    focusClassAdded?(event: Square.SqEvent<Square.CardInputEvent>): void;
    focusClassRemoved?(event: Square.SqEvent<Square.CardInputEvent>): void;
    overrideStyles?: Stitches.ComponentProps<typeof _PayButton1>['css'];
    postalCodeChanged?(event: Square.SqEvent<Square.CardInputEvent>): void;
    recalculateSize?(callback: Square.Card['recalculateSize'] | undefined): void;
    scape?(event: Square.SqEvent<Square.CardInputEvent>): void;
    submit?(event: Square.SqEvent<Square.CardInputEvent>): void;
    submitButtonId?: string;
    text?: string;
}
export const CreditCardInput: ({ cardBrandChanged, cardContainerId, children, errorClassAdded, errorClassRemoved, focus, focusClassAdded, focusClassRemoved, overrideStyles, postalCodeChanged, recalculateSize, scape, submit, submitButtonId, text, ...props }: CreditCardInputProps) => React.ReactElement | null;
declare const _PayButton2: import("@stitches/react/types/styled-component").StyledComponent<"button", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export interface GiftCardInputProps extends Square.GiftCardOptions {
    overrideStyles?: Stitches.ComponentProps<typeof _PayButton2>['css'];
}
export const GiftCardInput: ({ overrideStyles, ...props }: GiftCardInputProps) => JSX.Element | null;
export type GooglePayProps = Square.GooglePayButtonOptions;
export const GooglePay: (props: GooglePayProps) => JSX.Element | null;

//# sourceMappingURL=types.d.ts.map
