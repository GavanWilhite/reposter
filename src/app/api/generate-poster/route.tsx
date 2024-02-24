import { NextRequest } from 'next/server';
import { PosterContainer, PosterTemplate, SatoriFont } from './components/poster-container';
import { WomanPointingPosterTemplate } from './posters/woman-pointing';
import { OrcaPeacePosterTemplate } from './posters/orca-peace';
import { BareBrainsPosterTemplate } from './posters/bare-brains';
import { LastVolcanoPosterTemplate } from './posters/last-volcano';
import { SadSpacePosterTemplate } from './posters/sad-space';
import { EraBrutalityPosterTemplate } from './posters/era-brutality';
import { ImageResponse } from '@vercel/og'
import { getHostPrefixedUrl } from './utils/host-prefix';
import QRCode from 'qrcode'
import { kv } from '@vercel/kv';

// export const runtime = 'edge';

const posters:Map<string, PosterTemplate> = new Map([
    [ 'woman-pointing',  WomanPointingPosterTemplate],
    [ 'orca-peace',  OrcaPeacePosterTemplate],
    [ 'bare-brains',  BareBrainsPosterTemplate],
    [ 'last-volcano',  LastVolcanoPosterTemplate],
    [ 'sad-space',  SadSpacePosterTemplate],
    [ 'era-brutality',  EraBrutalityPosterTemplate],
]);

export async function GET(req: NextRequest) {
    try {

        const { searchParams } = new URL(req.url);

        const templateName = searchParams.get('template') || 'woman-pointing';
        const template = posters.get(templateName) || WomanPointingPosterTemplate;
        const includeQr = searchParams.has('qr') || searchParams.get('qr') === 'true';
        const qrOnly = searchParams.get('poster') === 'false';

        const arrayOfText = searchParams.getAll('text') || ['Example', 'Text', 'Here'];

        const qrFont:SatoriFont = 
        {
          name: "Bebas-Regular",
          relativeUrl: "fonts/Bebas-Regular.ttf",
          style: "normal",
        };
        const allFontsToLoad = template.fonts ? [...template.fonts, qrFont] : [qrFont];
        const fonts = await Promise.all(
            allFontsToLoad.map(async (font) => {
                const url = getHostPrefixedUrl(font.relativeUrl);
                const data = await fetch(url).then((res) => res.arrayBuffer());
                return {
                    name: font.name,
                    data,
                    style: font.style,
                };
            }) || []
        );

        const generateQuery = new URLSearchParams(searchParams);
        const generateUrl = getHostPrefixedUrl(`/generate?${generateQuery}`);

        const qrSvg = await QRCode.toString(generateUrl, {
            margin: 2,
            color: {
                dark: template.darkColor || '#000',
                light: template.lightColor || '#FFF'
            },
            type:'svg'
        });

        const qrData = includeQr ? `data:image/svg+xml,${qrSvg}` : undefined;

        const width = qrOnly ? 320 : template.width;
        const height = qrOnly ? 320 : template.height;


        return new ImageResponse(
            (
                <PosterContainer template={template} textEntries={arrayOfText} qrData={qrData} qrOnly={qrOnly}
                />
            ),
            {
                width: width,
                height: height, 
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
