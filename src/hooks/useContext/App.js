import React, { useState } from "react";
import Alert from "./Alert";
import { AlertProvider } from "./AlertContext";
import Main from "./Main";

function App() {
    return (
        <AlertProvider>
            <div className={"container  pt-3"}>
                <Alert />
                <Main toggle={() => {}}></Main>
            </div>
        </AlertProvider>
    );
}

export default App;
