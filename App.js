// App.js
import React from 'react';
import Logo from "./components/Logo";
import Navegacao from "./components/Navegacao";
import Topo from "./components/Topo";
import Principal from "./components/Principal";

const App = () => {
return (\<><Logo /><>
        <header className="topo">
            <Logo />
            <Navegacao />
        </header>
    </><>
            <Topo />
            <Principal />
        </></>
);
};

export default App;
