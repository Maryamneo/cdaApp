import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const steps = [
  { title: 'Referral', description: 'Submit a referral\nOnce a referral is submitted, we contact the victim.' },
  { title: 'Contact', description: 'We contact the victim\nOne of our caseworkers contacts the victims.' },
  { title: 'Prepare', description: 'Once our caseworker has spoken to the victim we then prepare the documents.' },
  { title: 'Solicitor', description: 'After approving the documents from the victim, we then pass it to the solicitors.' },
  { title: 'Court', description: 'Issuing to court\nThe solicitors then issue to court on an emergency basis.' },
];

const Timeline = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>CDA TIMELINE</Text>
      <Text style={styles.subHeader}>THIS PROCESS TAKES LESS THAN 24 HOURS</Text>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepWrapper}>
          <View style={styles.stepContainer}>
            <View style={styles.circleAndLineContainer}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>{index + 1}</Text>
              </View>
              {index < steps.length - 1 && <View style={styles.line} />}
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: '#f57c00',
    marginBottom: 20,
  },
  stepWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  circleAndLineContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1a237e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#1a237e',
  },
  stepContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  stepDescription: {
    fontSize: 14,
    color:'black'
    // color: '#757575',
  },
});

export default Timeline;
