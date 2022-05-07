import { HomePages } from 'pages';
import styled from 'styled-components';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'example';
import * as Router from 'router';

function App() {
    return (
        <Routes>
            {/* public */}

            {/* login  */}
            {Router.LoginRouter}

            <Route element={<Layout.HomeLayout />}>
                <Route index element={<HomePages.HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;

type Props = {
    isOpen: boolean;
};

const Test = styled.div<Props>`
    color: ${(props) => (props.isOpen ? 'red' : 'blue')};
`;
