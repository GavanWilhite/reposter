"use client";
import React, { CSSProperties, useState } from 'react';

interface PosterInfoProps {
    searchParams: string;
    approve?: (poster: string) => Promise<void>;
    reject?: (poster: string) => Promise<void>;
}

export const PosterInfo = (props: PosterInfoProps) => {
    const { searchParams } = props;
    console.log(searchParams);

    const urlSearchParams = new URLSearchParams(searchParams);
    const template = urlSearchParams.get("template");
    const texts = urlSearchParams.getAll("text");
    const includeQr = urlSearchParams.get("qr");

    // Define base button styles
    const baseButtonStyle: CSSProperties = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.1s',
    };

    // State and style handling for approve button
    const [isApproveHovered, setApproveHovered] = useState(false);
    const [isApproveClicked, setApproveClicked] = useState(false);
    const approveButtonStyle: CSSProperties = {
        ...baseButtonStyle,
        backgroundColor: isApproveClicked ? '#3e8e41' : isApproveHovered ? '#66bb6a' : '#4CAF50',
        color: 'white',
        transform: isApproveClicked ? 'scale(0.95)' : 'scale(1)',
    };

    // State and style handling for reject button
    const [isRejectHovered, setRejectHovered] = useState(false);
    const [isRejectClicked, setRejectClicked] = useState(false);
    const rejectButtonStyle: CSSProperties = {
        ...baseButtonStyle,
        backgroundColor: isRejectClicked ? '#d32f2f' : isRejectHovered ? '#ef5350' : '#f44336',
        color: 'white',
        transform: isRejectClicked ? 'scale(0.95)' : 'scale(1)',
    };

    return (
        <div style={{ backgroundColor: '#f7f7f7', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px auto', maxWidth: '500px', textAlign: 'center' }}>
            <p style={{ margin: '10px 0', color: '#333', fontSize: '16px' }}>Template: {template}</p>
            {texts.map((text, index) => (
                <p key={index} style={{ margin: '10px 0', color: '#333', fontSize: '16px' }}>Text {index + 1}: {text}</p>
            ))}
            <p style={{ margin: '10px 0', color: '#333', fontSize: '16px' }}>Include QR: {includeQr}</p>
            {props.approve && <button
                style={approveButtonStyle}
                onMouseEnter={() => setApproveHovered(true)}
                onMouseLeave={() => setApproveHovered(false)}
                onMouseDown={() => setApproveClicked(true)}
                onMouseUp={() => setApproveClicked(false)}
                onClick={() => props.approve && props.approve(searchParams)}
            >
                Approve
            </button>}
            {props.reject && <button
                style={rejectButtonStyle}
                onMouseEnter={() => setRejectHovered(true)}
                onMouseLeave={() => setRejectHovered(false)}
                onMouseDown={() => setRejectClicked(true)}
                onMouseUp={() => setRejectClicked(false)}
                onClick={() => props.reject && props.reject(searchParams)}
            >
                Reject
            </button>}
        </div>
    );
};
