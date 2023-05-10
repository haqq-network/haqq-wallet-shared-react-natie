export type SharesResponse = {
  isNew: boolean;
  shares: [string, string][];
};

export type ShareCreateResponse = {
  hex_share: string;
};

export type Share = {
  share: string;
  shareIndex: string;
  polynomialID: string;
  name?: string;
};

export type ShareEncrypted = {
  nonce: string;
  shareIndex: string;
  polynomialID: string;
  publicShare: string;
  name?: string;
};

