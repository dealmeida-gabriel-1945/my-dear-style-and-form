import React from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView, Image,
} from "react-native";
import {makeFlex, styleFlex} from "../../style/flex-style";
import {centralizadoXY, makeAlign, makePadding} from "../../style/position-style";
import {makeBorder} from "../../style/border-style";
import {PositionsConstants} from "../../constants/position-costants";
import {TEST} from "../../style/test-style";
import DearTableItem from "./dear-table-item";
import {imagemPequena} from "../../style/image-style";
import {TouchableOpacity} from "react-native-web";

export const DearDatatable = ({
      titulos = [], dados = [],
    colunasColapsadas = [], colapsavel = false,
    acoes = []
}) => {
    var colunas = titulos.map(titulo => titulo.field);
    dados = dados.map(dado => ({dados: dado, colapsado: false}));
    return(
        <View style={[makeFlex(1), makePadding(5,5,5,5)]}>
            <View style={[makeFlex(1), styleFlex.flexRow, makeBorder(1,1,1,1), centralizadoXY]}>
                {renderTitulos(titulos)}
            </View>
            <View style={[makeFlex(9), {backgroundColor: '#C4C4C4'}]}>
                <SafeAreaView>
                    <FlatList
                        data={dados}
                        renderItem={({item}) => (renderData(item.dados, colunas, item.colapsado, colunasColapsadas, colapsavel, acoes))}
                        keyExtractor={item => `${item.id}`}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
}
const renderTitulos = (titulos) => {
    return (
        <>
            <View key={`colapsado`} style={[makeFlex(1), makePadding(0,0,5,0), centralizadoXY]}>
                <Image
                    style={imagemPequena}
                    source={require('../../../assets/olho-aberto.png')}
                />
            </View>
            {
                titulos
                    .map((item, index) => (
                        <View key={index} style={[makeFlex(3), makeAlign(PositionsConstants.CENTRO)]}>
                            <Text style={makeAlign(PositionsConstants.CENTRO)}>{item.label}</Text>
                        </View>
                    ))
            }
        </>
    );
}
const renderData = (item, columns, colapsado, colunasColapsadas = [] , colapsavel, acoes= []) => {
    return (<DearTableItem columns={columns} item={item} colapsado={colapsado} colunasColapsadas={colunasColapsadas} colapsavel={colapsavel} acoes={acoes}/>)
};