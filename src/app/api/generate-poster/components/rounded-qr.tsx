import React, { useState, useEffect } from 'react';

interface QRProps {
    data: any;
    lightColor?: string;
    darkColor?: string;
    qrOnly?: boolean;
}

export default function RoundedQRCode(props: QRProps) {
    let { data, lightColor, darkColor, qrOnly } = props;

    console.log(qrOnly);
    darkColor = darkColor || '#000000';
    lightColor = lightColor || '#ffffff';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            bottom: qrOnly ? '0px' : '40px',
            left: qrOnly ? '0px' : '40px',
            width: '320px',
            height: '320px',
            borderColor: darkColor,
            backgroundColor: lightColor,
            borderRadius: '3%',
            border: '5px solid',
            color: darkColor,
            fontFamily: 'Bebas-Regular',
        }}>
            <img
                style={{
                    width: '70%',
                    height: '70%',
                    margin: 'auto',
                }}
                src={data}
                alt="QR Code"
            />
            <div className="text-center text-xs font-bold" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '42px',
                position: 'absolute',
                top: '0px',
                margin: '0',
                padding: '0',
            }}>MAKE</div>
            <div className="text-center text-xs font-bold" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '42px',
                position: 'absolute',
                bottom: '5px',
                margin: '0',
                padding: '0',
            }}>YOUR POSTER</div>
        </div>
    );
}
