import {StyleSheet} from 'react-native';
import {PositionsConstants} from "../constants/position-costants";

export const stylePosition = StyleSheet.create({
    tudoNoCentro: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centroX: {
        justifyContent: 'center',
    },
    centroY: {
        alignItems: 'center',
    },
});

export const makePadding = (pl, pt, pr, pb) => {
    return (pl && !pt && !pr && !pb)
        ? StyleSheet.create({
            myPadding: {
                padding: pl,
            },
        }).myPadding
        : StyleSheet.create({
            myPadding: {
                paddingLeft: pl,
                paddingTop: pt,
                paddingRight: pr,
                paddingBottom: pb,
            },
        }).myPadding
}

export const makeMargin = (ml, mt, mr, mb) => {
    return (ml && !mt && !mr && !mb)
        ? StyleSheet.create({
            myMargin: {
                margin: ml,
            },
        }).myMargin
        : StyleSheet.create({
            myMargin: {
                marginLeft: ml,
                marginTop: mt,
                marginRight: mr,
                marginBottom: mb,
            },
        }).myMargin
}

export const centralizadoXY = {
    justifyContent: 'center',
    alignItems: 'center',
};

export const makeAlign = (alinhamento) => {
    switch (alinhamento) {
        case PositionsConstants.CENTRO:
            return StyleSheet.create({
                myAlign: {
                    textAlign: 'center'
                },
            }).myAlign
            break;
        case PositionsConstants.DIREITA:
            return StyleSheet.create({
                myAlign: {
                    textAlign: 'right',
                    paddingRight: 10,
                },
            }).myAlign
            break;
        case PositionsConstants.ESQUERDA:
            return StyleSheet.create({
                myAlign: {
                    textAlign: 'left',
                    paddingLeft: 10,
                },
            }).myAlign
            break;
        default:
            return StyleSheet.create({
                myAlign: {
                    textAlign: 'left',
                    paddingLeft: 10,
                },
            }).myAlign
            break;
    }
};