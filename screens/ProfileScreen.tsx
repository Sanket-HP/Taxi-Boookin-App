import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';

function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, width: '80%' }}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, width: '80%' }}
      />
      <Button title="Save" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}

export default ProfileScreen;
