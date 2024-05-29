import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req) {
  const greeting = "hello";

  const json = {
    greeting,
  };

  return NextResponse.json(json);
}
