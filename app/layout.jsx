import './globals.css';
import { ApolloWrapper } from "@/lib/apollo-wrapper";

export default function RootLayout({ children }) {
  return (
      <ApolloWrapper>{children}</ApolloWrapper>
  );
}