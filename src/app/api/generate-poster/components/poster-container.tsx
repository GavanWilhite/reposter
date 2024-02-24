import { FontStyle } from '../utils/types';
import RoundedQRCode from './rounded-qr';

export interface PosterContainerProps {
    template: PosterTemplate;
    textEntries: string[];
    qrData?: string;
    qrOnly?: boolean;
}

export interface PosterProps {
    textEntries: string[];
}

export interface SatoriFont {
    name: string,
    relativeUrl: string,
    style: FontStyle,
}

export type PosterTemplate = {
    Component: React.ComponentType<PosterProps>;
    height: number;
    width: number;
    fonts?: SatoriFont[];
    lightColor?: string;
    darkColor?: string;
};

export const PosterContainer = ({ template, textEntries, qrData, qrOnly }: PosterContainerProps) => {
    const { Component: PosterComponent } = template;
    return (
        <div style={{
            display:'flex',
            width: '100%',
            height: '100%',
        }}>
            {!qrOnly && <PosterComponent textEntries={textEntries} />}
            {qrData && <RoundedQRCode data={qrData} darkColor={template.darkColor} lightColor={template.lightColor} qrOnly={qrOnly}></RoundedQRCode>}
        </div>
    )
}
