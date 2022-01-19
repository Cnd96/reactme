import React from 'react';
import Loader from "react-loader-spinner";

function LoadingComponent() {

    return (
        <div style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            display: 'flex',
            alignItem: 'center',
            overflow: 'auto',
            backgroundColor: '#a0a0a03b',
            zIndex: 999999
        }}>
            <div style={{
                margin: 'auto',
                maxHeight: '100%'
            }}>
                <Loader
                    type="Rings"
                    color="#00BFFF"
                    height={300}
                    width={300}
                />
            </div>
        </div>
    );

}

export default LoadingComponent;
