import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const calculation = body.total == body.fromKaspi + body.fromOther + body.fromCash; 
  if (calculation)
  { 
    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
   });
  }

  return new NextResponse(JSON.stringify({ success: false }), {
    status: 400,
    headers: {
      'Content-Type': 'application/json',
      }
    });
}
