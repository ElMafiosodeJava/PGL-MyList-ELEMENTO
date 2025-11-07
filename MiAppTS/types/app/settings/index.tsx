// app/settings/index.tsx

import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';

import Header from '../../components/Header';
import BodyCard from '../../components/BodyCard';
import { CardColors } from '../../CardColors/CardColor';
import { shop, gymCategory } from '../../types/CardsTypes';
import { GYM_CATEGORIES } from '../../data/CardItems';

// Productos iniciales de ejemplo
const initialProducts: shop[] = [
  {
    id: uuid.v4() as string,
    name: 'Proteína Whey 1kg',
    category: 'proteinas',
    price: 24.99,
    marked: false,
    description: ''
  },
  {
    id: uuid.v4() as string,
    name: 'Mancuernas 5kg (par)',
    category: 'mancuernas',
    price: 39.9,
    marked: true,
    description: ''
  },
];
const GymStoreScreen = () => {
  const [items, setItems] = useState<shop[]>(initialProducts);
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<gymCategory>('proteinas');

  const { total, markedCount, markedTotalPrice } = useMemo(() => {
    const total = items.length;
    const markedItems = items.filter((i) => i.marked);
    const markedCount = markedItems.length;
    const markedTotalPrice = markedItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
    return { total, markedCount, markedTotalPrice };
  }, [items]);


  const toggleMarked = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, marked: !item.marked } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    if (items.length === 0) return;
    setItems([]);
  };


  const openModal = () => setModalVisible(true);

  const closeModal = () => {
    setModalVisible(false);
    setName('');
    setPrice('');
    setCategory('proteinas');
  };

  const addItem = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'El nombre no puede estar vacío');
      return;
    }

    const numericPrice = Number(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      Alert.alert('Error', 'El precio debe ser mayor que 0');
      return;
    }

    const newItem: shop = {
      id: uuid.v4() as string,
      name: name.trim(),
      category,
      price: numericPrice,
      marked: false,
      description: ''
    };

    setItems((prev) => [...prev, newItem]);
    closeModal();
  };

  const renderItem = ({ item }:{ item: shop }) => {
    const cfg = GYM_CATEGORIES[item.category];

    return (
      <BodyCard
        imageSource={cfg.icon}
        name={item.name}
        categoryLabel={cfg.label}
        price={item.price}
        marked={item.marked}
        onToggleMarked={() => toggleMarked(item.id)}
        onDelete={() => deleteItem(item.id)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Header />

      <View style={styles.counters}>
        <Text style={styles.counterText}>Productos: {total}</Text>
        <Text style={styles.counterText}>Marcados: {markedCount}</Text>
        <Text style={styles.counterText}>
          Total marcados: {markedTotalPrice.toFixed(2)} €
        </Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No hay productos en tu lista.
            </Text>
          </View>
        }
        contentContainerStyle={
          items.length === 0 ? styles.emptyListContent : undefined
        }
      />

      <View style={styles.actionsRow}>
        <Pressable style={styles.addButton} onPress={openModal}>
          <Text style={styles.addButtonText}>Añadir producto</Text>
        </Pressable>

        <Pressable
          style={[
            styles.deleteAllButton,
            items.length === 0 && styles.deleteAllDisabled,
          ]}
          disabled={items.length === 0}
          onPress={deleteAll}
        >
          <Text style={styles.deleteAllText}>Borrar todos</Text>
        </Pressable>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Nuevo producto</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre del producto"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Precio (€)"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />

            <Text style={styles.modalLabel}>Categoría</Text>
            <View style={styles.categoriesRow}>
              {(Object.keys(GYM_CATEGORIES) as gymCategory[]).map((cat) => (
                <Pressable
                  key={cat}
                  style={[
                    styles.chip,
                    category === cat && styles.chipActive,
                  ]}
                  onPress={() => setCategory(cat)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      category === cat && styles.chipTextActive,
                    ]}
                  >
                    {GYM_CATEGORIES[cat].label}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.modalButtons}>
              <Pressable style={styles.btnCancel} onPress={closeModal}>
                <Text style={styles.btnText}>Cancelar</Text>
              </Pressable>
              <Pressable style={styles.btnAdd} onPress={addItem}>
                <Text style={styles.btnText}>Añadir</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GymStoreScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: CardColors.BLANCO,
  },
  counters: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  counterText: {
    fontSize: 16,
    color: CardColors.NEGRO_OSCURO,
  },
  emptyContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: CardColors.GRIS,
    fontSize: 16,
  },
  emptyListContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addButton: {
    flex: 1,
    marginRight: 8,
    padding: 10,
    backgroundColor: CardColors.AZUL_MARINO,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: CardColors.BLANCO,
    fontWeight: '600',
  },
  deleteAllButton: {
    flex: 1,
    marginLeft: 8,
    padding: 10,
    backgroundColor: '#ff4d4f',
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteAllDisabled: {
    backgroundColor: '#ffb3b3',
  },
  deleteAllText: {
    color: CardColors.BLANCO,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    padding: 16,
  },
  modal: {
    backgroundColor: CardColors.BLANCO,
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  modalLabel: {
    marginTop: 8,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
    marginTop: 6,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  chip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: CardColors.GRIS,
    marginRight: 6,
    marginTop: 4,
  },
  chipActive: {
    backgroundColor: CardColors.AZUL_MARINO,
    borderColor: CardColors.AZUL_MARINO,
  },
  chipText: {
    fontSize: 12,
    color: CardColors.GRIS,
  },
  chipTextActive: {
    color: CardColors.BLANCO,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 14,
    gap: 8,
  },
  btnCancel: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: CardColors.GRIS,
  },
  btnAdd: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: CardColors.AZUL_MARINO,
  },
  btnText: {
    color: CardColors.BLANCO,
    fontWeight: '600',
  },
});
