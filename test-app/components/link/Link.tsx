import React, { useContext } from 'react';
import { Pressable, } from 'react-native';
import StyledText from '../text/StyledText';
import { useRouter } from '../../../test/navigators/router/RouterContext';
import { useTheme } from '../../../test/navigators/theming/ThemeContext';
import { LinkProps } from '../types';

export default function Link({
    href = '',
    children,
    style = {}
}: LinkProps) {
    const { colors } = useTheme()
    const router = useRouter()
    return (
        <Pressable onPress={() => router.push(href)}>
            <StyledText style={[{ color: colors.link }, style]}>
                {children}
            </StyledText>
        </Pressable>
    );
}