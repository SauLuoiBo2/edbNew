class ImagePath {
    path: string;
    constructor(path?: string) {
        this.path = path || '';
    }

    getPng(name: string) {
        const path = './data/' + this.path + '/' + name + '.png';

        return require(path);
    }

    getJpeg(name: string) {
        const path = './data' + this.path + '/' + name + '.jpeg';
        return require(path);
    }
    getSvg(name: string) {
        const path = './data' + this.path + '/' + name + '.svg';
        return require(path);
    }
}

const imagePath = new ImagePath();

const pathIcon = new ImagePath('icons');

const pathLogos = new ImagePath('logos');

export const imageSource = {
    LOGO: require('./data/logos/logo.png'),

    HOME: {
        HERO_1: require('./data/images/hero-021.png'),
        HERO_2: require('./data/images/about22.jpeg'),
        HERO_3: require('./data/images/header1.png'),
    },
    ICONS: {
        LMS_1: require('./data/icons/teacher.svg'),
        LMS_2: require('./data/icons/hoc-sinh.svg'),
    },
};
