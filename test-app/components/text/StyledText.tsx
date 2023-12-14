import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../test/navigators/theming/ThemeContext';
import { global_styles } from '../global';
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
