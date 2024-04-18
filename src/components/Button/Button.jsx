import { DefaultButton, InvertedButton } from "./Button.style"


export const BUTTON_TYPE_CLASSES = {
    base : 'base',
    inverted: 'inverted',

}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base] : DefaultButton,
    [BUTTON_TYPE_CLASSES.inverted] : InvertedButton
  }[buttonType]
)
const Button = ({children , buttontype , ...props}) => {
  const CustomButton = getButton(buttontype)
  return (
    <CustomButton {...props}>{children}</CustomButton>
  )
}

export default Button