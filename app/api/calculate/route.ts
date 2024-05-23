import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fromKaspi = 0, fromOther = 0, fromCash = 0 } = body;

    const total = fromKaspi + fromOther + fromCash;

    if (total > 0) {
      return new NextResponse(JSON.stringify({ success: true, total }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new NextResponse(JSON.stringify({ success: false, message: 'Общая выручка за день должна быть больше нуля' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ success: false, message: 'Некорректные данные' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
