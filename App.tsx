import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { useState, useMemo } from 'react';

export default function App() {
  const [height, setHeight] = useState<string>('0');
  const [weight, setWeight] = useState<string>('0');
  
 

  const onInputHeight = (e: string) => {
    console.log(`input height:${e}`);
    setHeight(e);
  }

  const onInputWeight = (e: string) => {
    console.log(`input weight:${e}`);
    setWeight(e);
    console.log(`set weight:${weight}`);
  }

  const calcBMI = (h: string, w: string) => {
    console.log(weight);
    

    let result = parseFloat(w) / Math.pow(parseFloat(h) / 100, 2);
    return result
  }

  const bmi = useMemo(() => {
    return calcBMI(height, weight);
  }, [height, weight]);

  
  
  return (
    <SafeAreaView style={ { flex: 1}}>
      <View style={{ flex: 1, padding: 10}} >
        <View style={{ flexDirection: 'row' }}>
          <Text>身長</Text>
          <TextInput onChangeText={onInputHeight} value={String(height)} style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}/>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>体重</Text>
          <TextInput onChangeText={onInputWeight} value={String(weight)} style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}/>

        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text>BMI:</Text><Text>{ bmi}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
