export class ApiService {
    async get(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
        }
        return await response.json();
    }

    async post(url,data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Error posting data to ${url}: ${response.statusText}`);
        }
        return await response.json()
    }
}

