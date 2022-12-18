import themes from '../themes.json';
import GetColorVariable from './GetColorVariable';

export default function GetColorMode(document) {
    let mode = null;

    Object.keys(themes).forEach(themeName => {
        const themeInfo = themes[themeName];
        if (GetColorVariable(document, '--bg') === themeInfo['PROPERTIES']['--bg']) {
            mode = themeInfo['MODE'];
        };
    });

    return mode;
}