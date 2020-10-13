export const bottomBorder = () => ({
    borderBottomColor: '#000000',
    borderBottomWidth: 1
});

export const makeBorder = (bl,bt,br,bb, cor = null) => ({
    borderBottomColor: (cor)?cor:'#000000',
    borderLeftWidth: bl,
    borderTopWidth: bt,
    borderRightWidth: br,
    borderBottomWidth: bb,
});
