'use client';

import { useState } from 'react';
import { postMessage } from '@/api/TEST';
import { PostMessageRequest } from '@/types/api/reqest';
import { PostMessageResponse } from '@/types/api/response';

export default function HomePage() {
  const [response, setResponse] = useState<PostMessageResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const req:PostMessageRequest = { message: 'こんにちは！' };

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await postMessage(req);
      setResponse(res);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <button onClick={handleClick} disabled={loading}>
        {loading ? '送信中...' : 'メッセージ送信'}
      </button>

      {response && (
        <pre style={{ color: 'green' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}

      {error && (
        <pre style={{ color: 'red' }}>
          エラー: {error}
        </pre>
      )}
    </main>
  );
}
