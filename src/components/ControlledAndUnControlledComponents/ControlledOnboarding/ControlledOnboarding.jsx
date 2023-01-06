import React, { useState } from 'react'

const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext, onPrevious }) => {
  const[onboardData, setOnboardData] = useState({})
  const[currentIndex, setCurrentIndex] = useState(0)

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardData,
      ...stepData
    }
    if(nextIndex < children.length) {
      setCurrentIndex(nextIndex)
    } else {
      onFinish(updatedData)
    }
    setOnboardData(updatedData)
  }
  const goToPrev = (stepData) => {
    const nextIndex = currentIndex - 1;
    const updatedData = {
      ...onboardData,
      ...stepData
    }
    if(nextIndex < children.length) {
      setCurrentIndex(nextIndex)
    // } else {
    //   onFinish(updatedData)
    // }
    // setOnboardData(updatedData)
  }
}
const currentChild = React.Children.toArray(children)[currentIndex]
if(React.isValidElement(currentChild)) {
  return React.cloneElement(currentChild, { goToNext, goToPrev } )
}
  return (
    <>
    {currentChild}
    </>
  )
}

export default ControlledOnboardingFlow