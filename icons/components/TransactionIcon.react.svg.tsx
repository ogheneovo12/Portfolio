import React, { SVGProps } from 'react';

export const TransactionIcon = React.forwardRef(
    (props: SVGProps<SVGSVGElement>, ref: React.LegacyRef<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            {...props}
            ref={ref}
        >
            <path
                d="M15 0H3C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V23.9L3.67 21.39L6.341 23.216L9.007 21.39L11.673 23.216L14.337 21.391L18 23.9V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.31607 15.7956 0 15 0V0ZM12 14H4V12H12V14ZM14 9H4V7H14V9Z"
                fill="currentColor"
            />
        </svg>
    ),
);
