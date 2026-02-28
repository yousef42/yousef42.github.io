export interface TrustSignals {
  cafeBazaar?: {
    url: string;
    appName: string;
  };
  myket?: {
    url: string;
    appName: string;
  };
  installCount?: string;
  rating?: string;
  ratingScreenshot?: string;
}

export const trustSignals: TrustSignals = {
  cafeBazaar: {
    url: "https://cafebazaar.ir/app/ir.navayeheiat",
    appName: "نوا",
  },
  myket: {
    url: "https://myket.ir/app/ir.navayeheiat",
    appName: "نوا",
  },
  installCount: "۱M+",
  rating: "۴.۵",
};
