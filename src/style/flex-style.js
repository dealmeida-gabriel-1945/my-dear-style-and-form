import {StyleSheet} from 'react-native';

export const styleFlex = StyleSheet.create({
    flexColumn: {
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
    },
});

export const makeFlex = (valor) => {
    return StyleSheet.create({
        myFlex: {
            flex: valor
        }
    }).myFlex;
};