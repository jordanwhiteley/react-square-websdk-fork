var $PJwWZ$reactjsxruntime = require("react/jsx-runtime");
var $PJwWZ$react = require("react");
var $PJwWZ$squarewebsdk = require("@square/web-sdk");
var $PJwWZ$stitchesreact = require("@stitches/react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

$parcel$export(module.exports, "SquarePaymentsForm", () => $dc02c49c251f8b79$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ErrorScreen", () => $1440201453c52018$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Separator", () => $f2e5192adc636e46$export$2e2bcd8739ae039);
$parcel$export(module.exports, "AchPay", () => $bc1a75ff5b3aa6ba$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ApplePay", () => $7872206b0bb35235$export$2e2bcd8739ae039);
$parcel$export(module.exports, "CreditCardInput", () => $91887c9404d0d427$export$2e2bcd8739ae039);
$parcel$export(module.exports, "GiftCardInput", () => $5e2f8d6e21b4fe8f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "GooglePay", () => $d200a11018bd61f2$export$2e2bcd8739ae039);
var $dc02c49c251f8b79$exports = {};

$parcel$defineInteropFlag($dc02c49c251f8b79$exports);

$parcel$export($dc02c49c251f8b79$exports, "default", () => $dc02c49c251f8b79$export$2e2bcd8739ae039);






// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect because we want
// `connect` to perform sync updates to a ref to save the latest props after
// a render is actually committed to the DOM.
const $7b65a2d264fab671$var$useIsomorphicLayoutEffect = typeof window === 'undefined' ? $PJwWZ$react.useEffect : $PJwWZ$react.useLayoutEffect;
const $7b65a2d264fab671$export$aeeb7828e948ba8f = (callback)=>{
    const ref = $PJwWZ$react.useRef(callback);
    $7b65a2d264fab671$var$useIsomorphicLayoutEffect(()=>{
        ref.current = callback;
    }, [
        callback
    ]);
    return $PJwWZ$react.useCallback((...args)=>ref.current(...args)
    , []);
};


/**
 * Export the hook here so we avoid circular dependency
 */ const $53290c858fe6aad9$export$87c0cf8eb5a167e0 = ()=>{
    const context = $PJwWZ$react.useContext($53290c858fe6aad9$export$c24727297075ec6a);
    if (context === undefined) throw new Error('useForm must be used within a FormProvider');
    return context;
};
/**
 * Internal helper that the `SquareForm` uses to manage internal state and expose access to the Web Payment SDK library.
 *
 * This is available for developers who require more customization over their payment form implementation. Please refer to the
 * [customization](customization.md) page for usage details.
 */ const $53290c858fe6aad9$export$c24727297075ec6a = /*#__PURE__*/ $PJwWZ$react.createContext({
    cardTokenizeResponseReceived: null,
    createPaymentRequest: null,
    formId: '',
    payments: null
});
const $53290c858fe6aad9$export$8ce1ff4f94d08846 = ({ children: children , payments: payments , ...props })=>{
    const [createPaymentRequest] = $PJwWZ$react.useState(()=>{
        var ref;
        return (ref = props.createPaymentRequest) === null || ref === void 0 ? void 0 : ref.call(props);
    });
    const cardTokenizeResponseReceived = async (rest)=>{
        if (rest.errors || !props.createVerificationDetails) {
            props.cardTokenizeResponseReceived(rest);
            return;
        }
        const verifyBuyerResults = await (payments === null || payments === void 0 ? void 0 : payments.verifyBuyer(String(rest.token), props.createVerificationDetails()));
        props.cardTokenizeResponseReceived(rest, verifyBuyerResults);
    };
    // Fixes stale closure issue with using React Hooks & SqPaymentForm callback functions
    // https://github.com/facebook/react/issues/16956
    const cardTokenizeResponseReceivedCallback = $7b65a2d264fab671$export$aeeb7828e948ba8f(cardTokenizeResponseReceived);
    if (!payments) return null;
    const context = {
        cardTokenizeResponseReceived: // @ts-ignore: Always true error
        props.cardTokenizeResponseReceived && cardTokenizeResponseReceivedCallback,
        createPaymentRequest: createPaymentRequest,
        formId: '',
        payments: payments
    };
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($53290c858fe6aad9$export$c24727297075ec6a.Provider, {
        value: context,
        children: children
    });
};


var $1440201453c52018$exports = {};

$parcel$defineInteropFlag($1440201453c52018$exports);

$parcel$export($1440201453c52018$exports, "default", () => $1440201453c52018$export$2e2bcd8739ae039);



const { keyframes: $49ca18e2d8a364b3$export$d25ddfdf17c3ad3e , styled: $49ca18e2d8a364b3$export$3817b7a54a07cec7  } = $PJwWZ$stitchesreact.createStitches();


const $32bcad5ddae61f6f$export$42a852a2b6b56249 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    background: '#FFFFFF',
    border: '1px solid #e0e2e4',
    borderLeft: '4px solid',
    borderLeftColor: '#d92b2b',
    borderRadius: 4,
    boxShadow: '0 0 2px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 10%)',
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: '24px auto',
    maxWidth: 800,
    padding: '16px 24px 16px 16px',
    width: '100%'
});
const $32bcad5ddae61f6f$export$483e7437cf07e16f = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    alignItems: 'center',
    display: 'inline-flex',
    marginRight: 16,
    maxHeight: 24
});
const $32bcad5ddae61f6f$export$e17b9c1182212c96 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('svg', {
    display: 'inline-block',
    verticalAlign: 'middle'
});
const $32bcad5ddae61f6f$export$762240c6611b6ed2 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    flexGrow: 1,
    fontSize: 16,
    lineHeight: 28
});
const $32bcad5ddae61f6f$export$f99233281efd08a0 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('h4', {
    color: '#373f4a',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 0,
    marginTop: 0,
    letterSpacing: 0,
    lineHeight: '24px',
    textTransform: 'none'
});
const $32bcad5ddae61f6f$export$5f1af8db9871e1d6 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('p', {
    color: '#373f4a',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
    fontSize: 14,
    lineHeight: '24px',
    marginBottom: 0,
    marginTop: 0,
    maxWidth: 700,
    width: '100%',
    '& a': {
        color: '#006be6',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
});


const $1440201453c52018$var$ErrorScreen = ({ development: development = true  })=>{
    // See if we're in development mode or props.development is set
    const isDevelopment = process.env.NODE_ENV === 'development' || development;
    if (process.env.NODE_ENV !== 'development') // Show a generic error on production
    console.error('Please contact your developer to provide the required parameters to use the Web Payments SDK.');
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($32bcad5ddae61f6f$export$42a852a2b6b56249, {
        children: [
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($32bcad5ddae61f6f$export$483e7437cf07e16f, {
                children: /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($32bcad5ddae61f6f$export$e17b9c1182212c96, {
                    height: 17,
                    viewBox: "0 0 20 17",
                    width: 20,
                    children: /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("path", {
                        d: "M10.874.573l8.3 14.941A1 1 0 0118.3 17H1.7a1 1 0 01-.875-1.486l8.3-14.94a1 1 0 011.75 0zM9 12v2h2v-2H9zm2-1V7H9v4h2z",
                        fill: "#d92b2b",
                        fillRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($32bcad5ddae61f6f$export$762240c6611b6ed2, {
                children: [
                    /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($32bcad5ddae61f6f$export$f99233281efd08a0, {
                        children: isDevelopment ? 'No location ID or app ID found. Please check your configuration.' : 'Error'
                    }),
                    /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($32bcad5ddae61f6f$export$5f1af8db9871e1d6, {
                        children: isDevelopment ? /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($PJwWZ$reactjsxruntime.Fragment, {
                            children: [
                                "Please provide a location ID or app ID to use the",
                                ' ',
                                /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("a", {
                                    href: "https://developer.squareup.com/docs/web-payments/overview",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    children: "Web Payments SDK"
                                }),
                                ' ',
                                "to take payments on a web client."
                            ]
                        }) : /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($PJwWZ$reactjsxruntime.Fragment, {
                            children: "An error occurred has ocurred while loading your Payment Form."
                        })
                    })
                ]
            })
        ]
    });
};
var $1440201453c52018$export$2e2bcd8739ae039 = $1440201453c52018$var$ErrorScreen;


const $dc02c49c251f8b79$var$SquarePaymentsForm = ({ applicationId: applicationId , locationId: locationId , formId: formId = 'web-payment-sdk-form' , overrides: overrides , ...props })=>{
    const [paymentsSdk, setPaymentsSdk] = $PJwWZ$react.useState();
    $PJwWZ$react.useEffect(()=>{
        const abortController = new AbortController();
        const { signal: signal1  } = abortController;
        async function loadPayment(signal) {
            await $PJwWZ$squarewebsdk.payments(applicationId, locationId, overrides).then((res)=>{
                if (res === null) throw new Error('Square Web Payments SDK failed to load');
                if (signal === null || signal === void 0 ? void 0 : signal.aborted) return;
                setPaymentsSdk(res);
                return res;
            });
        }
        if (applicationId && locationId) loadPayment(signal1);
        return ()=>{
            abortController.abort();
        };
    }, [
        applicationId,
        locationId
    ]);
    if (!applicationId || !locationId) return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($1440201453c52018$export$2e2bcd8739ae039, {});
    if (!paymentsSdk) return null;
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($53290c858fe6aad9$export$8ce1ff4f94d08846, {
        cardTokenizeResponseReceived: props.cardTokenizeResponseReceived,
        createPaymentRequest: props.createPaymentRequest,
        createVerificationDetails: props.createVerificationDetails,
        payments: paymentsSdk,
        children: /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("div", {
            "data-testid": "rswps-form",
            id: formId,
            children: props.children
        })
    });
};
var $dc02c49c251f8b79$export$2e2bcd8739ae039 = $dc02c49c251f8b79$var$SquarePaymentsForm;





var $f2e5192adc636e46$exports = {};

$parcel$defineInteropFlag($f2e5192adc636e46$exports);

$parcel$export($f2e5192adc636e46$exports, "default", () => $f2e5192adc636e46$export$2e2bcd8739ae039);



const $8da67d8b62610fc6$export$17d680238e50603e = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    background: 'rgba(0, 0, 0, 0.1)',
    color: 'rgba(0, 0, 0, 0.55)',
    fontSize: 12,
    height: 1,
    lineHeight: '20px',
    margin: '30px 0',
    position: 'relative',
    textTransform: 'uppercase',
    width: '100%'
});
const $8da67d8b62610fc6$export$74fca5aa59b4e41e = $49ca18e2d8a364b3$export$3817b7a54a07cec7('span', {
    background: '#FAFAFA',
    fontFamily: 'sans-serif, system-ui',
    left: 'calc(50% - 1em - 5px)',
    padding: '0 10px',
    position: 'absolute',
    top: -10
});


const $f2e5192adc636e46$var$Separator = ({ overrideLineStyles: overrideLineStyles , overrideSpanStyles: overrideSpanStyles , text: text = 'or'  })=>/*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($8da67d8b62610fc6$export$17d680238e50603e, {
        // @ts-ignore - This is a workaround for a bug in TypeScript
        css: overrideLineStyles,
        children: /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($8da67d8b62610fc6$export$74fca5aa59b4e41e, {
            // @ts-ignore - This is a workaround for a bug in TypeScript
            css: overrideSpanStyles,
            children: text
        })
    })
;
var $f2e5192adc636e46$export$2e2bcd8739ae039 = $f2e5192adc636e46$var$Separator;



var $bc1a75ff5b3aa6ba$exports = {};

$parcel$defineInteropFlag($bc1a75ff5b3aa6ba$exports);

$parcel$export($bc1a75ff5b3aa6ba$exports, "default", () => $bc1a75ff5b3aa6ba$export$2e2bcd8739ae039);



const $e28650985fc043a6$export$78edecf24b955182 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('button', {
    backgroundColor: '#006aff',
    borderRadius: 5,
    boxShadow: 1,
    color: '#fff',
    cursor: 'pointer',
    borderStyle: 'none',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    outline: 'none',
    padding: 12,
    userSelect: 'none',
    width: '100%',
    '&:active': {
        backgroundColor: 'rgb(0, 85, 204)'
    },
    '&:disabled': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        color: 'rgba(0, 0, 0, 0.3)',
        cursor: 'not-allowed'
    },
    span: {
        lineHeight: 1,
        verticalAlign: 'middle'
    }
});
const $e28650985fc043a6$export$dbcb8210e8a983ed = $49ca18e2d8a364b3$export$3817b7a54a07cec7('svg', {
    display: 'inline-flex',
    height: 24,
    marginRight: 14,
    verticalAlign: 'middle',
    width: 36
});




const $c8851555b21bfb18$export$446ddc3de119a35c = (element)=>{
    if (element && "current" in element) return element.current;
    return element;
};


var ref;
const $404e24681a2e3629$export$48d7c418edadb60c = !(typeof window !== 'undefined' && ((ref = window.document) === null || ref === void 0 ? void 0 : ref.createElement));




const $a3101ecf4fa39824$export$7080b3e976bc91ab = ({ type: type , listener: listener , element: element = $404e24681a2e3629$export$48d7c418edadb60c ? undefined : window , options: options  })=>{
    const savedListener = $PJwWZ$react.useRef();
    $PJwWZ$react.useEffect(()=>{
        savedListener.current = listener;
    }, [
        listener
    ]);
    const handleEventListener = $PJwWZ$react.useCallback((event)=>{
        var ref;
        (ref = savedListener.current) === null || ref === void 0 ? void 0 : ref.call(savedListener, event);
    }, []);
    $PJwWZ$react.useEffect(()=>{
        const target = $c8851555b21bfb18$export$446ddc3de119a35c(element);
        target === null || target === void 0 ? void 0 : target.addEventListener(type, handleEventListener, options);
        return ()=>{
            return target === null || target === void 0 ? void 0 : target.removeEventListener(type, handleEventListener);
        };
    }, [
        type,
        element,
        options,
        handleEventListener
    ]);
};


/**
 * Renders a ACH button to use in the Square Web Payment SDK, pre-styled to meet Square branding guidelines.
 *
 * **_But with the option to override styles_**
 *
 * @example
 * ```tsx
 * <SquareForm {...props}>
 *  <AchPay />
 * </SquareForm>
 * ```
 */ const $bc1a75ff5b3aa6ba$var$AchPay = ({ children: children , overrideSvgStyles: overrideSvgStyles , overrideStyles: overrideStyles , ...props })=>{
    const [achPay, setAchPay] = $PJwWZ$react.useState(()=>undefined
    );
    const [isSubmitting, setIsSubmitting] = $PJwWZ$react.useState(false);
    const { cardTokenizeResponseReceived: cardTokenizeResponseReceived , payments: payments  } = $53290c858fe6aad9$export$87c0cf8eb5a167e0();
    const buttonRef = $PJwWZ$react.useRef(null);
    /**
   * Handle the on click of the ACH button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */ const handlePayment = async ()=>{
        setIsSubmitting(true);
        try {
            const result = await (achPay === null || achPay === void 0 ? void 0 : achPay.tokenize(props));
            if (result) {
                setIsSubmitting(false);
                return cardTokenizeResponseReceived(result);
            }
        } catch (ex) {
            setIsSubmitting(false);
            console.error(ex);
        }
    };
    $PJwWZ$react.useEffect(()=>{
        const start = async ()=>{
            await (payments === null || payments === void 0 ? void 0 : payments.ach().then((res)=>{
                setAchPay(res);
                return res;
            }));
        };
        start();
    }, [
        payments
    ]);
    $a3101ecf4fa39824$export$7080b3e976bc91ab({
        listener: handlePayment,
        type: 'click',
        element: buttonRef,
        options: {
            passive: true
        }
    });
    if (children) return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($e28650985fc043a6$export$78edecf24b955182, {
        // @ts-ignore - This is a workaround for a bug in TypeScript
        css: overrideStyles,
        id: "pay-with-ach",
        ref: buttonRef,
        type: "button",
        children: children
    });
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($e28650985fc043a6$export$78edecf24b955182, {
        "aria-disabled": !achPay || isSubmitting,
        // @ts-ignore - This is a workaround for a bug in TypeScript
        css: overrideStyles,
        disabled: !achPay || isSubmitting,
        id: "pay-with-ach",
        ref: buttonRef,
        type: "button",
        children: [
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($e28650985fc043a6$export$dbcb8210e8a983ed, {
                // @ts-ignore - This is a workaround for a bug in TypeScript
                css: overrideSvgStyles,
                fill: "none",
                height: "1em",
                viewBox: "0 0 36 24",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("rect", {
                        fill: "url(#prefix__paint0_linear)",
                        height: 24,
                        rx: 4,
                        width: 36
                    }),
                    /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("path", {
                        clipRule: "evenodd",
                        d: "M18.509 6.16a.89.89 0 00-1.018 0l-6.124 4.285a.848.848 0 00-.325.96.873.873 0 00.833.595h1.75v4.286h-1.75a.866.866 0 00-.875.857c0 .473.392.857.875.857h12.25a.866.866 0 00.875-.857.866.866 0 00-.875-.857h-1.75V12h1.75c.38 0 .717-.24.833-.596a.848.848 0 00-.324-.959L18.509 6.16zm2.116 10.126V12h-5.25v4.286h5.25zM18 7.91l3.395 2.376h-6.79L18 7.91z",
                        fill: "#fff",
                        fillRule: "evenodd"
                    }),
                    /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("defs", {
                        children: /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs("linearGradient", {
                            gradientUnits: "userSpaceOnUse",
                            id: "prefix__paint0_linear",
                            x1: 36,
                            x2: 0,
                            y1: 12,
                            y2: 12,
                            children: [
                                /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("stop", {
                                    stopColor: "#01D09E"
                                }),
                                /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("stop", {
                                    offset: 1,
                                    stopColor: "#03E4AE"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("span", {
                children: "Pay with Direct debit (ACH)"
            })
        ]
    });
};
var $bc1a75ff5b3aa6ba$export$2e2bcd8739ae039 = $bc1a75ff5b3aa6ba$var$AchPay;






const $d0bc536d8befb6a4$export$cda095f4886c963e = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    ApplePayButtonStyle: 'black',
    ApplePayButtonType: 'plain',
    cursor: 'pointer',
    display: 'inline-block',
    height: 48,
    WebkitAppearance: '-apple-pay-button',
    width: '100%'
});




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
 */ const $7872206b0bb35235$var$ApplePay = ()=>{
    const [applePay, setApplePay] = $PJwWZ$react.useState(()=>undefined
    );
    const { cardTokenizeResponseReceived: cardTokenizeResponseReceived , createPaymentRequest: createPaymentRequest , payments: payments  } = $53290c858fe6aad9$export$87c0cf8eb5a167e0();
    const divRef = $PJwWZ$react.useRef(null);
    if (!createPaymentRequest) throw new Error('`createPaymentRequest()` is required when using digital wallets');
    /**
   * Handle the on click of the Apple Pay button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */ const handlePayment = async (e)=>{
        e.preventDefault();
        try {
            const result = await (applePay === null || applePay === void 0 ? void 0 : applePay.tokenize());
            if (result) return cardTokenizeResponseReceived(result);
        } catch (e1) {
            console.error(e1);
        }
    };
    $PJwWZ$react.useEffect(()=>{
        /**
     * Initialize the Apple Pay instance to be used in the component
     */ const start = async ()=>{
            const paymentRequest = payments === null || payments === void 0 ? void 0 : payments.paymentRequest(createPaymentRequest);
            try {
                // @ts-ignore - PaymentRequest is defined in the types
                await (payments === null || payments === void 0 ? void 0 : payments.applePay(paymentRequest).then((res)=>{
                    setApplePay(res);
                    return res;
                }));
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        };
        start();
    }, [
        createPaymentRequest,
        payments
    ]);
    $a3101ecf4fa39824$export$7080b3e976bc91ab({
        listener: handlePayment,
        type: 'click',
        element: divRef,
        options: {
            passive: true
        }
    });
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($d0bc536d8befb6a4$export$cda095f4886c963e, {
        // We need to make this styles to be able to use event listener
        css: {
            display: applePay ? 'block' : 'none',
            opacity: applePay ? 1 : 0.5,
            pointerEvents: applePay ? 'auto' : 'none',
            visibility: applePay ? 'visible' : 'hidden'
        },
        id: "apple-pay-button",
        ref: divRef
    });
};
var $7872206b0bb35235$export$2e2bcd8739ae039 = $7872206b0bb35235$var$ApplePay;


var $91887c9404d0d427$exports = {};

$parcel$defineInteropFlag($91887c9404d0d427$exports);

$parcel$export($91887c9404d0d427$exports, "default", () => $91887c9404d0d427$export$2e2bcd8739ae039);



const $df16d68aedf5b6e8$var$pulse = $49ca18e2d8a364b3$export$d25ddfdf17c3ad3e({
    '0%, 100%': {
        opacity: 1
    },
    '50%': {
        opacity: 0.5
    }
});
const $df16d68aedf5b6e8$export$b10be6369db8de81 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    animation: `${$df16d68aedf5b6e8$var$pulse()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    background: '#F3F4F6',
    borderRadius: 6,
    height: 50,
    marginBottom: 39,
    position: 'relative'
});
const $df16d68aedf5b6e8$export$78edecf24b955182 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('button', {
    backgroundColor: '#006aff',
    borderRadius: 5,
    boxShadow: 1,
    color: '#fff',
    cursor: 'pointer',
    borderStyle: 'none',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    outline: 'none',
    padding: 12,
    userSelect: 'none',
    width: '100%',
    '&:active': {
        backgroundColor: 'rgb(0, 85, 204)'
    },
    '&:disabled': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        color: 'rgba(0, 0, 0, 0.3)',
        cursor: 'not-allowed'
    }
});




/**
 * Renders a Credit Card Input to use in the Square Web Payment SDK, pre-styled to meet Square branding guidelines.
 *
 * **_But with the option to override styles_**
 *
 * @example
 * ```tsx
 * <SquareForm {...props}>
 *  <CreditCardInput focus="cardNumber" />
 * </SquareForm>
 * ```
 */ const $91887c9404d0d427$var$CreditCardInput = ({ cardBrandChanged: cardBrandChanged , cardContainerId: cardContainerId = 'card-container' , children: children , errorClassAdded: errorClassAdded , errorClassRemoved: errorClassRemoved , focus: focus = 'cardNumber' , focusClassAdded: focusClassAdded , focusClassRemoved: focusClassRemoved , overrideStyles: overrideStyles , postalCodeChanged: postalCodeChanged , recalculateSize: recalculateSize , scape: scape , submit: submit , submitButtonId: submitButtonId = 'pay-with-card' , text: text = 'Pay' , ...props1 })=>{
    const [card1, setCard] = $PJwWZ$react.useState(()=>undefined
    );
    const [isSubmitting, setIsSubmitting] = $PJwWZ$react.useState(false);
    const { cardTokenizeResponseReceived: cardTokenizeResponseReceived , payments: payments  } = $53290c858fe6aad9$export$87c0cf8eb5a167e0();
    const buttonRef = $PJwWZ$react.useRef(null);
    /**
   * Handle the on click of the Credit Card button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */ const handlePayment = async ()=>{
        setIsSubmitting(true);
        try {
            const result = await (card1 === null || card1 === void 0 ? void 0 : card1.tokenize());
            if (result) {
                setIsSubmitting(false);
                return cardTokenizeResponseReceived(result);
            }
        } catch (ex) {
            setIsSubmitting(false);
            console.error(ex);
        }
    };
    $PJwWZ$react.useEffect(()=>{
        /**
     * Initialize the Card instance to be used in the component
     */ const abortController = new AbortController();
        const { signal: signal1  } = abortController;
        const start = async (signal)=>{
            const card = await (payments === null || payments === void 0 ? void 0 : payments.card({
                ...props1
            }).then((res)=>{
                if (!signal.aborted) {
                    setCard(res);
                    return res;
                }
                return null;
            }));
            await (card === null || card === void 0 ? void 0 : card.attach(`#${cardContainerId}`));
            if (focus) await (card === null || card === void 0 ? void 0 : card.focus(focus));
            if (signal.aborted) card === null || card === void 0 ? void 0 : card.destroy();
        };
        start(signal1);
        return ()=>{
            abortController.abort();
        };
    }, [
        payments,
        cardContainerId
    ]);
    $PJwWZ$react.useEffect(()=>{
        if (card1) card1.configure(props1);
    }, [
        card1,
        props1
    ]);
    $PJwWZ$react.useEffect(()=>{
        if (card1 && focus) card1 === null || card1 === void 0 ? void 0 : card1.focus(focus);
    }, [
        card1,
        focus
    ]);
    $a3101ecf4fa39824$export$7080b3e976bc91ab({
        listener: handlePayment,
        type: 'click',
        element: buttonRef,
        options: {
            passive: true
        }
    });
    if (cardBrandChanged) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('cardBrandChanged', cardBrandChanged);
    if (errorClassAdded) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('errorClassAdded', errorClassAdded);
    if (errorClassRemoved) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('errorClassRemoved', errorClassRemoved);
    if (scape) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('escape', scape);
    if (focusClassAdded) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('focusClassAdded', focusClassAdded);
    if (focusClassRemoved) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('focusClassRemoved', focusClassRemoved);
    if (postalCodeChanged) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('postalCodeChanged', postalCodeChanged);
    if (recalculateSize) recalculateSize(card1 === null || card1 === void 0 ? void 0 : card1.recalculateSize);
    if (submit) card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('submit', submit);
    const Button = (props)=>{
        /*#__PURE__*/ return $PJwWZ$reactjsxruntime.jsx($df16d68aedf5b6e8$export$78edecf24b955182, {
            ...props,
            "aria-disabled": !card1 || isSubmitting,
            // @ts-ignore - This is a workaround for a bug in TypeScript
            css: (props === null || props === void 0 ? void 0 : props.css) || overrideStyles,
            disabled: !card1 || isSubmitting,
            id: submitButtonId,
            ref: buttonRef,
            type: "button",
            children: (props === null || props === void 0 ? void 0 : props.children) || text
        });
    };
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($PJwWZ$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("div", {
                "data-testid": "rswps-card-container",
                id: cardContainerId,
                style: {
                    minHeight: 89
                },
                children: !card1 && /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($df16d68aedf5b6e8$export$b10be6369db8de81, {})
            }),
            children && typeof children !== 'function' ? /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx(Button, {
                children: children
            }) : typeof children === 'function' ? children({
                Button: Button
            }) : /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx(Button, {})
        ]
    });
};
var $91887c9404d0d427$export$2e2bcd8739ae039 = $91887c9404d0d427$var$CreditCardInput;



var $5e2f8d6e21b4fe8f$exports = {};

$parcel$defineInteropFlag($5e2f8d6e21b4fe8f$exports);

$parcel$export($5e2f8d6e21b4fe8f$exports, "default", () => $5e2f8d6e21b4fe8f$export$2e2bcd8739ae039);



const $eb1da5d5213efd32$var$pulse = $49ca18e2d8a364b3$export$d25ddfdf17c3ad3e({
    '0%, 100%': {
        opacity: 1
    },
    '50%': {
        opacity: 0.5
    }
});
const $eb1da5d5213efd32$export$b10be6369db8de81 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('div', {
    animation: `${$eb1da5d5213efd32$var$pulse()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    background: '#F3F4F6',
    borderRadius: 6,
    height: 50,
    marginBottom: 39,
    position: 'relative'
});
const $eb1da5d5213efd32$export$78edecf24b955182 = $49ca18e2d8a364b3$export$3817b7a54a07cec7('button', {
    backgroundColor: '#006aff',
    borderRadius: 5,
    boxShadow: 1,
    color: '#fff',
    cursor: 'pointer',
    borderStyle: 'none',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    outline: 'none',
    padding: 12,
    userSelect: 'none',
    width: '100%',
    '&:active': {
        backgroundColor: 'rgb(0, 85, 204)'
    },
    '&:disabled': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        color: 'rgba(0, 0, 0, 0.3)',
        cursor: 'not-allowed'
    }
});




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
 */ const $5e2f8d6e21b4fe8f$var$GiftCardInput = ({ overrideStyles: overrideStyles , ...props })=>{
    const [giftCard, setGiftCard] = $PJwWZ$react.useState(()=>undefined
    );
    const [isSubmitting, setIsSubmitting] = $PJwWZ$react.useState(false);
    const { cardTokenizeResponseReceived: cardTokenizeResponseReceived , payments: payments  } = $53290c858fe6aad9$export$87c0cf8eb5a167e0();
    const buttonRef = $PJwWZ$react.useRef(null);
    /**
   * Handle the on click of the Gift Card button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */ const handlePayment = async ()=>{
        setIsSubmitting(true);
        try {
            const result = await (giftCard === null || giftCard === void 0 ? void 0 : giftCard.tokenize());
            if (result) {
                setIsSubmitting(false);
                return cardTokenizeResponseReceived(result);
            }
        } catch (ex) {
            setIsSubmitting(false);
            console.error(ex);
        }
    };
    $PJwWZ$react.useEffect(()=>{
        /**
     * Initialize the Gift Card instance to be used in the component
     */ const abortController = new AbortController();
        const { signal: signal1  } = abortController;
        const start = async (signal)=>{
            const gCard = await (payments === null || payments === void 0 ? void 0 : payments.giftCard({
                ...props
            }).then((res)=>{
                if (!signal.aborted) {
                    setGiftCard(res);
                    return res;
                }
                return null;
            }));
            await (gCard === null || gCard === void 0 ? void 0 : gCard.attach('#gift-card-container'));
        };
        start(signal1);
        return ()=>{
            abortController.abort();
        };
    }, [
        payments
    ]);
    $PJwWZ$react.useEffect(()=>{
        giftCard === null || giftCard === void 0 ? void 0 : giftCard.configure(props);
    }, [
        props
    ]);
    $a3101ecf4fa39824$export$7080b3e976bc91ab({
        listener: handlePayment,
        type: 'click',
        element: buttonRef,
        options: {
            passive: true
        }
    });
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsxs($PJwWZ$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("div", {
                id: "gift-card-container",
                style: {
                    minHeight: 89
                },
                children: !giftCard && /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($eb1da5d5213efd32$export$b10be6369db8de81, {})
            }),
            /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx($eb1da5d5213efd32$export$78edecf24b955182, {
                "aria-disabled": !giftCard || isSubmitting,
                // @ts-ignore - This is a workaround for a bug in TypeScript
                css: overrideStyles,
                disabled: !giftCard || isSubmitting,
                id: "pay-with-gift-card",
                ref: buttonRef,
                type: "button",
                children: "Pay with Gift Card"
            })
        ]
    });
};
var $5e2f8d6e21b4fe8f$export$2e2bcd8739ae039 = $5e2f8d6e21b4fe8f$var$GiftCardInput;



var $d200a11018bd61f2$exports = {};

$parcel$defineInteropFlag($d200a11018bd61f2$exports);

$parcel$export($d200a11018bd61f2$exports, "default", () => $d200a11018bd61f2$export$2e2bcd8739ae039);




const $d200a11018bd61f2$var$defaultProps = {
    buttonColor: 'black',
    buttonSizeMode: 'fill',
    buttonType: 'long'
};
/**
 * Renders a Google Pay button to use in the Square Web Payment SDK, pre-styled to meet Google's branding guidelines.
 *
 * **Remember** that you need to set `createPaymentRequest()` in `SquareForm`
 * if you going to use this Payment Method
 *
 * @example
 * ```tsx
 * <SquareForm {...props}>
 *  <GooglePay buttonColor="white" />
 * </SquareForm>
 * ```
 */ const $d200a11018bd61f2$var$GooglePay = (props)=>{
    const [googlePay1, setGooglePay] = $PJwWZ$react.useState(()=>undefined
    );
    const { cardTokenizeResponseReceived: cardTokenizeResponseReceived , createPaymentRequest: createPaymentRequest , payments: payments  } = $53290c858fe6aad9$export$87c0cf8eb5a167e0();
    const divRef = $PJwWZ$react.useRef(null);
    if (!createPaymentRequest) throw new Error('`createPaymentRequest()` is required when using digital wallets');
    /**
   * Handle the on click of the Google Pay button click
   *
   * @param e An event which takes place in the DOM.
   * @returns The data be sended to `cardTokenizeResponseReceived()` function, or an error
   */ const handlePayment = async (e)=>{
        e.preventDefault();
        try {
            const result = await (googlePay1 === null || googlePay1 === void 0 ? void 0 : googlePay1.tokenize());
            if (result) return cardTokenizeResponseReceived(result);
        } catch (e1) {
            console.error(e1);
        }
    };
    // Avoid re-rendering the component when the google pay is not ready
    const googlePayProps = Object.keys(props).length > 0 ? props : undefined;
    $PJwWZ$react.useEffect(()=>{
        /**
     * Initialize the Google Pay instance to be used in the component
     */ const start = async ()=>{
            const paymentRequest = payments === null || payments === void 0 ? void 0 : payments.paymentRequest(createPaymentRequest);
            const googlePay = await (payments === null || payments === void 0 ? void 0 : payments.googlePay(paymentRequest).then((res)=>{
                setGooglePay(res);
                return res;
            }));
            const options = {
                ...$d200a11018bd61f2$var$defaultProps,
                ...googlePayProps
            };
            await (googlePay === null || googlePay === void 0 ? void 0 : googlePay.attach('#google-pay-button', options));
        };
        start();
    }, [
        createPaymentRequest,
        payments,
        googlePayProps
    ]);
    $a3101ecf4fa39824$export$7080b3e976bc91ab({
        listener: handlePayment,
        type: 'click',
        element: divRef,
        options: {
            passive: true
        }
    });
    return /*#__PURE__*/ $PJwWZ$reactjsxruntime.jsx("div", {
        id: "google-pay-button",
        ref: divRef,
        style: {
            height: 40
        }
    });
};
var $d200a11018bd61f2$export$2e2bcd8739ae039 = $d200a11018bd61f2$var$GooglePay;



$parcel$exportWildcard(module.exports, $dc02c49c251f8b79$exports);
$parcel$exportWildcard(module.exports, $1440201453c52018$exports);
$parcel$exportWildcard(module.exports, $f2e5192adc636e46$exports);
$parcel$exportWildcard(module.exports, $bc1a75ff5b3aa6ba$exports);
$parcel$exportWildcard(module.exports, $91887c9404d0d427$exports);
$parcel$exportWildcard(module.exports, $5e2f8d6e21b4fe8f$exports);
$parcel$exportWildcard(module.exports, $d200a11018bd61f2$exports);


//# sourceMappingURL=rswps.cjs.js.map
