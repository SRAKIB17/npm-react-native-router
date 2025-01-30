import { StyleSheet, View } from "react-native";
import { useTheme } from "../../navigators/src";
import PressableButton from "../button/PressableButton";
import { global_styles } from "../global";

const Pagination = ({
    pageHandle = () => { },
    currentPage,
    getLastPage,
    button,
    disableButton,
}: {
    disableButton?: {
        bg: string,
        text: string
    },
    button?: {
        bg: string,
        text: string,
        borderWidth?: number,
        borderColor?: string,
    }
    pageHandle: any,
    currentPage: any,
    getLastPage: any
}) => {
    const page = parseInt(currentPage)
    const lastPage = parseInt(getLastPage)
    const { colors } = useTheme()
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
            // width: 36,
            paddingHorizontal: 9,
            minWidth: 36,
            padding: 4,
            height: 36,
            backgroundColor: button?.bg ? button?.bg : colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            // borderRadius: 20,
            borderWidth: button?.borderWidth ? button?.borderWidth : (button?.borderWidth == 0 ? button?.borderWidth : 0.5),
            borderColor: button?.borderColor ? button?.borderColor : colors.border,
        },
        buttonText: {
            textAlign: 'center',
            color: button?.bg ? button?.text : colors.primary_text
        },

    });
    return (
        <View style={styles.pagination}>
            {/* <View className="button-group"> */}

            {
                //  CASE: 01 AND 02
                page > 3 &&
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

                    {/* ********************* */}
                    {
                        // CASE: 03
                        page == 4 ||
                        <PressableButton
                            textStyle={styles.buttonText}
                            containerStyle={styles.pageButton}
                            onPress={() => pageHandle(3)}
                            text={3}
                        />
                    }
                    {/* ********************** */}
                    {
                        // CASE: 04
                        page > 5 &&
                        <PressableButton
                            textStyle={[
                                styles.buttonText, global_styles.font_extrabold, {
                                    color: disableButton?.text
                                }
                            ]}

                            containerStyle={[styles.pageButton, {
                                backgroundColor: disableButton?.bg
                            }]}
                            disabled={true}
                            text={"..."}
                        />
                    }
                </>
            }
            {/* 

                    O5. WHEN PAGE > 1 => BUTTON SHOW (page - 1);

                */}

            {
                // CASE: 05
                page > 1 &&
                <PressableButton
                    textStyle={styles.buttonText}
                    containerStyle={styles.pageButton}
                    onPress={() => pageHandle(page - 1)}
                    text={page - 1}
                />
            }

            {/* *******CURRENT PAGE AND DISABLE BUTTON********** */}
            <PressableButton
                textStyle={[
                    styles.buttonText, global_styles.font_bold, {
                        color: disableButton?.text
                    }
                ]}

                containerStyle={[styles.pageButton, {
                    backgroundColor: disableButton?.bg
                }]}
                disabled={true}
                text={page}
            />


            {/* 

                    1.  WHEN PAGE == LAST PAGE OR PAGE == LAST PAGE -3 => FALSE THEN THIS BUTTON SHOW....

                */}
            {
                //CASE: 06;
                page == lastPage || page == lastPage - 3 ||
                <>
                    <PressableButton
                        textStyle={styles.buttonText}
                        containerStyle={styles.pageButton}
                        onPress={() => pageHandle(page + 1)}
                        text={page + 1}
                    />

                    {/* 
                            1.  WHEN PAGE >= LAST PAGE - 2 OR PAGE == LAST PAGE - 4 => FALSE THEN THIS BUTTON SHOW
                        
                        */}
                    {
                        //CASE: 07
                        page >= lastPage - 2 || page == lastPage - 4 ||
                        <PressableButton
                            disabled={true}
                            textStyle={[
                                styles.buttonText, global_styles.font_extrabold, {
                                    color: disableButton?.text
                                }
                            ]}

                            containerStyle={[styles.pageButton, {
                                backgroundColor: disableButton?.bg
                            }]}
                            text={"..."}
                        />
                    }
                </>
            }

            {
                page < lastPage - 2 &&
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
            }
            {
                lastPage - 2 == page &&
                <PressableButton
                    textStyle={styles.buttonText}
                    containerStyle={styles.pageButton}
                    onPress={() => pageHandle(lastPage)}
                    text={lastPage}
                />
            }

        </View>
    );
};




export default Pagination;