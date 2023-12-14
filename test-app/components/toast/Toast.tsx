import React from 'react';
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from 'react-native';

const Toast = ({
    type,
    text
}: {
    type?: 'gravity' | 'gravity-offset',
    text: string
}) => {

    if (type == 'gravity-offset') {
        return ToastAndroid.showWithGravityAndOffset(
            text,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }
    else if (type == 'gravity') {
        return ToastAndroid.showWithGravity(
            text,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }
    else {
        return ToastAndroid.show(text, ToastAndroid.SHORT);
    }
};


export default Toast;