'use client'; // Error boundaries must be Client Components

interface GlobalErrorProps {
  error?: Error & { digest?: string };
  reset?: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <h2>GlobalError: Something went wrong!</h2>
        {error && <p>{error.message}</p>}
        {reset && <button onClick={() => reset()}>Try again</button>}
      </body>
    </html>
  );
}