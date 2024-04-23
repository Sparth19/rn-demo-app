import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {size} from '../themes/Metrics';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';
import {Post, PostListItemProps} from '../helper/interfaces';

const PostListItem: FC<PostListItemProps> = React.memo(
  ({item, index, onPress}) => {
    console.log('Re rendering list items');

    const heavyComputation = (item: Post) => {
      const startTime = Date.now();
      let result = 0;
      for (let i = 0; i < 100000; i++) {
        result += Math.sqrt(i) * Math.pow(Math.random(), 2);
      }
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      console.log(
        `Heavy computation completed for item ${item.id} in ${timeTaken} ms`,
      );
      return item.title;
    };
    const useHeavyComputation = (item: Post) => {
      return useMemo(() => heavyComputation(item), [item]);
    };
    const computedDetails = useHeavyComputation(item);

    return (
      <TouchableOpacity
        key={index.toString()}
        activeOpacity={0.5}
        onPress={() => onPress(item.id)}
        style={styles.mainView}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text style={styles.idText}>{item.id}</Text>
          <Text style={styles.titleText}>{computedDetails}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);

export default PostListItem;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    borderWidth: size(1),
    padding: size(10),
    marginHorizontal: size(10),
    marginBottom: size(10),
    borderColor: Colors.grayTheme1,
    borderRadius: size(10),
    justifyContent: 'space-between',
  },
  idText: {
    fontFamily: FONTS.Poppins400,
    color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small,
  },
  titleText: {
    fontFamily: FONTS.Poppins400,
    color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small,
    marginHorizontal: size(10),
  },
});
