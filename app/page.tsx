'use client';
import { Card, Divider, Subtitle, Text } from '@tremor/react';
import { CityPicker } from '@/components';

function Home() {
  return (
      <Card className='max-w-4xl mx-auto'>
        <Text className='text-6xl font-bold text-center mb-10'>Weather.ai</Text>
        <Subtitle className='text-xl text-center'>
          Powered by OpenAI, Next.js 13.3 Tailwind CSS, Tremore 2.0 + More!
        </Subtitle>
        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-[#394F68] to-[#183B7E]'>
          <CityPicker />
        </Card>
      </Card>
    
  );
}

export default Home;
