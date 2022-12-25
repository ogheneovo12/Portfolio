import React, { SVGProps } from 'react';

export const CurrenciesIcon = React.forwardRef(
    (props: SVGProps<SVGSVGElement>, ref: React.LegacyRef<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            ref={ref}
            {...props}
        >
            <path
                d="M10.5 5.26664C10.5 2.68948 14.4177 0.599976 19.25 0.599976C24.0823 0.599976 28 2.68948 28 5.26664C28 7.84381 24.0823 9.93331 19.25 9.93331C14.4177 9.93331 10.5 7.84381 10.5 5.26664ZM19.25 12.2666C18.0518 12.2666 16.9155 12.1325 15.8772 11.8991C14.2917 10.7103 11.6935 9.93331 8.75 9.93331C3.91767 9.93331 0 12.0228 0 14.6C0 17.1771 3.91767 19.2666 8.75 19.2666C13.5823 19.2666 17.5 17.1771 17.5 14.6C17.5 14.5661 17.4918 14.5335 17.4907 14.4996H17.5V16.9333C17.5 19.5105 13.5823 21.6 8.75 21.6C3.91767 21.6 0 19.5105 0 16.9333V19.2666C0 21.8438 3.91767 23.9333 8.75 23.9333C13.5823 23.9333 17.5 21.8438 17.5 19.2666V21.6C17.5 24.1771 13.5823 26.2666 8.75 26.2666C3.91767 26.2666 0 24.1771 0 21.6V23.9333C0 26.5105 3.91767 28.6 8.75 28.6C13.5823 28.6 17.5 26.5105 17.5 23.9333V23.84C18.0658 23.9006 18.6503 23.9333 19.25 23.9333C24.0823 23.9333 28 21.8438 28 19.2666V16.9333C28 19.4055 24.3927 21.4238 19.8333 21.5848V19.2515C24.3927 19.0905 28 17.0733 28 14.6V12.2666C28 14.7388 24.3927 16.7571 19.8333 16.9181V14.5848C24.3927 14.4238 28 12.4066 28 9.93331V7.59998C28 10.1771 24.0823 12.2666 19.25 12.2666Z"
                fill="currentColor"
            />
        </svg>
    ),
);
