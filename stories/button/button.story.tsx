import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Button } from '../../src/components/Button'


const ButtonBoom = styled(Button)`
    background: black;
    border-radius: 10px;
`

storiesOf('Components/Button', module).add('default', () => <Button text="Jarvis" />).add('custom', () => <ButtonBoom text="Jarvis" />)
