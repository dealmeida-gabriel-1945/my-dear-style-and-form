import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import {makeFlex, styleFlex} from "../../style/flex-style";
import {centralizadoXY, makeMargin, makePadding} from "../../style/position-style";
import {makeBorder} from "../../style/border-style";
import {DearInputText} from "../inputs/dear-input-text";
import {DearButton} from "../botoes/dear-button";
import {imagemPequena} from "../../style/image-style";

export default class DearTableItem extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            item: props.item,
            columns: (props.columns) ? props.columns:[],
            colunasColapsadas: (props.colunasColapsadas) ? props.colunasColapsadas:[],
            colapsavel: props.colapsavel,
            colapsado: props.colapsado,
            acoes: (props.acoes) ? props.acoes:[],
        };
    }
    render(){
        return(
            <View style={[styleFlex.flexColumn, makeBorder(0, 0, 0, (this.state.colapsado)?5:1),]}>
                <TouchableOpacity
                    style={[makePadding(0, 10, 0, 10), makeMargin(5, 0, 5, 0),
                        styleFlex.flexRow,
                    ]}
                    onPress={() => {this.setState({colapsado: !this.state.colapsado})}}
                >
                    {this.renderNaoColapsado()}
                </TouchableOpacity>
                <View style={[styleFlex.flexRow]}>
                    {
                        (this.state.colapsado && this.state.colapsavel)
                            ? this.renderColapsado()
                            :null
                    }
                </View>
            </View>
        )

    }

    renderColapsado() {
        return (
            <View style={[makeFlex(1), styleFlex.flexColumn]}>
                <View style={[styleFlex.flexColumn, makeBorder(0,1,0,0), makePadding(10,10,10,10)]}>
                    {this.renderColunasColapsado()}
                    <View key={'ações'} style={[makeFlex(1), styleFlex.flexRow]}>
                        {this.renderAcoes()}
                    </View>
                </View>
            </View>
        );
    }

    renderAcoes(){
        return this.state.acoes.map(acao => (
            <View style={makeFlex(1)}>
                <DearButton titulo={acao.titulo} onClick={acao.onClick} tipo={acao.tipo} />
            </View>
        ));
    }

    renderColunasColapsado(){
        return this.state.colunasColapsadas.map(coluna =>(
            <View key={`${coluna}-${this.state.item.id}-input`} style={[makeFlex(1)]}>
                <DearInputText habilitado={false} titulo={coluna.label} valor={this.state.item[coluna.field].toString()}/>
            </View>
        ));
    }
    renderNaoColapsado(){
        return (
            <>
                <View key={`colapsado`} style={[makeFlex(1), centralizadoXY]}>
                    <Image
                        style={imagemPequena}
                        source={(this.state.colapsado) ? require('../../../assets/olho-fechado.png') : require('../../../assets/olho-aberto.png')}
                    />
                </View>
                {this.state.columns.map(column => (
                    <View key={`${column}-${this.state.item[column]}`} style={[makeFlex(3), centralizadoXY]}>
                        <Text>
                            {this.state.item[column]}
                        </Text>
                    </View>
                ))}
            </>
        )
    };
}