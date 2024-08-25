import { NextResponse } from 'next/server'

function sleep(ms:number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function GET(request: Request) {
  try {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardsets.php',{cache:'no-store'});
    const result = await response.json();

    // 여기에 NextResponse를 반환합니다.
    return NextResponse.json({ msg: 'Hello from server', data: result });
  } catch (error : any) {
    console.error('Error fetching data:', error);

    // 오류 발생 시에도 Response를 반환합니다.
    return NextResponse.json({ msg: 'An error occurred', error: error.message }, { status: 500 });
  }
}