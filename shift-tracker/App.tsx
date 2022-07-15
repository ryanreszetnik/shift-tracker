import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "src/navigation";
import store from "@state/store";

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Navigation colorScheme={null} />
      </PersistGate>
    </Provider>
  );
}
