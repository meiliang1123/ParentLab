import React from "react"
import {connect} from "react-redux"
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import {  Button } from 'react-native-elements';
import {initActivePageData} from "../actions/session"

export class Index extends React.Component {
    componentDidMount(){
       this.props.dispatch(initActivePageData())
    }
    render(){

        return (
            <ScrollView >
                {this.props.session.get_active.map(item=>this.renderItem(item))}
            </ScrollView>
        )
    }
    renderItem(item){
        let {image,name,instruction,steps} = item

        return (
            <View style={styles.container}>
                <Image
                    source={{uri:"http:" + image.url}}
                    style={{width: 100, height: 100,borderRadius:50,margin:20}}
                />
                <Text
                    style={{fontSize:20}}
                >{name}</Text>
                {
                    instruction &&
                    <Text>{instruction}</Text>
                }
                {
                    steps &&
                        steps.map((step,idx)=>(
                            <View>
                                <Text
                                    style={{color:"#43BCD3"}}
                                >STEP {idx}</Text>

                                <Text>{step}</Text>
                            </View>

                        ))
                }

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    button:{
        padding:"5px",
        borderColor:"blue",
        borderStyle:"solid",
        borderWidth:1,
        borderRadius:2
    }
});



const select = (state)=>state

export default connect(select)(Index)