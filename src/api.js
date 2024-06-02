const fetchFishData = async (searchTerm) => {
    const apiKey = 'XzKzF3QBdphF%2BfkKWp%2BhrXiHvC9dl6RbIVa%2FqPhxn7w4qiUeOAJccOK9RczTWa5EyXjYUBcTjR6422ii5tusCg%3D%3D';
    const endpoint = `https://apis.data.go.kr/1520635/OceanBiospeciesInfoService/getOceanBiospeciesResult?serviceKey=${apiKey}&numOfRows=1000&pageNo=1`;

    try {
        console.log(`Fetching data from: ${endpoint}`);
        const response = await fetch(endpoint);
        console.log(`Response status: ${response.status}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const xmlData = await response.text();
        console.log(`XML Data: ${xmlData}`);

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        const items = xmlDoc.getElementsByTagName('item');

        const fishData = Array.from(items).map(item => {
            const speciesKorNode = item.getElementsByTagName('mfSpeciesKor')[0];
            const featureNode = item.getElementsByTagName('mfFeature')[0];
            const distributionNode = item.getElementsByTagName('mfDistribution')[0];
            const colorNode = item.getElementsByTagName('mfColor')[0];

            return {
                mfSpeciesKor: speciesKorNode ? speciesKorNode.textContent : '',
                mfFeature: featureNode ? featureNode.textContent : '',
                mfDistribution: distributionNode ? distributionNode.textContent : '',
                mfColor: colorNode ? colorNode.textContent : '',
            };
        });

        // 검색어가 있을 경우 필터링합니다.
        const filteredData = searchTerm
            ? fishData.filter(item => item.mfSpeciesKor.includes(searchTerm))
            : fishData;

        return filteredData;
    } catch (error) {
        console.error('Error fetching fish data:', error);
        throw error;
    }
};

export { fetchFishData };
