import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ItemDetailProps} from '../helper/interfaces';
import {size} from '../themes/Metrics';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';

const ItemDetailComponent: FC<ItemDetailProps> = ({
  post,
  changeSelectedPost,
}) => {
  console.log('Re rendering child component');

  const handleRemoveSelected = () => changeSelectedPost(null);

  return (
    <View style={styles.mainView}>
      <View style={styles.firstRow}>
        <Text style={styles.idText}>Selected Post : {post.id}</Text>
        <TouchableOpacity onPress={handleRemoveSelected}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: size(10)}}>
        <Text style={styles.titleText}>{post.title}</Text>
        <Text style={styles.bodyText}>{post.body}</Text>
      </View>
    </View>
  );
};

export default ItemDetailComponent;

const styles = StyleSheet.create({
  mainView: {
    padding: size(10),
    marginHorizontal: size(10),
    backgroundColor: Colors.mainTheme3,
    borderRadius: size(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  idText: {
    fontFamily: FONTS.Poppins00,
    color: Colors.mainTheme2,
    fontSize: FONT_SIZE.small,
  },
  closeText: {
    fontFamily: FONTS.Poppins400,
    color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small,
  },
  titleText: {
    fontFamily: FONTS.Poppins500,
    color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small_medium,
  },
  bodyText: {
    fontFamily: FONTS.Poppins400,
    color: Colors.grayTheme2,
    fontSize: FONT_SIZE.small,
  },
});
