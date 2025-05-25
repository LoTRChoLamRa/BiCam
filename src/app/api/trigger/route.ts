import { NextResponse } from 'next/server';

export async function POST() {
    const message = 'API has been triggered successfully!';
    console.log(message);
    return NextResponse.json({ message });
}