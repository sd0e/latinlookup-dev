import GetColorVariable from "./GetColorVariable";
import themes from '../themes.json';

export default function SwitchColorTheme(newTheme = 'Unspecified') {
    if (newTheme === 'Unspecified') newTheme = GetColorVariable(document, '--bg') === themes['DARK']['PROPERTIES']['--bg'] ? 'LIGHT' : 'DARK';

    Object.keys(themes[newTheme]['PROPERTIES']).forEach(style => {
        const styleContent = themes[newTheme]['PROPERTIES'][style];
        document.querySelector(':root').style.setProperty(style, styleContent);
    });

    document.querySelector(':root').style.setProperty('--mode', newTheme);
}