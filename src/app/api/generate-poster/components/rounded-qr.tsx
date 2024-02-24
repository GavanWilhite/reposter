import React, { useState, useEffect } from 'react';

interface QRProps {
    data: any;
    lightColor?: string;
    darkColor?: string;
}

export default function RoundedQRCode(props: QRProps) {
    let { data, lightColor: backgroundColor, darkColor: foregroundColor } = props;

    foregroundColor = foregroundColor || '#000000';
    backgroundColor = backgroundColor || '#ffffff';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            width: '320px',
            height: '320px',
            borderColor: foregroundColor,
            backgroundColor: backgroundColor,
            borderRadius: '3%',
            border: '5px solid',
            color: foregroundColor,
        }}>
            <img
                style={{
                    width: '65%',
                    height: '65%',
                    margin: 'auto',
                }}
                src={data}
                alt="QR Code"
            />
            <div className="text-center text-xs font-bold" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '50px',
                position: 'absolute',
                top: '-3px',
                margin: '0',
                padding: '0',
            }}>CHANGE</div>
            <div className="text-center text-xs font-bold" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '50px',
                position: 'absolute',
                bottom: '5px',
                margin: '0',
                padding: '0',
            }}>THIS POSTER</div>
        </div>
    );
}
