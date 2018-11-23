import * as React from 'react';

import './LoaderSpinner.css';

interface ILoaderSpinnerProps {
    hide?: boolean;
}

type ILoaderSpinner = (props: ILoaderSpinnerProps) => JSX.Element;

const LoaderSpinner: ILoaderSpinner = (props) => {
    const className = props.hide ? 'loader hide' : 'loader';
    return (
        <div className={className}>
            <svg viewBox="0 0 32 32" width="32" height="32">
                <circle id="spinner" cx="16" cy="16" r="14" fill="none" />
            </svg>
        </div>
    );
};

export default LoaderSpinner;