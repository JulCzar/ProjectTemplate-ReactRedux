import React from 'react'
import PropTypes from 'prop-types'

import { Container, FlexCentered, Title } from '~/common/styles'

const TemplateMessage = function _TemplateMessage({
	message
}) {
  return (
    <Container>
			<FlexCentered>
				<Title>{message}</Title>
			</FlexCentered>
		</Container>
  )
}

TemplateMessage.propTypes = {
	message: PropTypes.string.isRequired
}

export default TemplateMessage
