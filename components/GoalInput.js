import { useState } from 'react';
import { StyleSheet,View,TextInput,Button, Modal, Image } from "react-native"

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
 
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image source={require('../assets/images/goal.png')} style={styles.image} />
          <TextInput 
              style={styles.textInput} 
              placeholder='Your course goal' 
              onChangeText={goalInputHandler}
              value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title="Add Goal" 
                onPress={addGoalHandler}
                color="#5e0acc"
              />
            </View>
            <View style={styles.button}>
              <Button 
                title='Cancle'
                onPress={props.onCancel}
                color="#f31282"
              />
            </View>
            
          </View>
          
        </View>
      </Modal>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor:'#cccccc',
        backgroundColor: '#311b6b'
    
      },

      textInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '90%',
        marginRight: 8,
        padding : 16
      },

      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
      },

      button: {
        width:'30%',
        marginHorizontal: 8
      },

      image: {
        width: 100,
        height: 100,
        margin: 20


      }

})