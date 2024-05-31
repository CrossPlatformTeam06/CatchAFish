// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { parseString } from 'react-native-xml2js';

// export default function RecordPage({ navigation }) {
//   const [fishName, setFishName] = useState('');
//   const [fishData, setFishData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   const fetchFishData = async (pageNo) => {
//     const apiKey = 'JCB%2FHxN7y8XHjxyOjwMEL0xT5hLuQwPqQwNDJnj6s3%2Fmsy52lNkC0mROBZYtDdQJw6u1fEzJUq7brWZdWX59XA%3D%3D';
//     const url = `http://apis.data.go.kr/1520635/OceanBiospeciesInfoService/getOceanBiospeciesResult?serviceKey=${apiKey}&numOfRows=20&pageNo=${pageNo}`;

//     try {
//       setLoading(true);
//       const response = await fetch(url, { method: 'GET' });
//       if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

//       const text = await response.text();
//       console.log('Response text:', text); // 응답 확인
//       parseString(text, (err, result) => {
//         if (err) throw new Error('Error parsing XML: ' + err);

//         console.log('Parsed result:', result); // 파싱 결과 확인
//         const items = result.response.body[0].items[0].item;
//         if (!items || items.length === 0) {
//           setError('검색 결과가 없습니다.');
//           return;
//         }

//         const filteredItems = items.filter(item => item.mfSpeciesKor && item.mfSpeciesKor[0].includes(fishName));
//         if (filteredItems.length > 0) {
//           const results = filteredItems.map(item => ({
//             name: item.mfSpeciesKor ? item.mfSpeciesKor[0] : 'N/A',
//             scientificName: item.mfSciName ? item.mfSciName[0] : 'N/A',
//             habitat: item.mfDistribution ? item.mfDistribution[0] : 'N/A',
//           }));
//           console.log('Filtered results:', results); // 필터링된 결과 확인
//           setFishData(prevData => [...prevData, ...results]);
//           setError(null);
//           setLoading(false);
//         } else {
//           // 검색 결과가 없을 경우 다음 페이지로 이동
//           setPage(prevPage => prevPage + 1);
//           fetchFishData(pageNo + 1);
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching fish data:', error);
//       setError(error.toString());
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     setFishData([]);
//     setPage(1);
//     setError(null);
//     fetchFishData(1);
//   };

//   const loadMoreData = () => {
//     if (!loading) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       fetchFishData(nextPage);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>기록 페이지</Text>
//       <TextInput
//         placeholder="물고기 이름을 입력하세요"
//         value={fishName}
//         onChangeText={setFishName}
//         style={styles.input}
//       />
//       <Button title="검색" onPress={handleSearch} />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       <FlatList
//         data={fishData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.dataContainer}>
//             <Text>물고기 이름: {item.name}</Text>
//             <Text>학명: {item.scientificName}</Text>
//             <Text>서식지: {item.habitat}</Text>
//           </View>
//         )}
//         onEndReached={loadMoreData}
//         onEndReachedThreshold={0.5}
//       />
//       {error && !loading && <Text style={styles.errorText}>{error}</Text>}
//       <Button title="메인 페이지로 돌아가기" onPress={() => navigation.navigate('MainPage')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     width: '80%',
//     paddingHorizontal: 10,
//   },
//   dataContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 20,
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { parseString } from 'react-native-xml2js';

// export default function RecordPage({ navigation }) {
//   const [fishName, setFishName] = useState('');
//   const [fishData, setFishData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   const fetchFishData = async (pageNo) => {
//     const apiKey = 'JCB%2FHxN7y8XHjxyOjwMEL0xT5hLuQwPqQwNDJnj6s3%2Fmsy52lNkC0mROBZYtDdQJw6u1fEzJUq7brWZdWX59XA%3D%3D';
//     const url = `http://apis.data.go.kr/1520635/OceanBiospeciesInfoService/getOceanBiospeciesResult?serviceKey=${apiKey}&numOfRows=20&pageNo=${pageNo}`;

//     try {
//       setLoading(true);
//       const response = await fetch(url, { method: 'GET' });
//       if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

//       const text = await response.text();
//       console.log('Response text:', text); // 응답 확인
//       parseString(text, (err, result) => {
//         if (err) throw new Error('Error parsing XML: ' + err);

//         console.log('Parsed result:', result); // 파싱 결과 확인
//         const items = result.response.body[0].items[0].item;
//         if (!items || items.length === 0) {
//           setError('검색 결과가 없습니다.');
//           return;
//         }

//         const filteredItems = items.filter(item => item.mfSpeciesKor && item.mfSpeciesKor[0].includes(fishName));
//         if (filteredItems.length > 0) {
//           const results = filteredItems.map(item => ({
//             name: item.mfSpeciesKor ? item.mfSpeciesKor[0] : 'N/A',
//             scientificName: item.mfSciName ? item.mfSciName[0] : 'N/A',
//             habitat: item.mfDistribution ? item.mfDistribution[0] : 'N/A',
//           }));
//           console.log('Filtered results:', results); // 필터링된 결과 확인
//           setFishData(prevData => [...prevData, ...results]);
//           setError(null);
//           setLoading(false);
//         } else {
//           // 검색 결과가 없을 경우 다음 페이지로 이동
//           setPage(prevPage => prevPage + 1);
//           fetchFishData(pageNo + 1);
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching fish data:', error);
//       setError(error.toString());
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     setFishData([]);
//     setPage(1);
//     setError(null);
//     fetchFishData(1);
//   };

//   const loadMoreData = () => {
//     if (!loading) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       fetchFishData(nextPage);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>기록 페이지</Text>
//       <TextInput
//         placeholder="물고기 이름을 입력하세요"
//         value={fishName}
//         onChangeText={setFishName}
//         style={styles.input}
//       />
//       <Button title="검색" onPress={handleSearch} />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       <FlatList
//         data={fishData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.dataContainer}>
//             <Text>물고기 이름: {item.name}</Text>
//             <Text>학명: {item.scientificName}</Text>
//             <Text>서식지: {item.habitat}</Text>
//           </View>
//         )}
//         onEndReached={loadMoreData}
//         onEndReachedThreshold={0.5}
//       />
//       {error && !loading && <Text style={styles.errorText}>{error}</Text>}
//       <Button title="메인 페이지로 돌아가기" onPress={() => navigation.navigate('MainPage')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     width: '80%',
//     paddingHorizontal: 10,
//   },
//   dataContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 20,
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { parseString } from 'react-native-xml2js';

export default function RecordPage({ navigation }) {
  const [fishName, setFishName] = useState('');
  const [fishData, setFishData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFishData = async () => {
    const apiKey = 'JCB%2FHxN7y8XHjxyOjwMEL0xT5hLuQwPqQwNDJnj6s3%2Fmsy52lNkC0mROBZYtDdQJw6u1fEzJUq7brWZdWX59XA%3D%3D'; // 여기에 실제 API 키를 입력하세요
    const url = `http://apis.data.go.kr/B553482/mbrisdataview?serviceKey=${apiKey}&numOfRows=20&pageNo=1&commKorNm=${encodeURIComponent(fishName)}`;


    try {
      setLoading(true);
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

      const text = await response.text();
      parseString(text, (err, result) => {
        if (err) throw new Error('Error parsing XML: ' + err);

        const items = result.response.body[0].items[0].item;
        if (!items || items.length === 0) {
          setError('검색 결과가 없습니다.');
          setFishData([]);
          return;
        }

        const filteredItems = items.map(item => ({
          name: item.commKorNm ? item.commKorNm[0] : 'N/A',
          overview: item.ABST ? item.ABST[0] : 'N/A',
          form: item.FORM ? item.FORM[0] : 'N/A',
          domesticDistribution: item.NADI ? item.NADI[0] : 'N/A',
          foreignDistribution: item.INDI ? item.INDI[0] : 'N/A',
          habitat: item.HABI ? item.HABI[0] : 'N/A',
        }));
        setFishData(filteredItems);
        setError(null);
      });
    } catch (error) {
      console.error('Error fetching fish data:', error);
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>기록 페이지</Text>
      <TextInput
        placeholder="물고기 이름을 입력하세요"
        value={fishName}
        onChangeText={setFishName}
        style={styles.input}
      />
      <Button title="검색" onPress={fetchFishData} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={fishData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <Text>국명: {item.name}</Text>
            <Text>개요: {item.overview}</Text>
            <Text>형태: {item.form}</Text>
            <Text>국내 분포: {item.domesticDistribution}</Text>
            <Text>해외 분포: {item.foreignDistribution}</Text>
            <Text>서식지/생육지: {item.habitat}</Text>
          </View>
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="메인 페이지로 돌아가기" onPress={() => navigation.navigate('MainPage')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  dataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});
