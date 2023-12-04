import React, { StyleHTMLAttributes } from 'react';
import { Text, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { global_styles } from '../global';
import { useTheme } from '../../navigators/theming/ThemeContext';
import { StyleTextProps } from '../types';


const StyledText = ({
    children,
    style,
    numberOfLines
}: StyleTextProps) => {
    const { colors } = useTheme()
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[global_styles.text_base, { color: colors.text }, style]}
        >
            {children}
        </Text>
    )
};

export default StyledText;
