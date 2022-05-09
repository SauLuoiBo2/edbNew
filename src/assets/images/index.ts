import { ImagePath } from 'utils';

const imagePath = new ImagePath();

const pathIcon = new ImagePath('icons');

export const imageSource = {
    LOGO: new ImagePath('logos').getPng('logo'),

    HOME: {
        HERO_1: imagePath.getPng('hero-021'),
        HERO_2: imagePath.getJpeg('about22'),
        HERO_3: imagePath.getPng('header1'),
    },
    ICONS: {
        LMS_1: pathIcon.getSvg('teacher'),
        LMS_2: pathIcon.getSvg('hoc-sinh'),
    },
};
