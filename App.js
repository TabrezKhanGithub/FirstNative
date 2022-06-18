import { RefreshControl, ScrollView,FlatList, StyleSheet, Text, View, SectionList } from 'react-native'
import React,{useState} from 'react'




const App = () => {
  
  const [Items,setItems] =useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 10'},
    {name: 'Item 11'},
  
  ]);

  const [DATA,setDATA] = useState([
    {
      title: 'January',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
    },
    {
      title: 'Fabuary',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
    },
    {
      title: 'March',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3']
    },
    {
      title: 'April',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3']
    },
    {
      title: 'May',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3']
    },
  ])

  const [Refreshing,setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setDATA([...DATA,   {
      title: 'June',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3']
    }]);
    setRefreshing(false);
  }  
  return (
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections = {DATA}
        renderItem = {({item}) => (
          <Text style = {styles.text}>{item}</Text>

        )}
        renderSectionHeader = {({section}) => (
          <View style = {styles.item}>
             <Text style = {styles.text}>{section.title}</Text>
          </View>
        )}
        refreshControl ={<RefreshControl refreshing = {Refreshing} onRefresh= {onRefresh} colors ={['#f538d5']}/> }
      />
      // <FlatList
      //   keyExtractor={(item,index) => index.toString()}
      //   data={Items}
      //   renderItem ={({item}) => (
      //       <View style = {styles.item}>
      //             <Text style = {styles.text}>{item.name}</Text>
      //       </View>
      //   )}
      //   refreshControl ={<RefreshControl refreshing = {Refreshing} onRefresh= {onRefresh} colors ={['#f538d5']}/> }
      // />
      // <ScrollView style = {styles.body}
      //   refreshControl ={<RefreshControl refreshing = {Refreshing} onRefresh= {onRefresh} colors ={['#f538d5']}/> }
      // >
      //   {
      //     Items.map((object) => {
      //       return (
      //         <View style = {styles.item} key = {object.key}>
      //           <Text style = {styles.text}>{object.name}</Text>
      //         </View> 
      //       )
      //     })
      //   }
      // </ScrollView>   
      
  )

}
export default App

const styles = StyleSheet.create({
  body :{
    // flex :1,
    flexDirection : 'column',
    backgroundColor: '#ffffff' 
  },
  item : {
    backgroundColor : '#5fdade',
    justifyContent:'center',
    alignItems: 'center',
    margin : 12
  },
  text : {
    fontSize : 42,
    // color : '#ffffff'
  }
})