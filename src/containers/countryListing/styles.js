import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    singleCountry: {
        backgroundColor: '#CCC',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    countriesContainer: {
        marginTop: 10,
    },
    buttonStyle: {
        alignSelf: 'center',
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonTextStyle: {
        color: '#FFF'
    },
    loaderContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: '50%',
        zIndex: 99,
    }
});
