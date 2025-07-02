import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const savedCart = await AsyncStorage.getItem('carrinho');
    if (savedCart) setCarrinho(JSON.parse(savedCart));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }
});