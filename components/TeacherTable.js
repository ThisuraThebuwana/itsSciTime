import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

import { globalStyles } from "../styles/global";
 
export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Grade', 'Subject'],
      widthArr: [120, 120, 120],
    }
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    // for (let i = 0; i < 30; i += 1) {
       const rowData = [];
       const rowData1 = [];
       const rowData2 = [];
       const rowData3 = [];
    //   for (let j = 0; j < 9; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);
    // }

    const Name = <Text style={styles.linkText}>Amal</Text>
    const Name1 = <Text style={styles.linkText}>Bimal</Text>
    const Name2 = <Text style={styles.linkText}>Calvin</Text>
    const Name3 = <Text style={styles.linkText}>Dimuth</Text>

    rowData.push(Name, "Grade 11","Science");
    tableData.push(rowData);

    rowData1.push(Name1, "Grade 6","Maths");
    tableData.push(rowData1);

    rowData2.push(Name2, "Grade 08","Science");
    tableData.push(rowData2);

    rowData3.push(Name3, "Grade 11","Maths");
    tableData.push(rowData3);
 
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  linkText: { textAlign: 'center', fontWeight: 'bold', textDecorationLine: 'underline' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});