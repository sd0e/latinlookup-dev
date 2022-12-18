export default function GetColorVariable(document, variable) {
    return getComputedStyle(document.body).getPropertyValue(variable).trim();
}