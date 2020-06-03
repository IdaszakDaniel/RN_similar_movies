import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'

export interface Props {
  onChange: Function
}

const CheckBoxComponent: React.FC<Props> = ({ onChange }) => {
  const [checked, setChecked] = useState(false)

  const setOnPressed = () => {
    const nextValue = !checked
    setChecked(nextValue)
    onChange(nextValue)
  }

  return (
    <CheckBox
      // @ts-ignore
      testID="checkBox"
      checked={checked}
      onIconPress={setOnPressed}
      containerStyle={{ margin: 0, padding: 0 }}
      size={40}
    />
  )
}

export default CheckBoxComponent
