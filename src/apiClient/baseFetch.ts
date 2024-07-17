export type baseFetchArgs = {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    contentsType?: 'application/json'; // ++ 추가가능
    returnType?: 'JSON' | 'BLOB';
    body?: BodyInit | null;
}

export async function baseFetch<T>(
    {
        url,
        method = 'GET',
        contentsType,
        returnType = 'JSON',
        body
    }: baseFetchArgs): Promise<T> {

    try{
        const response = await fetch(url, {
            method,
            body : body ? JSON.stringify(body) : undefined,
            headers : contentsType ? {
                'Content-Type' : contentsType,
            } : undefined
        });

        return returnType == 'JSON' ? await response.json() : await  response.blob();

    } catch (e) {
        if(e instanceof Error) {
            throw e;
        } else {
            throw new Error('Unknown Error');
        }
    }
}