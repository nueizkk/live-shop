import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(
  url: string,
  method: "POST" | "GET"
): UseMutationResult {
  const [state, setState] = useState({
    loading: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then(setData)
      .then(setError)
      .finally(() => setLoading(true));
  }

  return [mutation, { loading, data, error }];
}
