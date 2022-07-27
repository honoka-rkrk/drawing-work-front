export type Image = {
  id?: string;
  title: string;
  imageUrl: string;
  screenName: string;
  displayName: string | null;
  iconUrl: string | null;
  createdAt: string | null;
};

export const blankImage: Image = {
  title: '無題',
  imageUrl: '',
  screenName: '',
  displayName: null,
  iconUrl: null,
  createdAt: null
};
