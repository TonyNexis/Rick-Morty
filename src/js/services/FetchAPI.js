class FetchAPI {
    // constructor(url) {
    //     this.url = url;
    // }

 static async get(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not OK!');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
            throw error;
        }
    }

 static async post(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        console.log('Ответ:', data);
        return data;
    } catch (error) {
        console.error('Error when try to POST:', error);
        throw error;
    }
 }
}

export default FetchAPI;