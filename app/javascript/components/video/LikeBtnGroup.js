import React from 'react'
import { HandThumbsDown, HandThumbsUp } from 'react-bootstrap-icons'
import ButtonGroup from '../general/ButtonGroup'

export default function LikeBtnGroup({ video }) {
  const buttons = [
    { name: 'Like', onClick: () => 1, icon: <HandThumbsUp />, ariaLabel: 'Like video' },
    { onClick: () => 2, icon: <HandThumbsDown />, ariaLabel: 'Dislike video' },
  ]

  return <ButtonGroup name="like-video" buttons={buttons} />
}
