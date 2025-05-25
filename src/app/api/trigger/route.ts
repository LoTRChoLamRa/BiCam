// import { NextResponse } from 'next/server';

// export async function POST() {
//     const message = 'API has been triggered successfully!';
//     console.log(message);
//     return NextResponse.json({ message });
// }

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const message = 'API has been triggered successfully!';
    const requestInfo = {
        method: request.method,
        url: request.url,
        headers: Object.fromEntries(request.headers),
    };
    console.log('Request Info:', requestInfo);
    console.log(message);
    return NextResponse.json({ message });
}