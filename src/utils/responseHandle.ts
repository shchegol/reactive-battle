export function handleResponse(response: Response) {
  return response
    .text()
    .then((text: any) => {
      if (!response.ok) {
        const data = text && JSON.parse(text);
        // Unauthorized
        // todo сделать редирект на signin
        if (response.status === 401) {
          // eslint-disable-next-line no-console
          console.error(401);
        }

        // Unexpected error
        // todo сделать редирект на 500 ошибку
        if (response.status === 500) {
          // eslint-disable-next-line no-console
          console.error(500);
        }

        const error = (data && data.reason) || response.statusText;

        return Promise.reject(error);
      }

      return text;
    });
}
