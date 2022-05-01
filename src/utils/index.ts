// transfer naming format from myIcon to my-icon
export const toLine = (value: string) => {
    return value.replace(/(A-Z)g/, '-$1').toLowerCase()
}