import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    // Add Providers - Context/Providers, Theme, data
    // Layout
    // additional props
    return (
        <Layout>
            <Component {...pageProps} />;
        </Layout>
    )
  }