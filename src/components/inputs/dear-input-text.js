import React from "react";
import {Text, TextInput, View,} from "react-native";
import {styleFlex} from "../../style/flex-style";
import {makeAlign, makeMargin, makePadding} from "../../style/position-style";
import {erroStyle, makeFontSize} from "../../style/text-style";
import {ERRO_PADRAO} from "../../constants/erro-constants";
import {bottomBorder} from "../../style/border-style";


export const DearInputText = ({
        titulo, posicaoTitulo, fontSizeTitulo, styleTitulo,
        placeHolder, posicaoConteudo, fontSizeConteudo, styleConteudo,
        valor, maxCaracteres, tipoTeclado,
        habilitado, handleOnChange,
        temErro, posicaoErro, fontSizeErro, mensagemErro, styleErro
}) => (
    <View style={[styleFlex.flexColumn, ]}>
        <Text style={[
            makeAlign(posicaoTitulo),
            makeFontSize(fontSizeTitulo),
            styleTitulo
        ]}>{titulo}</Text>

        <TextInput
            style={[
                bottomBorder(),
                makeMargin(5,0,5,5),
                makePadding(5,5,5,5),
                makeAlign(posicaoConteudo),
                makeFontSize(fontSizeConteudo),
                styleConteudo
            ]}
            keyboardType={tipoTeclado}
            placeholder={placeHolder}
            defaultValue={valor}
            editable={habilitado}
            maxLength={maxCaracteres}
            onChangeText={(txt) => {handleOnChange(txt)}}
        />

        {(temErro) ? renderErro(temErro, posicaoErro, fontSizeErro, mensagemErro, styleErro) : null}
    </View>
);

const renderErro = (temErro = false, posicaoErro, fontSizeErro, mensagemErro = ERRO_PADRAO, styleErro) => (
    <Text style={[
        makeAlign(posicaoErro),
        makeFontSize(fontSizeErro),
        erroStyle.perigo,
        styleErro
    ]}>{mensagemErro}</Text>
);