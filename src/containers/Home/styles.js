import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 20,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    buttonStyle: {
        backgroundColor: '#000',
        color: '#FFF',
        height: 50,
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
