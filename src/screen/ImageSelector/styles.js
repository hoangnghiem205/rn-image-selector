import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'

    },
    header: {
        height: 80,
        backgroundColor: '#FF0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 25
    },
    content: {
        flex: 1,
        paddingRight: 3
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imgContainer: {
        width: (Dimensions.get('window').width / 3) - 1,
        height: (Dimensions.get('window').width / 3),
        paddingLeft: 3,
        paddingTop: 3
    },
    img: {
        width: '100%',
        height: '100%'
    },
    iconContainer: { 
        position: 'absolute', 
        zIndex: 99, 
        width: '100%', 
        alignItems: 'flex-end', 
        height: '100%', 
        marginTop: 3, 
        marginLeft: 3 
    }, 
    icon: { marginTop: 5, marginRight: 5 }
});
export default styles;