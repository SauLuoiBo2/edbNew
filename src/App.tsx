import { HomePages, LoginPages } from 'pages';
import styled from 'styled-components';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Auth, Layout } from 'example';
import * as Router from 'router';
import { HOME_ROUTER, lmsConfig } from 'router';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react';
import { LmsLayout } from 'example/layout';
import { Image } from 'components';
import { imageSource } from 'assets';
import { TestLayout } from 'example/layout/TestLayout';

function App() {
    return (
        <Routes>
            {/* public */}

            {/* login  */}
            <Route element={<Layout.LoginLayout />}>
                <Route path='login' element={<LoginPages.LoginPage />} />
            </Route>
            {/* home */}

            <Route path={'/'} element={<Layout.HomeLayout />}>
                {HOME_ROUTER.map((item, i) => {
                    return <Route path={item.path} element={item.element} key={i} />;
                })}
            </Route>

            <Route element={<Auth.RequireAuth allowedRoles={['ADMIN']} />}>
                <Route path={'/lms'} element={<LmsLayout />}>
                    {lmsConfig.getRouters().map((item, i) => {
                        return <Route path={item.path} element={item.element} key={i} />;
                    })}
                </Route>
            </Route>
        </Routes>
    );
}

export default App;

// type Props = {
//     isOpen: boolean;
// };

// const Test = styled.div<Props>`
//     color: ${(props) => (props.isOpen ? 'red' : 'blue')};
// `;
