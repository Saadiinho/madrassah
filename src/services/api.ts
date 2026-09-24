const API_URL = 'http://localhost:8001/api/v1'

interface ApiOptions extends Omit<RequestInit, 'body'> {
    body?: unknown
}

export const api = async <T>(
    endpoint: string,
    options: ApiOptions = {}
): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,

        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },

        body:
            options.body !== undefined
                ? JSON.stringify(options.body)
                : undefined,
    })

    if (!response.ok) {
        const errorBody = await response.json().catch(() => null)

        console.error('Erreur API :', errorBody)

        throw new Error(
            errorBody?.detail
                ? JSON.stringify(errorBody.detail)
                : `Erreur API : ${response.status} ${response.statusText}`
        )
    }
    return response.json() as Promise<T>
}