export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ItemDetailProps {
  post: Post;
  changeSelectedPost: (itemId: null) => void;
}

export interface PostListItemProps {
  item: Post;
  index: number;
  onPress: (itemId: number) => void;
}

export interface ErrorProps {
  callApi: () => void;
  msg: string;
}
