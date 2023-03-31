export type SharesResponse = {
  isNew: boolean;
  shares: [string, string][];
};

export type ShareCreateResponse = {
  hex_share: string;
};
