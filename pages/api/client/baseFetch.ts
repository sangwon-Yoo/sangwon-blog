type baseFetchArgs = {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    returnType?: 'JSON' | 'BLOB';
    body?: BodyInit | null;
}

export async function baseFetch<T>({ url, method = 'GET', returnType = 'JSON', body }: baseFetchArgs): Promise<T> {

    try{
        const response = await fetch(url, {
            method,
            body : body ? JSON.stringify(body) : undefined,
            headers : body ? {
                'Content-Type' : 'application/json',
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