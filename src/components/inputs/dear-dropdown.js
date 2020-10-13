import React from "react";
import {Text, View,} from "react-native";
import {styleFlex} from "../../style/flex-style";
import {makeAlign, makeMargin} from "../../style/position-style";
import {makeFontSize, STYLE_TITULO} from "../../style/text-style";
import {Picker} from "@react-native-community/picker";
import {makeBorder} from "../../style/border-style";


export const DearDropdown = ({
        titulo, posicaoTitulo, fontSizeTitulo, styleTitulo,
        styleDropdown, styleConteudo,
        valorSelecionado = null, onValueChange = (a1, a2) =>(null),
        rows=[]
    }) => (
    <View style={[styleFlex.flexColumn, makeMargin(5,0,10,0)]}>
        <Text style={[
            STYLE_TITULO,
            makeAlign(posicaoTitulo),
            makeFontSize(fontSizeTitulo),
            styleTitulo
        ]}>{titulo}</Text>

        <View style={[makeBorder(1,1,1,1 ), styleDropdown]}>
            <Picker
                selectedValue={valorSelecionado}
                onValueChange={(itemValue, itemIndex) =>(onValueChange(itemValue, itemIndex))}
                style={[styleDropdown]}
            >
                {renderRows(rows, styleConteudo)}
            </Picker>
        </View>
    </View>
);

const renderRows = (rows, estilos) => (rows.map(row =>(
    <Picker.Item style={[estilos]} key={row.key} label={row.label} value={row.value}/>
)));