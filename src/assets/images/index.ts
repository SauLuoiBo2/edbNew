import { ImagePath } from 'utils';

const imagePath = new ImagePath();

export const imageSource = {
    LOGO: new ImagePath('logos').getPng('logo'),
};
