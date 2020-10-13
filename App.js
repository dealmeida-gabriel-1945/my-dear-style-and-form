import React from 'react';
import {View} from 'react-native';
import {makeFlex} from "./src/style/flex-style";
import {makeMargin} from "./src/style/position-style";
import {DearDropdown} from "./src/components/inputs/dear-dropdown";
import {PositionsConstants} from "./src/constants/position-costants";
import {DearDatatable} from "./src/components/datatables/dear-datatable";
import {TipoButtonConstants} from "./src/constants/tipo-button-constans";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            teste: '',
            titulos: [
                {label:'#', field:'id'},
                {label:'Nome', field:'nome'},
                {label:'Idade', field:'idade'},
            ],
            titulosC: [
                {label:'#', field:'id'},
                {label:'Nome', field:'nome'},
                {label:'Idade', field:'idade'},
                {label:'Descrição', field:'descricao'},
            ],
            dados: [
                {id: 1, nome: 'Pessoa 1', idade: 1, descricao: 'blablabla'},
                {id: 2, nome: 'Pessoa 2', idade: 2, descricao: 'blablabla'},
                {id: 3, nome: 'Pessoa 3', idade: 3, descricao: 'blablabla'},
                {id: 4, nome: 'Pessoa 4', idade: 4, descricao: 'blablabla'},
            ],
            acoes: [
                {titulo:'Teste 1', onClick: ()=>{console.log('opa 1')}, tipo: TipoButtonConstants.SUCESSO},
                {titulo:'Teste 2', onClick: ()=>{console.log('opa 2')}, tipo: TipoButtonConstants.PERIGO},
                {titulo:'Teste 3', onClick: ()=>{console.log('opa 3')}, tipo: TipoButtonConstants.ALERTA},
                {titulo:'Teste 4', onClick: ()=>{console.log('opa 4')}, tipo: TipoButtonConstants.NORMAL},
            ],
        };
    }

    render() {
        return (
            <View style={[makeMargin(0, 150,0,0), makeFlex(1)]}>
                <DearDatatable
                    titulos={this.state.titulos} dados={this.state.dados} colunasColapsadas={this.state.titulosC} colapsavel={true}
                    acoes={this.state.acoes}
                />
            </View>
        );
    }
}
