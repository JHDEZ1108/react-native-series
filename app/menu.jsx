import { StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { useTheme } from "@/context/ThemeProvider";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
    const { theme } = useTheme();
    const styles = createStyles(theme);
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
    const separatorComp = <View style={styles.separator} />;
    const footerComp = (
        <View style={styles.footerContainer}>
            <View style={styles.separator} />
            <Text style={styles.footerText}>☕ That's all for now! Enjoy your coffee! ☕</Text>
        </View>
    );

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
                ListEmptyComponent={<Text style={styles.emptyText}>No items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={MENU_IMAGES[item.id - 1]} style={styles.menuImage} />

                        <View style={styles.textContainer}>
                            <Text style={styles.menuItemTitle}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                            <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
                        </View>
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
            alignSelf: "center",
            marginBottom: 10,
        },
        footerComp: {
            marginTop: 10,
        },
        emptyText: {
            textAlign: "center",
            color: theme.text,
            fontSize: 16,
        },
        card: {
            flexDirection: "row",
            width: "100%",
            maxWidth: 600,
            backgroundColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
            padding: 10,
            borderRadius: 15,
            alignItems: "center",
            marginBottom: 10,
        },
        menuImage: {
            width: 80,
            height: 80,
            borderRadius: 10,
        },
        textContainer: {
            flex: 1,
            paddingLeft: 12,
        },
        menuItemTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: theme.text,
        },
        menuItemText: {
            fontSize: 14,
            color: theme.text,
            marginVertical: 4,
        },
        menuItemPrice: {
            fontSize: 16,
            fontWeight: "bold",
            color: theme.text,
            textAlign: "right",
        },
        footerContainer: {
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 10,
        },
        footerText: {
            fontSize: 16,
            fontWeight: "bold",
            color: theme.text,
            textAlign: "center",
            opacity: 0.8,
        },
    });
}
