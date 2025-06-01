// utils/api/postMessage.ts

import { PostMessageRequest } from '@/types/api/reqest';
import { PostMessageResponse } from '@/types/api/response';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

export async function postMessage(
  payload: PostMessageRequest
): Promise<PostMessageResponse> {
  const res = await fetch(`${BASE_URL}/api/echo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
