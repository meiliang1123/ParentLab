import React from "react"
import {connect} from "react-redux"
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import {  Button } from 'react-native-elements';
import {login} from "../actions/session"

export class Index extends React.Component {
    onPressLearnMore(){
        this.props.dispatch(login())
        //console.log("xxx")
        alert(JSON.stringify(this.props.session))
    }
    onPressLogin(){
        alert("login")
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:40}}>Grow Together</Text>
                <View style={{flex:1}}></View>
                <Image
                    source={require('../assets/biking.png')}
                    style={{width:300,height:300,resizeMode:"contain"}}
                />
                <ImageBackground source={require('../assets/ground.png')}
                      style={{flex: 1,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            width:1000
                         }}
                >
                    <Button
                        text ='Get Started'
                        onPress={()=>this.props.navigation.navigate("ActivePage")}
                        disabled = {this.props.session.status}
                        buttonStyle={{height: 50, width: 250, backgroundColor: '#43BCD3', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
                        containerStyle={{marginVertical: 10}}
                        textStyle={{fontWeight: 'bold'}}

                    />
                    <Text>Terms and aggrement</Text>
                </ImageBackground>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',

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