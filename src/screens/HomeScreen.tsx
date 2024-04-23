import React, {FC, useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import ItemDetailComponent from '../components/ItemDetailComponent';
import {Post} from '../helper/interfaces';
import PostListItem from '../components/PostListItem';
import ErrorComponent from '../components/ErrorComponent';
import {Colors} from '../themes/AppTheme';

const HomeScreen: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response: Post[] = await posts.json();
      setPosts(response);
      setLoading(false);
    } catch (e) {
      setError('Something went wrong');
    }
  };

  const fetchPostById = async (postId: number) => {
    try {
      setError(null);
      const selectedPost = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const response: Post = await selectedPost.json();
      setSelectedPost(response);
    } catch (e) {
      setError('Something went wrong');
    }
  };

  const handlePostClick = useCallback((postId: number) => {
    fetchPostById(postId);
  }, []);

  if (error) {
    return <ErrorComponent callApi={fetchPosts} msg={error} />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator
          color={Colors.mainTheme1}
          size={'large'}
          style={{flex: 1}}
        />
      ) : posts?.length ? (
        <FlatList
          data={posts}
          renderItem={({item, index}) => (
            <PostListItem item={item} index={index} onPress={handlePostClick} />
          )}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={10}
          maxToRenderPerBatch={15}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ErrorComponent callApi={fetchPosts} msg={'No data found'} />
      )}
      {selectedPost ? (
        <ItemDetailComponent
          post={selectedPost}
          changeSelectedPost={setSelectedPost}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
