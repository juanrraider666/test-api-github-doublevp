// Toast.js
import Toast from 'react-native-toast-message';

const showToast = ({ type, text }) => {
    Toast.show({
        type: type, // 'success', 'error', 'info', 'warn'
        position: 'top',
        text1: text,
        visibilityTime: 3000, // Duración en milisegundos
    });
};

export default showToast;