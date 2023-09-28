import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./features/Router";

import store from "./store";

const queryClient = new QueryClient();

function App() {

  return (
        <div className="App">
            <MantineProvider>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools initialIsOpen={false}/>
                        <BrowserRouter>
                            <Router/>
                        </BrowserRouter>
                    </QueryClientProvider>
                </Provider>
            </MantineProvider>
        </div>
    )
}

export default App