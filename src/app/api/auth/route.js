import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const kuki = cookies();
  const {username, password} = await request.json();
  const URL_LOGIN = "https://dummyjson.com/auth/login";

  const resp = await fetch(URL_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  });

  const data = await resp.json();
  const TOKEN = data.token;

  if (resp.ok) {

    const SIX_HOURS_IN_MS = 6 * 60 * 60 * 1000; // 6 Hours
    const expires = new Date(Date.now() + SIX_HOURS_IN_MS);

    kuki.set('token', TOKEN, { expires, httpOnly: true });

    return NextResponse.json(data);
  }
}