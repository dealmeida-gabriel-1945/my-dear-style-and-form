import {StyleSheet} from "react-native";

export const makeFontSize = (fs, padrao = 15) => {
    return StyleSheet.create({
            myFont: {
                fontSize: (fs) ? fs : padrao,
            },
        }).myFont;
}
export const erroStyle = StyleSheet.create({
    perigo: {
        color: 'red',
    },
});

export  const STYLE_TITULO = {
    fontSize: 18,
    fontWeight: 'bold'
};