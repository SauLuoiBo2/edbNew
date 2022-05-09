import React from 'react';
import * as Sec from './section';

export const HomePage: React.FC = () => {
    return (
        <main>
            <Sec.SectionHomeIntro />
            <Sec.SectionHomeAbout />
        </main>
    );
};
