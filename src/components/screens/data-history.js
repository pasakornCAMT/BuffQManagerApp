import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataHistoryFromFirebase } from '../../actions/data-history-action'
import { List, ListItem, Divider } from 'react-native-elements'

class DataHistory extends Component {
    componentWillMount() {
        this.props.fetchDataHistoryFromFirebase()
    }
    render() {
        const { dataHistory, avgWaitingTime, avgEatingTime, avgTotalTime } = this.props.dataHistory
        return (
            <ScrollView>
                <View>
                    <View style={styles.dbContainer}>
                        <View style={styles.dashboardView1}>
                            <Text style={styles.dbHeadText}>Avg. Waiting Time</Text>
                            <View style={styles.valueContainer}>
                                <Text style={styles.dbValueText}>{avgWaitingTime}</Text>
                                <Text style={styles.unitText}> mins</Text>
                            </View>
                        </View>
                        <View style={styles.dashboardView2}>
                            <Text style={styles.dbHeadText}>Avg. Eating Time</Text>
                            <View style={styles.valueContainer}>
                                <Text style={styles.dbValueText}>{avgEatingTime}</Text>
                                <Text style={styles.unitText}> mins</Text>
                            </View>
                        </View>
                        <View style={styles.dashboardView3}>
                            <Text style={styles.dbHeadText}>Avg. Total Time</Text>
                            <View style={styles.valueContainer}>
                                <Text style={styles.dbValueText}>{avgTotalTime}</Text>
                                <Text style={styles.unitText}> mins</Text>
                            </View>
                        </View>
                    </View>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            Object.values(dataHistory).map((l) => (
                                <ListItem
                                    key={l.id}
                                    title={l.finishTime}
                                    subtitle={'Booking date_time: '+l.dateText_timeText}
                                />
                            ))
                        }
                    </List>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    dbContainer: {
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: 'white',
        paddingVertical: 8,
    },
    dbHeadText: {
        fontWeight: 'bold',
        margin: 8,
        color: 'white',
        fontSize: 16,
    },
    dbValueText: {
        color: 'white',
        fontSize: 56,
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
        marginHorizontal: 5,
    },
    unitText: {
        fontWeight: 'bold', 
        color: 'white',
        paddingTop: 5,
        bottom: 0,
    },
    dashboardView1: {
        flex: 1,
        height: 150,
        margin: 8,
        backgroundColor: '#00cec9',
        borderRadius: 5,
        elevation: 2,
    },
    dashboardView2: {
        flex: 1,
        height: 150,
        margin: 8,
        backgroundColor: '#0984e3',
        borderRadius: 5,
        elevation: 2,
    },
    dashboardView3: {
        flex: 1,
        height: 150,
        margin: 8,
        backgroundColor: '#6c5ce7',
        borderRadius: 5,
        elevation: 2,
    },
});

function mapStateToProps(state) {
    return {
        dataHistory: state.dataHistory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDataHistoryFromFirebase: () => dispatch(fetchDataHistoryFromFirebase())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataHistory)
