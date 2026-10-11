import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>WIS Recommendation</Text>
          <Text style={styles.subtitle}>Collaborative Filtering System</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tugas Pembersihan Hari Ini</Text>
          <Text style={styles.cardDesc}>
            Daftar checklist dan laporan status kebersihan area kerja siap dicatat.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: SPACING.md,
  },
  header: {
    marginBottom: SPACING.lg,
    paddingTop: SPACING.md,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.subText,
    marginTop: SPACING.xs,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  cardDesc: {
    fontSize: 14,
    color: COLORS.subText,
    lineHeight: 20,
  },
});
