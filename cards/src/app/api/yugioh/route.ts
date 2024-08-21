import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician');
    const result = await response.json();

    console.log(result.data);

    // 여기에 NextResponse를 반환합니다.
    return NextResponse.json({ msg: 'Hello from server', data: result.data });
  } catch (error : any) {
    console.error('Error fetching data:', error);

    // 오류 발생 시에도 Response를 반환합니다.
    return NextResponse.json({ msg: 'An error occurred', error: error.message }, { status: 500 });
  }
}