import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export default function Post({ post, idx, deleteFromState }) {
  const deletePost = () => {
    fetch(`http://192.168.1.153:4000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then(() => deleteFromState(idx))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.box}>
      <View style={{ flex: 10 }}>
        <Text style={styles.title}>{post.title}</Text>
        <Text>{post.description}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="X" color="red" onPress={deletePost} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#E8EAE6",
    marginBottom: 10,
    padding: 7,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
