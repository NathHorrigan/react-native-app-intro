import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
}) => {
  return (
    <View style={[styles.btnContainer, { height: 0, paddingBottom: 5 }]}>
      <TouchableOpacity style={styles.full}
        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >

      {
        (isDoneBtnShow)
        ? <Text style={[styles.doneButton, { color: rightTextColor }]}>
          {doneBtnLabel}
        </Text>
        : <Text style={[styles.nextButton, { color: rightTextColor }]}>
          {nextBtnLabel}
        </Text>
      }



      </TouchableOpacity>
    </View>
  )
}

export default DoneButton
