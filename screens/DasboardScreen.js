import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const DasboardScreen = () => {
    return (
        <View style={{ padding: 50 }}>


            <View style={{ flexDirection: "row" }}>

                <Card style={{ marginLeft: -30, margin: 20, padding: 20, width: 180, height: 70, backgroundColor: "#9EC3FF" }}>
                    <Text style = {{ color: "#003A9A", textAlign:"center",fontStyle:"normal", fontWeight: 700}}>Total:00</Text>
                </Card>

                <Card style={{ marginLeft: -10, margin: 20, padding: 20, width: 180, height: 70, backgroundColor: "#BAE8AC" }}>
                    <Text style = {{color: "#275618",textAlign:"center",fontStyle:"normal", fontWeight: 700}}>Approved:00</Text>
                </Card>

            </View>


            <View style={{ flexDirection: "row", marginTop:-30 }}>

                <Card style={{ marginLeft: -30, margin: 20, padding: 20, width: 180, height: 70, backgroundColor: "#E9D787" }}>
                    <Text style = {{color: "#40360B",textAlign:"center",fontStyle:"normal", fontWeight: 700}}>Pending:00</Text>
                </Card>

                <Card style={{ marginLeft: -10, margin: 20, padding: 20, width: 180, height: 70, backgroundColor: "#FF69B4" }}>
                    <Text style = {{color: "#830209",textAlign:"center",fontStyle:"normal", fontWeight: 700}}>Rejected:00</Text>
                </Card>

            </View>

        </View>

    )
}

export default DasboardScreen