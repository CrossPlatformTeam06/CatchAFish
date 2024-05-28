// api.js

const fetchFishData = async (searchTerm) => {
    try {
        // 여기서는 더미 데이터를 직접 정의합니다.
        const dummyData = [
            {
                mfSpeciesKor: "넙치",
                mfColor: "넙치의 색상 설명",
                mfDistribution: "넙치의 분포 설명",
                mfFeature: "넙치의 특징 설명"
            },
            {
                mfSpeciesKor: "청새치",
                mfColor: "청새치의 색상 설명",
                mfDistribution: "청새치의 분포 설명",
                mfFeature: "청새치의 특징 설명"
            }
        ];

        // 검색어가 있을 경우 해당하는 항목만 필터링합니다.
        const filteredData = searchTerm
            ? dummyData.filter(item => item.mfSpeciesKor.includes(searchTerm))
            : dummyData;

        return filteredData;
    } catch (error) {
        console.error('Error fetching fish data:', error);
        throw error;
    }
};

export { fetchFishData };
