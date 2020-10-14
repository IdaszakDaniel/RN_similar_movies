import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'

export interface Props {
  onChange: Function
  title: string
}

const CheckBoxComponent: React.FC<Props> = ({ onChange, title }) => {
  const [checked, setChecked] = useState(false)

  const setOnPressed = () => {
    const nextValue = !checked
    setChecked(nextValue)
    onChange(nextValue)
  }

  return (
    <CheckBox
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      testID="checkBox"
      accessibilityLabel={`${title} checkbox`}
      checked={checked}
      onIconPress={setOnPressed}
      containerStyle={{ margin: 0, padding: 0 }}
      size={40}
    />
  )
}

export default CheckBoxComponent
