import Layout from "../components/Layout";
import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
