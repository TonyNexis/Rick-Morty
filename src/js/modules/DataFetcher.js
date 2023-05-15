class DataFetcher {
    constructor(url) {
        this.url = url;
    }

    async fetchData() {
        try {
            const response = await fetch(this.url);
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
}

export default DataFetcher;
