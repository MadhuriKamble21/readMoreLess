import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Text,
  Image,
  Description,
  Button,
  ContentContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)

  const onClickButton = () => {
    setIsReadMore(prevStatus => !prevStatus)
  }

  const Info = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const ButtonText = isReadMore ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <Text>Hooks are a new addition to React</Text>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{Info}</Description>
        <Button type="button" onClick={onClickButton}>
          {ButtonText}
        </Button>
      </ContentContainer>
    </AppContainer>
  )
}

export default ReadMore
