import { kv } from '@vercel/kv';
import { Generator } from './generator';

const Page = () => {
  async function recordGeneration(posterProps: string) {
    'use server';
    await kv.lpush('generated-posters', posterProps);
    console.log('Recorded poster generation');
  }
  
  return (
    <Generator record={recordGeneration}/>
  );
};

export default Page;
