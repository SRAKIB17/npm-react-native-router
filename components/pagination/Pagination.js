import React from 'react';
import { View, StyleSheet } from 'react-native';
import PressableButton from '../button/PressableButton';
import { global_styles } from '../global';
import { useTheme } from '../../navigators/theming/ThemeContext';

const Pagination = ({
    pageHandle,
    currentPage,
    getLastPage,
    button,
    disableButton,
}) => {
    const page = parseInt(currentPage);
    const lastPage = parseInt(getLastPage);
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        pagination: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        pageButton: {
            paddingHorizontal: 9,
            minWidth: 36,
            padding: 4,
            height: 36,
            backgroundColor: button?.bg ? button?.bg : colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: button?.borderWidth ? button?.borderWidth : button?.borderWidth == 0 ? button?.borderWidth : 0.5,
            borderColor: button?.borderColor ? button?.borderColor : colors.border,
        },
        buttonText: {
            textAlign: 'center',
            color: button?.bg ? button?.text : colors.primary_text,
        },
    });

    return (
        <View style={styles.pagination}>
            {/* Buttons for page numbers */}
            {page > 3 && (
                <>
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(1)}
                        text={1}
                    />
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(2)}
                        text={2}
                    />
                    {page === 4 || (
                        <PressableButton
                            textStyle={styles.buttonText}
                            containerStyle={styles.pageButton}
                            onPress={() => pageHandle(3)}
                            text={3}
                        />
                    )}
                    {page > 5 && (
                        <PressableButton
                            textStyle={[
                                styles.buttonText,
                                global_styles.font_extrabold,
                                {
                                    color: disableButton?.text,
                                },
                            ]}
                            containerStyle={[
                                styles.pageButton,
                                {
                                    backgroundColor: disableButton?.bg,
                                },
                            ]}
                            disabled={true}
                            text={'...'}
                        />
                    )}
                </>
            )}

            {page > 1 && (
                <PressableButton
                    textStyle={styles.buttonText}
                    containerStyle={styles.pageButton}
                    onPress={() => pageHandle(page - 1)}
                    text={page - 1}
                />
            )}

            {/* Current page button */}
            <PressableButton
                textStyle={[
                    styles.buttonText,
                    global_styles.font_bold,
                    {
                        color: disableButton?.text,
                    },
                ]}
                containerStyle={[
                    styles.pageButton,
                    {
                        backgroundColor: disableButton?.bg,
                    },
                ]}
                disabled={true}
                text={page}
            />

            {page === lastPage || page === lastPage - 3 || (
                <>
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(page + 1)}
                        text={page + 1}
                    />
                    {(page >= lastPage - 2 || page === lastPage - 4) || (
                        <PressableButton
                            disabled={true}
                            textStyle={[
                                styles.buttonText,
                                global_styles.font_extrabold,
                                {
                                    color: disableButton?.text,
                                },
                            ]}
                            containerStyle={[
                                styles.pageButton,
                                {
                                    backgroundColor: disableButton?.bg,
                                },
                            ]}
                            text={'...'}
                        />
                    )}
                </>
            )}

            {page < lastPage - 2 && (
                <>
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(lastPage - 2)}
                        text={lastPage - 2}
                    />
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(lastPage - 1)}
                        text={lastPage - 1}
                    />
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(lastPage)}
                        text={lastPage}
                    />
                </>
            )}
            {lastPage - 2 === page && (
                <PressableButton
                    textStyle={styles.buttonText}
                    containerStyle={styles.pageButton}
                    onPress={() => pageHandle(lastPage)}
                    text={lastPage}
                />
            )}
        </View>
    );
};

export default Pagination;
