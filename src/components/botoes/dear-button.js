import React from "react";
import {
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
} from "react-native";
import {TipoButtonConstants} from "../../constants/tipo-button-constans";
import {makeMargin, makePadding} from "../../style/position-style";

export const DearButton = ({
    opacidade = 0.6, corSecundaria = null,
    titulo = '', onClick = (event)=>null,
    tipo = TipoButtonConstants.NORMAL, styleButton = null, styleText = null,
    bordaArredondada = true,
    }) => (
    <TouchableHighlight
        activeOpacity={opacidade} underlayColor={corSecundaria}
        onPress={(event) => {onClick(event)}}
        style={[
            setTipo(tipo), makePadding(5,10,5,10), makeMargin(5,5,5,5),
            setBorderRadius(bordaArredondada), styleButton, ]}
    >
        <Text style={[localStyleText(tipo), styleText]}>{titulo}</Text>
    </TouchableHighlight>
);

const setBorderRadius = (borda) => ({
    borderRadius: 50
});

const localStyleText = (tipo) => ({
    textAlign: 'center',
    color: getTextTipo(tipo),
});

const getTextTipo = (tipo) => {
    switch (tipo) {
        case TipoButtonConstants.ALERTA:
            return 'black'
            break;
        default:
            return 'white'
            break;
    }
};

const setTipo = (cor) => ({
    backgroundColor: cor,
});