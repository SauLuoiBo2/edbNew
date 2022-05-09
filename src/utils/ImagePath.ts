export class ImagePath {
    path: string;
    constructor(path?: string) {
        this.path = path || '';
    }

    getPng(name: string) {
        const path = 'images/' + this.path + '/' + name + '.png';

        return path;
    }

    getJpeg(name: string) {
        const path = 'images/' + this.path + '/' + name + '.jpeg';
        return path;
    }
    getSvg(name: string) {
        const path = 'images/' + this.path + '/' + name + '.svg';
        return path;
    }
}

export const imagePath = new ImagePath();
