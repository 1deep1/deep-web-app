import './globals.css';
import { ApolloWrapper } from "@/lib/apollo-wrapper";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
export const metadata = {
  title: {
    default: 'deep',
    template: '%s | deep'
  },
  robots: {
    follow: true,
    index: true
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE
      }
    })
};

export default function RootLayout({ children }) {
  return (
      <ApolloWrapper>{children}</ApolloWrapper>
  );
}