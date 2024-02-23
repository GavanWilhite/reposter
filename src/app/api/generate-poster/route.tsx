import { NextRequest } from 'next/server';
import { PosterContainer, PosterTemplate } from './poster-container';
import { WomanPointingPosterTemplate } from './posters/woman-pointing';
import { ImageResponse } from '@vercel/og'
import { FontOptions } from './utils/types';
import { getHostPrefixedUrl } from './utils/host-prefix';

export const runtime = 'edge';

const posters:Map<string, PosterTemplate> = new Map([
    [ 'woman-pointing',  WomanPointingPosterTemplate],
]);

export async function GET(req: NextRequest) {
    try {

        const { searchParams } = new URL(req.url);

        const templateName = searchParams.get('template') || 'woman-pointing';
        const template = posters.get(templateName) || WomanPointingPosterTemplate;

        const arrayOfText = searchParams.getAll('text') || ['Example', 'Text', 'Here'];
        
        const fonts = await Promise.all(
            template.fonts?.map(async (font) => {
                const url = getHostPrefixedUrl(font.relativeUrl);
                const data = await fetch(url).then((res) => res.arrayBuffer());
                return {
                    name: font.name,
                    data,
                    style: font.style,
                };
            }) || []
        );

        return new ImageResponse(
            (
                <PosterContainer template={template} textEntries={arrayOfText}
                />
            ),
            {
                width: template.width,
                height: template?.height, 
                emoji: 'fluent',
                fonts: [
                    ...fonts
                ],
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500
        });
    }
}