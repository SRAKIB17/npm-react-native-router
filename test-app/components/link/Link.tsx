import React from 'react';
import { Pressable, } from 'react-native';
import { useRouter, useTheme } from '../../navigators/src';
import StyledText from '../text/StyledText';
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