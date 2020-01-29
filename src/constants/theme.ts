export interface ITheme {
  secondaryColor: string
  border: string
  borderThin: string
  shadow: string
}

const mainTheme = {
  secondaryColor: '#075394',
  border: '3px solid black',
  borderThin: '2px solid black',
  shadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.75)',
} as ITheme

export default mainTheme
