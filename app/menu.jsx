import { StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { useTheme } from "@/context/ThemeProvider";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
    const { theme } = useTheme();
    const styles = createStyles(theme);
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
    const separatorComp = <View style={styles.separator} />;
    const footerComp = <Text style={{ color: theme.text }}>End of Menu</Text>;

    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: theme.text,
            width: "50%",
            maxWidth: 300,
            marginHorizontal: "auto",
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: "auto",
        },
        row: {
            flexDirection: "row",
            width: "100%",
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: "solid",
            borderColor: theme.text,
            borderWidth: 1,
            borderRadius: 20,
            overflow: "hidden",
            marginHorizontal: "auto",
        },
        menuTextRow: {
            width: "65%",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: "underline",
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 100,
            height: 100,
        },
    });
}