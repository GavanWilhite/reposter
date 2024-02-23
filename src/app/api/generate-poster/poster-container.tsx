import { FontStyle } from './utils/types';

export interface PosterContainerProps {
    template: PosterTemplate;
    textEntries: string[];
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
};

export const PosterContainer = ({ template, textEntries }: PosterContainerProps) => {
    const { Component: PosterComponent } = template;
    return (
        <div style={{display:'flex'}}>
            <PosterComponent textEntries={textEntries} />
        </div>
    )
}
